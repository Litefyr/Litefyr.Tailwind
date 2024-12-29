import plugin from "tailwindcss/plugin";

export default plugin(({ addVariant }) => {
    // Add hover and focus combi
    addVariant("hocus", "&:where(:hover,:focus)");
    addVariant("group-hocus", ":merge(.group):where(:hover,:focus) &");
    addVariant("peer-hocus", ":merge(.peer):where(:hover,:focus) ~ &");

    // Add combi hover and focus-within
    addVariant("hocus-within", "&:where(:hover,:focus-within)");
    addVariant("group-hocus-within", ":merge(.group):where(:hover,:focus-within) &");
    addVariant("peer-hocus-within", ":merge(.peer):where(:hover,:focus-within) ~ &");

    // Add combi hover and focus-visible
    addVariant("hocus-visible", "&:where(:hover,:focus-visible)");
    addVariant("group-hocus-visible", ":merge(.group):where(:hover,:focus-visible) &");
    addVariant("peer-hocus-visible", ":merge(.peer):where(:hover,:focus-visible) ~ &");
});
