import React from "react";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import ToggleButton from "../ToggleButton/ToggleButton";
import useFormHandler from "../../hooks/useFormHandler";
import useToggle from "../../hooks/useToggle";

const inputFields = [
  { type: "email", name: "email", placeholder: "Email" },
  { type: "password", name: "password", placeholder: "Password" },
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "address", placeholder: "Address" },
  { name: "city", placeholder: "City" },
  { name: "state", placeholder: "State/Providence" },
  { name: "zip", placeholder: "Zip/Postal Code" },
];

const selectOptions = ["Canada", "United States"];

const addressTypes = ["Residential", "Business"];

// utilize the custom useFormHandler and useToggle hooks within
// a function. in addition, include a handleSubmit function that
// handles the form when it has been submitted.
const RegistrationForm = () => {
  const { values, handleChange } = useFormHandler({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    addressType: "",
  });

  const [toggleState, toggleSwitch] = useToggle(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formProps = { ...values, sameAsBillingAddr: toggleState };
    alert(JSON.stringify(formProps, null, 4));
  };

  return (
    <form style={{ width: 500, margin: "0 auto" }} onSubmit={handleSubmit}>
      <ToggleButton
        label="Same as billing address"
        toggleState={toggleState}
        toggleSwitch={toggleSwitch}
      />
      {inputFields.map(({ name, type, placeholder }) => (
        <Input
          key={name}
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={values[name]}
        />
      ))}
      {/* <Select
        name="country"
        placeholder="Select a country..."
        handleChange={handleChange}
        value={values.country}
        selectOptions={selectOptions}
        style={{ width: "100%" }}
      /> */}
      {addressTypes.map((type) => (
        <Radio
          key={type}
          name="addressType"
          value={type}
          handleChange={handleChange}
          checked={type === values.addressType}
        />
      ))}
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
