import Greeting from "./components/Greeting";
import "./App.css";
import { Button, Heading } from "designsystem/lib/components";

function App() {
  return (
    <div className="container">
      <Heading level="h1">Play Together</Heading>
      <Greeting />
      <div className="button-container">
        <Button
          primary
          onClick={() => window.alert("Takk for at du trykket!")}
          label="Primærknapp"
        />
        <Button
          onClick={() => window.alert("Takk for at du trykket!")}
          label="Sekundærknapp"
        />
      </div>
    </div>
  );
}

export default App;
