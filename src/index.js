const marked = require("marked")
const getOptions = require("./options")
const parseNestedHeadings = require("./parse-nested-headings")
const writeHeadings = require("./write-headings")

module.exports = function toccer(markdown, options = {}) {
    options = getOptions(options)

    let headings = marked.lexer(markdown).filter(token => token.type === "heading")
    if (options.ignoreMainHeading && headings[0].depth === 1) headings = headings.slice(1)

    const filter = h => h.text.toLowerCase() !== options.ignoreHeadings.toLowerCase()
    if (typeof options.ignoreHeadings === "string") headings = headings.filter(filter)
    else if (options.ignoreHeadings instanceof RegExp)
        headings = headings.filter(h => !options.ignoreHeadings.test(h.text))

    const nestedHeadings = parseNestedHeadings(headings, options)
    const toc = writeHeadings(nestedHeadings, options)
    return toc
}
