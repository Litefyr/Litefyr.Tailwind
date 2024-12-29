import settings from "../../../tailwind.litefyr.mjs";
import { buildTailwindConfig } from "../../../Packages/Carbon/Carbon.CodePen/Resources/Private/Build/buildTailwindConfig.mjs";

const TARGET = "./Packages/Litefyr/Litefyr.Integration/Resources/Public/Scripts/TailwindConfig.js";
const TAILWIND_FILE = "./Build/Litefyr.Tailwind/index.mjs";

// Disable preflight
if (settings.corePlugins) {
    settings.corePlugins.preflight = false;
    settings.corePlugins.container = false;
} else {
    settings.corePlugins = {
        preflight: false,
        container: false,
    };
}

buildTailwindConfig(TARGET, TAILWIND_FILE, settings);
