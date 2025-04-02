import { useState } from "react";
import { TextInput } from "./TextInput";
import { DataSignUpType, FormPropsType } from "../types";

const initialValues = {
  name: "",
  nick: "",
  email: "",
  sex: "",
  password: "",
  confirmPassword: "",
};

export const Signup = (props: FormPropsType) => {
  const [data, setData] = useState<DataSignUpType>(initialValues);
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  return (
    <div className="formWrapper">
      <form className="form" onSubmit={(e) => props.handleSubmit(e, data)}>
        <h3>Регистрация</h3>
        <TextInput
          name="name"
          label="Имя"
          placeholder="Введите ваше имя"
          onChange={handleChange}
          value={data.name}
        />
        <TextInput
          name="nick"
          label="Ник"
          placeholder="Введите ваш Ник"
          onChange={handleChange}
          value={data.nick}
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          placeholder="Введите вашу электронную почту"
          onChange={handleChange}
          value={data.email}
        />
        <div className="radio-wrapper">
          <p> Пол:</p>
          <TextInput
            type="radio"
            name="sex"
            label="Мужчина"
            onChange={handleChange}
            value="male"
            checked={data.sex === "male"}
          />
          <TextInput
            type="radio"
            name="sex"
            label="Женщина"
            onChange={handleChange}
            value="female"
            checked={data.sex === "female"}
          />
        </div>
        <TextInput
          name="password"
          type="password"
          label="Пароль"
          onChange={handleChange}
          value={data.password}
        />

        <TextInput
          name="confirmPassword"
          type="password"
          label="Повторите пароль"
          onChange={handleChange}
          value={data.confirmPassword}
        />
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
};
