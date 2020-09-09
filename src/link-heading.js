const existingIDs = []

module.exports = function linkHeading(text, options) {
    let id = text.toLowerCase()
    id = id.replace(/[^\w ]/g, "")
    id = id.replace(/ /g, "-")
    id = id.replace(/-+/g, "-")

    const existingEntry = existingIDs.find(e => e.id === id)
    if (existingEntry) {
        id += `-${existingEntry.times}`
        existingEntry.times++
    } else {
        existingIDs.push({ id, times: 1 })
    }

    const linkContent = options.fixInLinks
        ? options.tocItemPrefix + text + options.tocItemSuffix
        : text
    return `[${linkContent}](#${id})`
}
