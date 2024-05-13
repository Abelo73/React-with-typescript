import { useState } from "react";

import { produce } from "immer";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import ExpanseList from "./components/components/ExpanseList";

function App() {
  const items = ["New york", "London", "Sydney", "Tokyo"];
  const heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  const [customer, setCustomer] = useState({
    name: "Abel",
    address: {
      city: "Addis Abeba",
      zipCode: 1000,
    },
  });

  const handleCustomer = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 2000 },
    });
  };

  const [tags, setTags] = useState(["happy", "cheerful", "wonderful"]);

  const handleTags = () => {
    setTags(["...tags", "exciting"]);
  };

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2️", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const handleBugs = () => {
    // setBugs(bugs.map(bug=> bug.id ===  ? {...bug, fixed: true}: bug))

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Abel",
    },
  });

  const handleGameClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Abel 2" } });
  };

  // Expenses Exercise

  const expenses = [
    { id: 1, description: "aaaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbbb", amount: 20, category: "Food" },
    { id: 3, description: "cccc", amount: 30, category: "Transport" },
    { id: 4, description: "dddd", amount: 40, category: "Housing" },
  ];

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

      {/* <Like onClick={() => console.log("clicked")} /> */}
      {/* {drink.title} {drink.price}  */}

      {/* {customer.address.zipCode} */}
      {/* {tags} */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "not fixed"}
        </p>
      ))}
      <button onClick={handleBugs}>Click Me</button> */}

      {/* Sharing Props */}

      {/* <Navbar cartItemsCounter={cartItems.length} />
      <Cart onClear={() => setCartItems([])} cartItems={cartItems} /> */}

      {/* Building Expandable Components */}

      {/* <Expandable>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        fugit quis unde hic atque ullam veniam odit in consectetur officia eius
        eligendi, qui, dolorem maiores quos dicta delectus architecto cupiditate
        magni. Aut doloribus accusamus numquam ducimus earum et doloremque
        excepturi porro iure perferendis ut consectetur, beatae tempore
        inventore dolorem, dolores voluptates magni perspiciatis at debitis
        blanditiis. Omnis tempore repellendus minus dolorum odit quae sequi
        dolore excepturi, iure obcaecati itaque temporibus dignissimos ipsum
        neque sint officiis consectetur exercitationem accusamus possimus quam
        assumenda cum consequatur optio. Tempora obcaecati officia
        necessitatibus, nesciunt, molestiae quo deleniti quibusdam repellat
        impedit voluptas rerum dignissimos ipsam et.
      </Expandable> */}

      {/* Working with Forms */}

      {/* <Form /> */}

      <ExpanseList expenses={expenses} onDelete={() => console.log("delete")} />
    </div>
  );
}

export default App;
