import { useState } from "react";
import { Settings } from "./Settings";
import { TextInput } from "./TextInput";

type SettingsType = {
  name: string;
  value: string;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  label: string;
  placeholder: string;
  description: string;
  error: string;
  variant: string;
  radius: number;
  size: number;
  withIcon: boolean;
  disabled: boolean;
  withAsterisk: boolean;
};

const initialValues = {
  name: "",
  value: "",
  onChange: () => {},
  label: "",
  placeholder: "",
  description: "",
  error: "",
  variant: "default",
  radius: 4,
  size: 10,
  withIcon: false,
  disabled: false,
  withAsterisk: false,
};

export const SettingsFormWrapper = () => {
  const [settings, setSettings] = useState<SettingsType>(initialValues);

  const handleChange = ({
    target,
  }: {
    target: HTMLInputElement | HTMLSelectElement;
  }) => {
    if (target.type === "checkbox")
      setSettings((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    else if (target.type === "range") {
      setSettings((prevState) => ({
        ...prevState,
        [target.name]: Number(target.value),
      }));
    } else
      setSettings((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
  };

  return (
    <div className="form-settings_wrapper">
      <div className="textInput-style">
        <TextInput {...settings} />
      </div>
      <div className="settings-block">
        <Settings settings={settings} handleChange={handleChange} />
      </div>
    </div>
  );
};
