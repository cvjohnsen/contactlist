import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: 44,
      name: name,
      email: email,
      phone: phone,
      address: {
        street: street,
        city: city,
      },
    };
    console.log(newContact);
    //Updating State adding in new person
    props.setData((prevState) => [newContact, ...prevState]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        name="street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <br />
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br /> <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
