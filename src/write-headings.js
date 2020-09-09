const linkHeading = require("./link-heading")

let toc = ""
function writeHeadings(headings, options, depth = 0) {
    let i = 0
    for (const heading of headings) {
        const indent = " ".repeat(depth * options.tocIndent)
        const item = options.useNumberedLists ? `${i + 1}.` : "-"
        const content = linkHeading(heading.text, options)
        const fixedContent = !options.fixInLinks
            ? options.tocItemPrefix + content + options.tocItemSuffix
            : content // text was already prefixed by linkHeading()

        toc += `${indent}${item} ${fixedContent}\n`
        if (heading.children) writeHeadings(heading.children, options, depth + 1)
        i++
    }
    return toc
}

module.exports = writeHeadings
