/**
 * Hjelpefunksjon for transformering av CSS-modules regler til tekststrenger.
 *
 * @param styles Et *.module.css objekt med CSS regler.
 * @returns CSS regler som en tekststreng for bruk i komponenter.
 */
export function classes(styles: string | string[]): string {
  if (Array.isArray(styles)) {
    return styles.join(" ");
  }
  return styles;
}
