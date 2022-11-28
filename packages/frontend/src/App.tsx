import Button from "designsystem/lib/components/Button";
import Heading from "designsystem/lib/components/Heading";

import Greeting from "./components/Greeting";

import styles from "./App.module.css";
import { Text } from "designsystem/lib/components";
import React from "react";

function App() {
  const [showText, setShowText] = React.useState(false);
  return (
    <div className={styles.container}>
      <Heading as="h1" variant="red" size="xxl">
        Dette er en heading
      </Heading>
      <Text as="p" size="md">
        There's a lady who's sure All that glitters is gold And she's buying a
        stairway to heaven When she gets there she knows If the stores are all
        closed With a word she can get what she came for Ooh ooh ooh ooh ooh And
        she's buying a stairway to heaven There's a sign on the wall But she
        wants to be sure 'Cause you know, sometimes words have two meanings In a
        tree by the brook There's a songbird who sings Sometimes all of our
        thoughts are misgiven Ooh, it makes me wonder Ooh, it makes me wonder
      </Text>
      <Button
        label={showText ? "Hide text" : "Show text"}
        primary
        onClick={() => setShowText(!showText)}
      />
      {showText && (
        <p>
          There's a feeling I get When I look to the west And my spirit is
          crying for leaving In my thoughts I have seen Rings of smoke through
          the trees And the voices of those who stand looking Ooh, it makes me
          wonder Ooh, it really makes me wonder And it's whispered that soon If
          we all call the tune Then the piper will lead us to reason And a new
          day will dawn For those who stand long And the forests will echo with
          laughter Oh whoa-whoa-whoa, oh-oh If there's a bustle in your
          hedgerow, don't be alarmed now It's just a spring clean for the May
          Queen Yes, there are two paths you can go by, but in the long run And
          there's still time to change the road you're on And it makes me wonder
          Oh, whoa Your head is humming and it won't go In case you don't know
          The piper's calling you to join him Dear lady, can you hear the wind
          blow? And did you know Your stairway lies on the whispering wind? And
          as we wind on down the road Our shadows taller than our soul There
          walks a lady we all know Who shines white light and wants to show How
          everything still turns to gold And if you listen very hard The tune
          will come to you at last When all are one and one is all, yeah To be a
          rock and not to roll And she's buying a stairway to heaven
        </p>
      )}
    </div>
  );
}

export default App;
