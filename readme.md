# toccer-core

Markdown Table of Contents generator.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
    -   [toccer(markdown, options?)](#toccermarkdown-options)
        -   [markdown](#markdown)
        -   [options](#options)
            -   [ignoreMainHeading](#ignoremainheading)
            -   [ignoreNonlinearHeadings](#ignorenonlinearheadings)
            -   [ignoreHeadings](#ignoreheadings)
            -   [ignoreLevels](#ignorelevels)
            -   [tocIndent](#tocindent)
            -   [tocItemPrefix](#tocitemprefix)
            -   [tocItemSuffix](#tocitemsuffix)
            -   [fixInLinks](#fixinlinks)
            -   [useNumberedLists](#usenumberedlists)

## Installation

```
npm install toccer-core
```

## Usage

```js
const toccer = require("toccer-core")
const markdown = `
# Main heading (ignoreMainHeading = true)
## Small heading
### Smaller heading
## Another small heading
`

console.log(toccer(markdown))
/*
- [Small heading](#small-heading)
    - [Smaller heading](#smaller-heading)
- [Another small heading](#another-small-heading)
*/
```

### toccer(markdown, options?)

#### markdown

The markdown document to generate a TOC from.

-   **Type:** `string`

#### options

##### ignoreMainHeading

Whether the main heading (if any) should be excluded from the TOC.

-   **Type:** `boolean`
-   **Default:** `true`

##### ignoreNonlinearHeadings

Whether "non-linear" headings (for example, the h5 and forwards in `h1 -> h2 -> h5 -> h6`) should be excluded from the TOC. You should probably not use this setting as it can cause many side effects, and instead use `ignoreHeadings` to ignore certain headings.

-   **Type:** `boolean`
-   **Default:** `false`

##### ignoreHeadings

Heading title(s) to exclude from the TOC. Strings are matched case-insensitively.

-   **Type:** `string | string[] | RegExp | RegExp[]`
-   **Default:** `"table of contents"`

##### ignoreLevels

Heading levels to exclude from the TOC.

-   **Type:** `number | number[]`
-   **Default:** `null`

##### tocIndent

Indentation width to use for every TOC level.

-   **Type:** `number`
-   **Default:** `4`

##### tocItemPrefix

Text to prefix every item of the TOC with.

-   **Type:** `string`
-   **Default:** `""`

##### tocItemSuffix

Text to suffix every item of the TOC with.

-   **Type:** `string`
-   **Default:** `""`

##### fixInLinks

Whether to place prefixes and suffixes inside the item links.

-   **Type:** `boolean`
-   **Default:** `false`

##### useNumberedLists

Whether to use numbered/ordered lists in the TOC.

-   **Type:** `boolean`
-   **Default:** `false`
