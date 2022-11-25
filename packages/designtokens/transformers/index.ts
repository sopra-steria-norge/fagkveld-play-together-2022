import type { DesignToken } from "style-dictionary";

/**
 * Transformerer verdien fra "boxShadow" fra Figma Tokens til `
 * @param token Et token med type "boxShadow" fra våre design-tokens.
 * @returns En ferdig streng til bruk med css-property "box-shadow".
 */
export function transformBoxShadow(token: DesignToken): string {
  const { x, y, blur, spread, color } = token.value;
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

/**
 * Konverterer en token til css verdi med "px" bak.
 * @param token Et token fra våre design-tokens.
 * @returns Tokenets verdi med pixel bak.
 */
export function transformSizeToPx(token: DesignToken): string {
  const { value } = token;
  return `${value}px`;
}

/**
 * Konverterer en design token med type "typography" til en font-shorthand verdi.
 * @param {*} token Et token med type "typography" fra våre design-tokens.
 * @returns Tokenet konvertert til en verdi for bruk med font-shorthand.
 */
export function transformTypographyToFont(token: DesignToken): string {
  const { fontFamily, fontWeight, lineHeight, fontSize } = token.original.value;
  return `normal normal ${fontWeight} ${fontSize}px/${lineHeight}px ${fontFamily}`;
}
