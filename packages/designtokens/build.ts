import StyleDictionary from "style-dictionary";

import { baseConfig } from "./config";

import { isBoxShadow, isSize, isTypography } from "./matchers";

import {
  transformBoxShadow,
  transformSizeToPx,
  transformTypographyToFont,
} from "./transformers";

const styleDictionary = StyleDictionary.extend(baseConfig);

// Transformer størrelsesverdier fra Figma Tokens til css-verdier med "px"-property.
styleDictionary.registerTransform({
  name: "designsystem/sizeToPx",
  type: "value",
  transitive: false,
  matcher: isSize,
  transformer: transformSizeToPx,
});

// Transformer tokens med type "boxShadow" fra Figma Tokens til css.
styleDictionary.registerTransform({
  name: "designsystem/boxShadow",
  type: "value",
  transitive: false,
  matcher: isBoxShadow,
  transformer: transformBoxShadow,
});

// Transformer tokens med type "typografi" fra Figma Tokens til css.
styleDictionary.registerTransform({
  name: "designsystem/typography",
  type: "value",
  transitive: true,
  matcher: isTypography,
  transformer: transformTypographyToFont,
});

console.log(`\n[style-dictionary] generating tokens`);

styleDictionary.buildPlatform("web");
