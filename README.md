# 🧑‍🏫 Fagkveld | Play Together: Design + Frontend

**Velkommen til fagkveld for design + frontend!**

Vi har forberedt dette prosjektet for å gi et innblikk i hvordan design tokens kan brukes i praksis. Dette er ingen absolutt fasit, og det er mange veier til mål, men vi har satt opp dette prosjektet på en måte som gjør at du raskt kommer i gang med å bygge et designsystem og en frontend-applikasjon som kan dra nytte av design tokens.

## 👩‍💻 **Hva trenger jeg for å være med?**

Prosjektet er delt i tre ulike deler, som alle er knyttet sammen som et monorepo med [Yarn Workspaces](https://yarnpkg.com/features/workspaces).

**❗️For å kunne kjøre eksemplene og følge den tekniske delen av workshopen må du ha følgende verktøy tilgjengelig:**

* **Yarn**
* **En kodeeditor** (VSCode, WebStorm, SublimeText, Atom, etc.)
* **En terminal** (Windows/Mac/Linux)

## 🌈 **Design tokens med Figma Tokens**

Noe av det fine med design tokens er at de uttrykkes i ren tekst, som oftest i form av JSON-filer. Dette gjør at vi kan frigjøre alle fargeverdier fra styling-språk og plattform, og dermed også et langt mer portabelt og teknologiagnostisk resultat. Vi kan da også enkelt generere styling-verdier for flere ulike plattformer og CSs-dialekter fra det samme grunnlaget. For å gjøre dette finnes det ulike verktøy der ute, men vi har valgt å fokusere på [style-dictionary](https://amzn.github.io/style-dictionary/#/) som foreløpig nok er det mest etablerte verktøyet for dette.

Style-dictionary er et enkelt men kraftig verktøy for å generere variabler til web, iOS og Android. Det kan gjøres enten selvstendig via CLI, eller også som en del av et script. Du kan også utvide dette med egen skreddersydd logikk for håndtering av ulike typer variabler utover det som støttes av den medfølgende konfigurasjonen.

**Hvordan får vi dette til å fungere med Figma?**

Dessverre er det ikke ennå innebygget støtte for design tokens i Figma. Men frykt ikke, det finnes heldigvis plugins som hjelper oss på vei!

For å arbeide med design tokens i Figma kan du bruke pluginen [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978).

Denne pluginen vil la deg opprette, redigere og bruke design tokens rett i Figma prosjektet ditt. I tilleg har den mulighet for å skrive og lese tokens til et repo på GitHub, noe som gjør at man kan oppdatere `.json` filen med tokens rett fra Figma. Det er helt magisk! 🙏

### **Konfigurasjon av Figma Tokens med et GitGhub Repo**
Før du kan skrive/lese til et GitHub repo med Figma Tokens må du først opprette en konfigurasjon i pluginen.Heldigvis er det enkelt å gjøre gjennom grensesnittet.

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

## 🛠 **Verktøykassa**

Her har vi funnet frem et knippe verktøy, tekster og snacks som kan være av verdi dersom du skal jobbe med tokens, designsystemer, frontendutvikling og alt i mellom.

// *Liste kommer*

## 🎯 **Troubleshooting**

Prosjektet er testet og bekreftet fungerende på både Windows, WSL og Mac. Samtidig er det umulig å garantere at alt vil fungere på nettop din maskin. Her er noen tips og råd dersom du møter på feil under kjøring.

**Storybook kræsjer med feilmelding:** `Error: error:0308010C:digital envelope routines::unsupported`

De:

* Forsøk å kjøre med NodeJS 16 om mulig. Bruker du `nvm` til å kjøre node kan du installere og bytte til denne ved å kjøre kommandoen `nvm install 16.16.0`.
* Sett miljøvariabel `NODE_OPTIONS=--openssl-legacy-provider` ved kjøring av Storybook.

Dersom ingenting av dette hjelper finnes det mer assistanse her: https://stackoverflow.com/q/69692842