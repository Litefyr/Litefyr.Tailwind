import plugin from "tailwindcss/plugin";

const themeExtend = {
    fontSize: {
        logo: "var(--logo-size, 2rem)",
        logosmall: "calc(var(--logo-size, 2rem) * .8)",
    },
    fontWeight: {
        normal: getFontWeight("normal", 400),
        bold: getFontWeight("bold", 700),
        "main-bold": getFontWeight("main-bold", "var(--font-weight-bold)"),
        "headline-bold": getFontWeight("headline-bold", "var(--font-weight-main-bold)"),
        "quote-bold": getFontWeight("quote-bold", "var(--font-weight-main-bold)"),
        "header-bold": getFontWeight("header-bold", "var(--font-weight-main-bold)"),
        "footer-bold": getFontWeight("footer-bold", "var(--font-weight-main-bold)"),
    },
    fontFamily: {
        inherit: "inherit",
        main: getFontFamilyCustomProperties("main"),
        headline: getFontFamilyCustomProperties("headline"),
        quote: getFontFamilyCustomProperties("quote"),
        button: getFontFamilyCustomProperties("button"),
        header: getFontFamilyCustomProperties("header"),
        footer: getFontFamilyCustomProperties("footer"),
        countdown: getFontFamilyCustomProperties("countdown"),
    },
};

export default plugin(
    function ({ addBase }) {
        const options = {
            ".font-main": {
                "--font-weight-bold": "var(--font-weight-main-bold, var(--font-weight-bold))",
                fontWeight: getFontWeight("main", "var(--font-weight-normal)"),
            },
            ".font-button": {
                fontWeight: getFontWeight("button", "var(--font-weight-main)"),
                textTransform: "var(--font-uppercase-button, inherit)",
            },
            ".font-countdown": {
                fontWeight: getFontWeight("countdown", "var(--font-weight-main)"),
            },
        };
        ["headline", "quote", "header", "footer"].forEach((name) => {
            options[`.font-${name}`] = {
                "--font-weight-bold": `var(--font-weight-${name}-bold, var(--font-weight-main-bold))`,
                fontWeight: getFontWeight(name, "var(--font-weight-main)"),
                textTransform: `var(--font-uppercase-${name}, inherit)`,
            };
        });

        addBase(options);
    },
    {
        safelist: [
            "text-fl-xs",
            "text-fl-sm",
            "text-fl-base",
            "text-fl-lg",
            "text-fl-xl",
            "text-fl-2xl",
            "text-fl-3xl",
            "text-fl-4xl",
        ],
        theme: {
            extend: themeExtend,
        },
    },
);

function getFallback(fallback = false) {
    return fallback === false ? "" : `, ${fallback}`;
}

function getFontWeight(name, fallback = false) {
    return `var(--font-weight-${name}${getFallback(fallback)})`;
}

function getFontFamilyCustomProperties(name) {
    return [
        `var(--font-${name})`,
        {
            fontFeatureSettings: `var(--font-${name}--feature)`,
            fontVariationSettings: `var(--font-${name}--variation)`,
        },
    ];
}
