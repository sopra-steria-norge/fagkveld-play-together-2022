/**
 * Denne filen er entrypoint for build-kommando.
 *
 * Komponenter som eksporteres herfra vil bli transpilert til JavaScript og inkludert
 * i dist-katalogen.
 */

import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Heading } from "./components/Heading/Heading";
import { Textfield } from "./components/Textfield/Textfield";

export { Button, Card, Heading, Textfield };
