import { useState } from "react";

export default function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
}
