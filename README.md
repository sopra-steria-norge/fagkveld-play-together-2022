# designsystem-reference-template

Dette repoet har som mål å finne en bærekraftig struktur for et monorepo som kombinerer design-tokens, et designsystem/komponentbibliotek samt et vilkårlig antall frontend-applikasjoner som konsumerer komponenter fra komponentbiblioteket. 

Dette skal på sikt kunne fungere som et referanse-repo for utvikling av designsystemer.

## Målsettinger

* Minimer antall dependencies
* Bruk etablerte og velprøvde teknologier
* Skap den beste mulige utvikleropplevelsen

## Kom i gang! 

Kjør kommandoene under fra rot-katalogen i prosjektet for å installere avhengigheter, og deretter starte både Storybook og frontend:

```bash
yarn
yarn run dev:frontend
yarn run dev:designsystem
```

Dette vil kjøre opp **frontend** på http://localhost:3000, og **designsystem/storybook** på http://localhost:6006/

## Hva fungerer nå?

* Yarn workspace oppsett
* Import av komponenter fra `"packages/designsystem"` --> `"packages/frontend"`
* Storybook oppsett med ViteJS
* Transformering og bygging av CSS variabler fra Figma Tokens .json fil

## Hva gjenstår?

### Short term
* Bruk av CSS-variabler i `"packages/designsystem"` og videre inn i `"packages/frontend"`
* Oppsett av oppgaver for hackathon
* Antakelig mer!

### Long term
* Kodelinting & formatering
* Formalisering av prosjektstruktur/arkitektur
* Build av designsystem
* CSS-rammeverk? PostCSS?
* ...og helt sikkert mye mer 🤓