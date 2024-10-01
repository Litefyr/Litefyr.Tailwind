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
    Dynamic,
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
    sliderContentDimensionAddedValue: 160,
    contentDimensions: {
        gap: defaultTheme.spacing["20"],
        content: "56rem",
        wide: defaultTheme.screens.xl,
    },
    oklch: {
        precision: 6,
    },
};

export default function config({ pluginSettings, theme, corePlugins } = {}) {
    // Merge default settings with custom settings
    theme = merge({ extend: { ...ExtendTheme, typography } }, theme || {});
    pluginSettings = merge(defaultPluginSettings, pluginSettings || {});
    corePlugins = corePlugins || {};

    const setSliderContentDimensions = (key) => {
        const sliderKey = `${key}Slider`;
        if (pluginSettings.contentDimensions[sliderKey]) {
            return;
        }

        const isPx = pluginSettings.contentDimensions[key].endsWith("px");
        const isRem = pluginSettings.contentDimensions[key].endsWith("rem");
        if (!isPx && !isRem) {
            throw new Error(`The value of ${key} must be in px or rem`);
        }
        const rootValue = parseInt(pluginSettings.contentDimensions[key]);
        const addValue = pluginSettings.sliderContentDimensionAddedValue / (isPx ? 1 : 16);
        const unit = isPx ? "px" : "rem";
        pluginSettings.contentDimensions[sliderKey] = rootValue + addValue + unit;
    };

    setSliderContentDimensions("content");
    setSliderContentDimensions("wide");

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
            Dynamic,
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
