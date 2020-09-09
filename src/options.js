const validate = require("validate.js")

const defaults = {
    ignoreMainHeading: true,
    ignoreNonlinearHeadings: false,
    ignoreHeadings: "table of contents",
    ignoreLevels: [],

    tocIndent: 4,
    tocItemPrefix: "",
    tocItemSuffix: "",
    fixInLinks: false,
    useNumberedLists: false
}

const bool = name => ({
    type: {
        type: "boolean",
        message: `${name} must be a boolean.`
    }
})

const constraints = {
    ignoreMainHeading: bool("ignoreMainHeading"),
    ignoreNonlinearHeadings: bool("ignoreNonlinearHeadings"),
    ignoreHeadings: {
        type: {
            type: v => typeof v === "string" || v instanceof RegExp,
            message: "ignoreHeadings must be a string or a RegExp."
        }
    },
    ignoreLevels: {
        type: {
            type: v =>
                typeof v === "number" ||
                (Array.isArray(v) && v.every(i => typeof i === "number")),
            message: "ignoreLevels must be a number or an Array of numbers."
        }
    },
    tocIndent: {
        numericality: {
            noStrings: true,
            onlyInteger: true,
            greaterThan: 0,
            lessThanOrEqualTo: 8,
            message: "tocIndent must be an integer > 0 and <= 8."
        }
    },
    tocItemPrefix: {
        type: {
            type: "string",
            message: "tocItemPrefix must be a string."
        }
    },
    tocItemSuffix: {
        type: {
            type: "string",
            message: "tocItemSuffix must be a string."
        }
    },
    fixInLinks: bool("fixInLinks"),
    useNumberedLists: bool("useNumberedLists")
}

module.exports = function getOptions(input) {
    const options = { ...defaults, ...input }
    const error = validate(options, constraints, { fullMessages: false })
    if (error) throw new Error(Object.values(error)[0][0])

    return options
}
