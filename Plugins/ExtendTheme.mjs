export default {
    colors: {
        theme: {
            color: getColorCustomProperties(),
            accent: getColorCustomProperties("accent"),
            back: getColorCustomProperties("back"),
            front: getColorCustomProperties("front"),
            header: "oklch(var(--color-transparent-header-l, var(--color-front-l)) var(--color-transparent-header-c, var(--color-front-c)) var(--color-transparent-header-h, var(--color-front-h)) / <alpha-value>)",
        },
    },
    height: {
        logo: "1.25em",
    },
    maxHeight: {
        logo: "1.25em",
    },
    borderRadius: {
        box: getBorderRadius("box"),
        image: getBorderRadius("image"),
        button: getBorderRadius("button"),
        scroller: getBorderRadius("scroller"),
        input: getBorderRadius("input", "4px"),
    },
    maxWidth: {
        content: "var(--content-max-width)",
        "content-wide": "var(--content-max-width-wide)",
    },
    utopia: {
        spacing: {
            "4xl": 10,
        },
    },
};

function getFallback(fallback = false) {
    return fallback === false ? "" : `, ${fallback}`;
}

function getBorderRadius(name, fallback = false) {
    return `var(--rounded-${name}${getFallback(fallback)})`;
}

function getColorCustomProperties(name) {
    name = name ? `-${name}` : "";
    return `oklch(var(--color${name}-l) var(--color${name}-c) var(--color${name}-h) / <alpha-value>)`;
}
