import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownTextBlock({text}) {


    const markdownSample="---\n" +
        "__Advertisement :)__\n" +
        "\n" +
        "- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n" +
        "  resize in browser.\n" +
        "- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n" +
        "  i18n with plurals support and easy syntax.\n" +
        "\n" +
        "You will like those projects!\n" +
        "\n" +
        "---\n" +
        "\n" +
        "# h1 Heading 8-)\n" +
        "## h2 Heading\n" +
        "### h3 Heading\n" +
        "#### h4 Heading\n" +
        "##### h5 Heading\n" +
        "###### h6 Heading\n" +
        "\n" +
        "\n" +
        "## Horizontal Rules\n" +
        "\n" +
        "___\n" +
        "\n" +
        "---\n" +
        "\n" +
        "***\n" +
        "\n" +
        "\n" +
        "## Typographic replacements\n" +
        "\n" +
        "Enable typographer option to see result.\n" +
        "\n" +
        "(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n" +
        "\n" +
        "test.. test... test..... test?..... test!....\n" +
        "\n" +
        "!!!!!! ???? ,,  -- ---\n" +
        "\n" +
        "\"Smartypants, double quotes\" and 'single quotes'\n" +
        "\n" +
        "\n" +
        "## Emphasis\n" +
        "\n" +
        "**This is bold text**\n"

    return (
        <ReactMarkdown children={markdownSample} />
    )
}