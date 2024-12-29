import plugin from "tailwindcss/plugin";

function headerCollapse(value) {
    const height = "var(--clippath-header-height,var(--header-height))";
    const hasValue = value && value != "0px";
    return {
        "margin-top": `calc(${height} * -1)`,
        "padding-top": hasValue ? `calc(${height} + ${value})` : height,
    };
}

export default plugin(
    function ({ addUtilities, matchUtilities, theme }) {
        matchUtilities(
            {
                "header-collapse": (value) => headerCollapse(value),
            },
            {
                values: theme("spacing"),
            },
        );

        addUtilities({
            ".header-collapse": headerCollapse(),
            ".no-content-padding": {
                "--content-padding": "0",
            },
            ".no-content-gap": {
                "--content-gap": "0",
            },
        });
    },
    {
        theme: {
            extend: {
                spacing: {
                    content: "var(--content-padding, 0)",
                    "content-gap": "var(--content-gap)",
                    header: "var(--header-height)",
                },
            },
        },
    },
);
