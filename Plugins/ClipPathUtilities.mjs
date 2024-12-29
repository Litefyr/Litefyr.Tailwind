import plugin from "tailwindcss/plugin";

export default plugin(function ({ addVariant }) {
    ["header", "content", "footer"].forEach((section) => {
        addVariant(`${section}-clip`, [`.${section}-clip &`]);
        addVariant(`${section}-flat`, [`.${section}-flat &`]);
    });
});
