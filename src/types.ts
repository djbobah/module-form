import { FormEvent } from "react";

export interface Settings {
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  variant?: string;
  disabled?: boolean;
  radius?: number;
  withIcon?: boolean;
  size?: number;
  withAsterisk?: boolean;
  checked?: boolean;
  value: string;
}

export type SettingsComponentType = {
  settings: Settings;
  handleChange: ({
    target,
  }: {
    target: HTMLInputElement | HTMLSelectElement;
  }) => void;
};

export type DataSinginType = {
  email: string;
  password: string;
};

export type DataSignUpType = {
  name: string;
  nick: string;
  email: string;
  sex: string;
  password: string;
  confirmPassword: string;
};

export type FormPropsType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>, data: DataSinginType) => void;
};
