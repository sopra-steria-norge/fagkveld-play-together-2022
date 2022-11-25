/* Importerer felles-stiler.
 * Denne inneholder alle variabler, og vil gjøre at de er tilgjengelige globalt på Storybook.
 */
import "../lib/base.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
