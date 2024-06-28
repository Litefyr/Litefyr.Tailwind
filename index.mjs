import defaultTheme from "tailwindcss/defaultTheme";
import typography from "./typography.mjs";
import containerQueriesPlugin from "@tailwindcss/container-queries";
import typographyPlugin from "@tailwindcss/typography";
import utopiaPlugin from "@domchristie/tailwind-utopia";
import { merge } from "ts-deepmerge";
import {
    ClipPathUtilities,
    ColorScheme,
    Combinators,
    ContentDimensions,
    DynamicGrid,
    ExtendTheme,
    Hocus,
    LightMode,
    NotDisabled,
    NotEmpty,
    OkLCH,
    QuantityQueries,
    SafeArea,
    Scrollbar,
    SpacingUtilities,
    TextShadow,
} from "./Plugins/index.mjs";

const defaultPluginSettings = {
    contentDimensions: {
        gap: defaultTheme.spacing["20"],
        content: "56rem",
        wide: defaultTheme.screens.xl,
        contentSlider: "66rem",
        wideSlider: parseInt(defaultTheme.screens.xl) + 160 + "px",
    },
    oklch: {
        contrastThreshold: 0.65,
        minContrastLightness: 0.05,
        maxContrastLightness: 0.95,
    },
    forms: {
        strategy: "class",
    },
};

export default function config({ pluginSettings, theme, corePlugins } = {}) {
    // Merge default settings with custom settings
    theme = merge({ extend: { ...ExtendTheme, typography } }, theme || {});
    pluginSettings = merge(defaultPluginSettings, pluginSettings || {});
    corePlugins = corePlugins || {};

    /** @type {import('tailwindcss').Config} */
    return {
        darkMode: "class",
        theme,
        plugins: [
            utopiaPlugin,
            OkLCH(pluginSettings.oklch),
            containerQueriesPlugin,
            typographyPlugin,
            ClipPathUtilities,
            ColorScheme,
            Combinators,
            ContentDimensions(pluginSettings.contentDimensions),
            DynamicGrid,
            Hocus,
            LightMode,
            NotDisabled,
            NotEmpty,
            QuantityQueries,
            SafeArea,
            Scrollbar,
            SpacingUtilities,
            TextShadow,
        ],
        corePlugins,
    };
}
