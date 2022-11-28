# 🧑‍🏫 Fagkveld | Play Together: Design + Frontend

**Velkommen til fagkveld for design + frontend!**

Vi har forberedt dette repoet for å gi et innblikk i hvordan design tokens kan brukes i praksis, både til utvikling av designsystemer og frontend applikasjoner.

Dette er ingen absolutt fasit, og det er mange veier til mål, men vi har satt opp dette repoet på en måte vi opplever som produktiv og fremtidsrettet.

Følg oppskriften under for å komme i gang.


## 👩‍💻 **Hva trenger jeg for å være med?**

Prosjektet er delt i tre ulike deler, som alle er knyttet sammen som et monorepo med [Yarn Workspaces](https://yarnpkg.com/features/workspaces).

**❗️For å kunne kjøre eksempelkoden og følge den tekniske delen av workshopen må du ha følgende programvare og verktøy tilgjengelig:**

* **NodeJS** ([Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) / [MacOS + Linux](https://javascript.plainenglish.io/how-to-install-nvm-the-node-version-manager-4254744cbd57))
* **Yarn** ([Yarn 1.x](https://classic.yarnpkg.com/en/docs/install#mac-stable) / [Yarn 3](https://yarnpkg.com/getting-started/install) - begge vil fungere)
* **En kodeeditor** (VSCode, WebStorm, SublimeText, Atom, etc.)
* **En terminal** (Windows/Mac/Linux)

Listen over inneholder linker til nedlasting og oppsett av Node og Yarn, men det er ingen spesifikke krav om versjon utover en relativt moderne versjon av Node (16 eller høyere). Det du har installert fra før vil antakelig fungere helt fint.

> ***OBS**: Eksisterende kode er skrevet i TypeScript, men dersom du heller foretrekker JavaScript er det fritt frem for å bruke det. Alle moduler i prosjektet er konfigurert for å tillate både JS og TS.*

## 🌈 **Design tokens + Figma Tokens**

Design tokens er de minste mulige atomære designverdier som vi kan bruke i utforming av et gitt brukergrensesnitt. Vi tenker da på verdier som beskriver farger, fonter, avstander, størrelser og alt som vi på et eller annet vis behøver å angi i eksempelvis CSS. 

Noe av det fine med design tokens er at de kan uttrykkes i ren tekst, og lagres i form av eks. JSON-filer. Dette gjør at vi kan frigjøre alle fargeverdier fra stylingspråk og plattform, og dermed også få en langt mer portabel og teknologiagnostisk måte å behandle designverdiene på. 

La oss se på et eksempel:

```json
"red-500": {
  "value": "#CF022B",
  "type": "color"
},
```

Dette er et token som beskriver en rødfarge. Den har en kode i navnet som peker på dens plass som en del av en større fargepalett, og består av en `type` og en `value`.

Det som er kjekt med denne er at vi enkelt kan generere styling-verdier for flere ulike plattformer og CSS-dialekter basert på denne, og bruke de som variabler når vi utvikler. For å gjøre dette finnes det ulike verktøy der ute, men vi har valgt å fokusere på [style-dictionary](https://amzn.github.io/style-dictionary/#/) som foreløpig nok er det mest etablerte verktøyet for dette.

Style-dictionary er et enkelt men kraftig verktøy for å generere variabler til web, iOS og Android. Det kan gjøres enten selvstendig via CLI, eller også som en del av et script. Du kan også utvide dette med egen skreddersydd logikk for håndtering av ulike typer variabler utover det som støttes av den medfølgende konfigurasjonen.

Etter å ha vært prosessert av style-dictionary kan overnevnte token bli forvandlet til en av disse:

```css
/* _variables.css */

--red-500: #CF022B;
```

```less
// _variables.less

@red-500: #CF022B;
```

```scss
// _variables.scss

$red-500: #CF022B;
```

Ved å nå bruke variabelen `--red-500` i stedet for `#CF022B` for å sette en farge i CSS-filene våre kan designeren nå tilpasse den faktiske fargeverdien, og alt vi trenger å gjøre er å generere nye og oppdaterte variabler - så ordner resten av CSS-en seg selv! 🪄

**Hvordan får vi dette til å fungere med Figma?**

I dag sverger mange designere til programvaren [Figma](https://www.figma.com). Dette er ikke uten grunn, da Figma er en meget kraftig og allsidig programvare.

Dessverre er det ikke ennå innebygget støtte for design tokens i Figma. Men frykt ikke, det finnes heldigvis plugins som hjelper oss på vei!

For å arbeide med design tokens i Figma kan du bruke pluginen [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978).

Denne pluginen vil la deg opprette, redigere og bruke design tokens rett i Figma prosjektet ditt. I tillegg har den funksjonalitet for å skrive og lese tokens direkte til et repo på GitHub, noe som gjør at man kan oppdatere `.json` filen med tokens rett fra Figma. 

### **Konfigurasjon av Figma Tokens med et GitGhub Repo**
Før du kan skrive/lese til et GitHub repo med Figma Tokens må du først opprette en konfigurasjon i pluginen. Heldigvis er det enkelt å gjøre gjennom grensesnittet.

Følg oppskriften under for å komme i gang:
    <br/>
    <br/>

1. Sørg for å ha installert [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978) i din Figma.
   
   Når den er installert vil den være tilgjengelig fra verktøymenyen oppe til venstre slik du ser på bildet.
   <br/>
   <br/>
   <img width="1503" alt="figma-tokens-step-1" src="https://user-images.githubusercontent.com/44908461/204022251-4df29db8-1b0c-436a-9a10-695828c882dd.png">

2. Trykk på menyalternativet **Settings** som markert på bildet.
    <br/>
    <br/>
    <img width="1512" alt="figma-tokens-step-2" src="https://user-images.githubusercontent.com/44908461/204022295-b4956b76-3e64-4d61-baaf-caa3ae47a818.png">

3. Du vil nå få opp en meny der du kan velge mellom ulike måter å lagre dine tokens på. 

    Trykk her på menyalternativet **GitHub**.
    <br/>
    <br/>
    <img width="1467" alt="figma-tokens-step-3" src="https://user-images.githubusercontent.com/44908461/204022322-529d420a-c959-4d19-9b69-e361671646d2.png">

4. Fyll inn alle feltene som er utfylt på bildet under med verdiene som gjelder for ditt prosjekt. 

    Under "File Path" angir du filstien til JSON-filen som inneholder dine tokens.
    
    Du behøver her også en **Personal Access Token** for din GitHub bruker for å kunne interagere med repoet. Denne kan opprettes i GitHub sitt webgrensesnitt under "Settings > Developer settings > Tokens". Følg linken her for å gå direkte til siden: https://github.com/settings/tokens. 

    Når du har fylt ut alt, trykk på **"Save"**.
    <br />
    <br />
    <img width="1449" alt="figma-tokens-step-4" src="https://user-images.githubusercontent.com/44908461/204022335-d2de834d-0faf-41ba-9590-67b110af542d.png">

5. Du er nå klar til å pushe/pulle tokens fra GitHub repoet med Figma Tokens. 

    Du vil også nå se noen snarveier neders i plugin-grensesnittet for **pull** og **push** handlinger, samt en indikator som viser hvilken **branch** pluginen er konfigurert til å interagere med.
    <br />
    <br />
    <img width="325" alt="figma-tokens-step-5" src="https://user-images.githubusercontent.com/44908461/204022394-00a3f4ac-ac07-4d93-ae7a-a6850acb384c.png">

6. Når du trykker på **"Push"** knappen vil du se en meny som på bildet under. 
    
    Her kan du skrive en commit-melding og velge branch før du committer.
    
    Når du trykker på **"Push"** vil Figma Tokens skrive endringene til GitHub - og vips, så var du i gang! 🚀
    <br />
    <br />
    <img width="1441" alt="figma-tokens-step-6" src="https://user-images.githubusercontent.com/44908461/204022415-b6b6232c-489c-4268-ba94-9011c3d04543.png">


## 🏗 **Prosjektstruktur**

Koden i dette repoet er delt inn i tre deler: `designtokens`, `designsystem` og `frontend`. Du finner disse i katalogen `packages`.

* **packages/designtokens**: Dette prosjektet inneholder et eksempeloppsett for bruk av biblioteket `style-dictionary`. Dette er et verktøy som hjelper oss med å generere variabler basert på designtokens uttrykt i JSON. Her bruker vi også verktøyet `token-transformer` for å omgjøre designtokens fra "Figma Tokens" til noe som style-dictionary kan forstå.

* **packages/designsystem**: Her vil du finne et særdeles enkelt designsystem med et par enkle komponenter, og en ferdig konfigurert Storybook for demonstrasjon og utforsking av disse. Dette designsystemet bruker CSS-verdier som er generert ved hjelp av style-dictionary.

* **packages/frontend**: I denne katalogen finner du en svært enkel frontend-app med Vite . Denne benytter seg av komponenter direkte fra designsystemet, og du vil her se i `package.json` at designsystem prosjektet er registrert som en avhengighet.

Vårt mål med denne inndelingen er å synliggjøre hvordan du kan oppnå en helhetlig verdikjede, som følger designverdiene helt fra en JSON-fil med tokens og ut i en frontend applikasjon.

### 🔌 **Hva er ikke inkludert?**

For å redusere kompleksiteten underveis er prosjektet satt opp med en relativt minimal konfigurasjon. 

I et "real world" prosjekt vil man typisk også legge til linting på alle deler av prosjektet, tester av koden, og en haug med andre ting som man typisk finner i et produksjonsklart prosjekt.

Dette er bevisst utelatt slik at vi kan fokusere på det viktigste denne kvelden - nemlig **design tokens**.

## ⚡️ **Kom i gang!**

Kjør kommandoene under **fra rot-katalogen i prosjektet** for å installere avhengigheter for alle undermodulene, og deretter starte både Storybook og frontend:

```bash
yarn                       # Installer avhengigheter
yarn dev                   # Start storybook og frontend samtidig.
```

Du kan også starte Storybook og frontend hver for seg ved å kjøre disse kommandoene i hver sin terminal.

```bash
yarn run dev:frontend      # Start frontend app
yarn run dev:designsystem  # Start storybook.
```

Dette vil kjøre opp **frontend** på http://localhost:3000, og **designsystem/storybook** på http://localhost:6006/. 

Når du har startet appene, se i terminal og konsoll og kontroller at det er fritt for feilmeldinger.


## 🫵 **Eksempler på oppgaver**

Når du har fått prosjektet opp og snurre er veien kort til å bygge videre på det selv.

**Her er noen mulige veier du og din fagkveld-buddy kan ta:**

1. **Begynn fra scratch med et tomt prosjekt i Figma**. Sett opp noen design tokens og utform et enkelt komponent. Synkroniser tokens med GitHub, og implementer komponentet. Bonus: Refaktorer eksisterende komponenter til å bruke nye tokens.

1. Importer eksisterende tokens i Figma. Oppdater så noen av disse sync med GitHub. Dra det ned lokalt og se endringene tre i kraft i Storybook og frontend applikasjonen.

2. Importer eksisterende tokens i Figma. Legg til noen nye design tokens, sync de med GitHub, og generer nye variabler til frontendprosjektene. Utform et nytt komponent basert på dette.

3. Utvikle et nytt komponent i designsystem-prosjektet her. Hvilke verdier trenger du? Hva kan egne seg som tokens? Opprett disse med Figma-tokens og refaktorer komponentet til å bruke variabler generert fra disse.

4. Lag et nytt komponent i Figma og bruk Figma Tokens til å definere tokens for relevante verdier. Forsøk så å implementere dette i kode ved å generere variabler av de tokens som er definert.


## 🎯 **Troubleshooting**

> Prosjektet er testet og bekreftet fungerende på både Windows, WSL og Mac. Samtidig er det umulig å garantere at alt vil fungere på nettop **din** maskin. Her er noen tips og råd dersom du møter på feil under kjøring.

**Storybook kræsjer med feilmelding:** `Error: error:0308010C:digital envelope routines::unsupported`

De:

* Forsøk å kjøre med NodeJS 16 om mulig. Bruker du `nvm` til å kjøre node kan du installere og bytte til denne ved å kjøre kommandoen `nvm install 16.16.0`.
* Sett miljøvariabel `NODE_OPTIONS=--openssl-legacy-provider` ved kjøring av Storybook.

Dersom ingenting av dette hjelper finnes det mer assistanse her: https://stackoverflow.com/q/69692842

## 🛠 **Verktøykassa**

> Her har vi funnet frem et knippe verktøy, tekster og snacks som kan være av verdi dersom du skal jobbe med tokens, designsystemer, frontendutvikling og alt i mellom.

### **Video:**

* [How to create Design Tokens in Figma with Figma Tokens - Tutorial with Jan Six](https://www.youtube.com/watch?v=zkLfw6Jb6WM)

* [“Atomic Design” by Brad Frost—An Event Apart Austin 2015](https://www.youtube.com/watch?v=W-h1FtNYim4) - Gammel men fortsatt god.

* [Design Tokens using Style-Dictionary & Figma](https://www.youtube.com/watch?v=yDi5ADS2HKg)

### **Artikler**

* [Design Systems 101 - Nielsen Norman Group](https://www.nngroup.com/articles/design-systems-101/)

* [A Recipe For A Good Design System - Smashing Magazine](https://www.smashingmagazine.com/2022/02/recipe-good-design-system/)

* [Designing Systems - Brad Frost](https://atomicdesign.bradfrost.com/chapter-1/)

* [10 Storybook Best Practices](https://betterprogramming.pub/10-storybooks-best-practices-ad5fec0f145a)

### **Eksempler**:

I listen under finner du noen utvalgte eksempler på gode designsystemer av ulik art:

* [Jøkul Designsystem (Fremtind)](https://jokul.fremtind.no)

* [Designsystemet Aksel (NAV)](https://aksel.nav.no)

* [Material Design (Google)](https://m3.material.io)

* [Carbon Design System (IBM)](https://carbondesignsystem.com)

* [Human Interface Guidelines (Apple)](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/)

* [Atlassian Design System](https://atlassian.design)


### **Diverse**:

* [BradFrost.com - Blog](https://bradfrost.com/blog/) - Blogginnlegg om designsystemer og mye annet fra Brad Frost.

* [DesignSystems.tools](https://www.designsystem.tools) - Generell verktøykasse for designsystemer

* [The Ultimate Design Systems Resources List](https://designstrategy.guide/design-management/the-ultimate-design-systems-resources-list/) - Generell verktøykasse for designsystemer og mye mer.
