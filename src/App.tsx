import { FormEvent } from "react";
import "./App.css";
import { SettingsFormWrapper } from "./components/SettingsFormWrapper";
import { Signin } from "./components/Signin";
import { DataSinginType } from "./types";
import { Signup } from "./components/Signup";

function App() {
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    data: DataSinginType
  ) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      {/* <Signin handleSubmit={handleSubmit} /> */}
      {/* <Signup handleSubmit={handleSubmit} /> */}
      <SettingsFormWrapper />
    </>
  );
}

export default App;
