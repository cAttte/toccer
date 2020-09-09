const appendChild = (target, child, options) => {
    child.children = parseNestedHeadings(child.children, options)
    target.push(child)
    if (child.siblings.length) target.push(...child.siblings)
}

function parseNestedHeadings(headings, options) {
    if (!headings.length) return []
    const topLevel = headings[0].depth

    const rootChildren = []
    let currentParent

    for (const heading of headings) {
        if (heading.depth === topLevel) {
            if (currentParent) appendChild(rootChildren, currentParent, options)
            currentParent = heading
            currentParent.children = []
            currentParent.siblings = []
        } else if (
            currentParent &&
            (!options.ignoreNonlinearHeadings || heading.level - topLevel === 1)
        ) {
            if (heading.depth > topLevel) currentParent.children.push(heading)
            else currentParent.siblings.push(heading)
        }
    }
    appendChild(rootChildren, currentParent, options)

    return rootChildren
}

module.exports = parseNestedHeadings
