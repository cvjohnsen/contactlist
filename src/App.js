import "./App.css";
import users from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [data, setData] = useState(users);

  return (
    <div className="App">
      <Header />

      <Form setData={setData} />

      <ContactList users={data} />

      <Footer />
    </div>
  );
}

export default App;
