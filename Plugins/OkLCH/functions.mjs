import { parseColor, formatColor } from "tailwindcss/lib/util/color";

export function flattenColorPalette(colors) {
    const values = Object.assign(
        {},
        ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values]) =>
            typeof values == "object"
                ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
                      [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
                  }))
                : [
                      {
                          [`${color}`]: values,
                      },
                  ],
        ),
    );

    // Remove the DEFAULT key, as we don't want to have default colors to utilites.
    // Example: border-l should generate only the with of the left border and do not add a default color
    if (values.DEFAULT) {
        delete values.DEFAULT;
    }

    return values;
}

export function withAlphaVariable({ color, property, variable }) {
    let properties = [].concat(property);
    if (typeof color === "function") {
        return {
            [variable]: "1",
            ...Object.fromEntries(
                properties.map((p) => {
                    return [
                        p,
                        color({
                            opacityVariable: variable,
                            opacityValue: `var(${variable})`,
                        }),
                    ];
                }),
            ),
        };
    }
    const parsed = (0, parseColor)(color);
    if (parsed === null) {
        return Object.fromEntries(properties.map((p) => [p, color]));
    }
    if (parsed.alpha !== undefined) {
        // Has an alpha value, return color as-is
        return Object.fromEntries(properties.map((p) => [p, color]));
    }
    return {
        [variable]: "1",
        ...Object.fromEntries(
            properties.map((p) => {
                return [
                    p,
                    (0, formatColor)({
                        ...parsed,
                        alpha: `var(${variable})`,
                    }),
                ];
            }),
        ),
    };
}
