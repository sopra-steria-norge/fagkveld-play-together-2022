import type { DesignToken } from "style-dictionary";

/**
 * Sjekk om token er av type "boxShadow".
 * @param {*} token
 * @returns true eller false.
 */
export function isBoxShadow(token: DesignToken): boolean {
  return token.type === "boxShadow";
}

/**
 * Sjekk om token er en av typene som beskriver størrelse.
 * @param {*} token
 * @returns true eller false.
 */
export function isSize(token: DesignToken): boolean {
  return (
    token.type === "fontSizes" ||
    token.type === "fontSize" ||
    token.type === "dimension" ||
    token.type === "borderRadius" ||
    token.type === "spacing"
  );
}

/**
 * Sjekk om token er av type "typography".
 * @param {*} token
 * @returns true eller false.
 */
export function isTypography(token: DesignToken): boolean {
  return token.type === "typography";
}
