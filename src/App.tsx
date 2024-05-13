import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const items = ["New york", "London", "Sydney", "Tokyo"];
  const heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div className="App">
      {/* <ListGroup
        onSelectItem={handleSelectItem}
        items={items}
        heading={heading}
      /> */}
      {/* Children  */}
      {/* <Alert>Hello Alert</Alert> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisible(!alertVisible)}>Hello Alert</Alert>
      )}
      <Button
        children="make alert"
        onClick={() => setAlertVisible(!alertVisible)}
        color="primary"
      /> */}

      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
