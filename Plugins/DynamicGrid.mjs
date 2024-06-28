import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities }) {
    addUtilities({
        ".grid-cols-dynamic": { "grid-template-columns": "repeat(var(--grid-cols), minmax(0, 1fr))" },
        ".grid-rows-dynamic": { "grid-template-rows": "repeat(var(--grid-rows), minmax(0, 1fr))" },

        ".grid-cols-dynamic-small": { "grid-template-columns": "repeat(var(--grid-cols-small), minmax(0, 1fr))" },
        ".grid-rows-dynamic-small": { "grid-template-rows": "repeat(var(--grid-rows-small), minmax(0, 1fr))" },

        ".grid-cols-dynamic-big": { "grid-template-columns": "repeat(var(--grid-cols-big), minmax(0, 1fr))" },
        ".grid-rows-dynamic-big": { "grid-template-rows": "repeat(var(--grid-rows-big), minmax(0, 1fr))" },

        ".col-span-dynamic": { "grid-column": "span var(--col-span) / span var(--col-span)" },
        ".row-span-dynamic": { "grid-row": "span var(--row-span) / span var(--row-span)" },

        ".col-span-dynamic-small": { "grid-column": "span var(--col-span-small) / span var(--col-span-small)" },
        ".row-span-dynamic-small": { "grid-row": "span var(--col-span-small) / span var(--col-span-small)" },

        ".col-span-dynamic-big": { "grid-column": "span var(--col-span-big) / span var(--col-span-big)" },
        ".row-span-dynamic-big": { "grid-row": "span var(--col-span-big) / span var(--col-span-big)" },
    });
});
