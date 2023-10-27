import React, { useState } from "react";
import Eye from "./asset/Eye.png";
import o1 from "./asset/Frame 4.png";
import O1 from "./asset/Frame 5182.png";
function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.username) {
      errors.username = "Username is required";
    }

    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form or perform other actions here
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <div className="flex px-28 py-4 w-full max-w-2xl">
      <form
        className="bg-zinc-50 p-4  w-[450px] sm:p-8 rounded-lg shadow-md sm:max-w-[450px] md:max-w-[480px] lg:max-w-[500px]"
        onSubmit={handleSubmit}
        method="POST"
      >
        <h2 className=" text-4xl font-AbeeZee mb-4 ">Registration Form</h2>
        <p
          className=" font-notosans font-normal text-lg text-gray-400 "
          style={{}}
        >
          Register your account here
        </p>
        <div className="relative flex py-5 items-center">
          <img src={O1} />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-notosans">
            Email
          </label>
          <div className=" py-2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          {validationErrors.email && (
            <p className="text-red-500">{validationErrors.email}</p>
          )}
        </div>

        <div className=" mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 font-notosans"
          >
            Username
          </label>
          <div className=" py-2">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          {validationErrors.username && (
            <p className="text-red-500">{validationErrors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-notosans"
          >
            Password
          </label>
          <div className="relative py-2">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg pr-12"
              placeholder="Password"
              required
            />
            <img
              src={Eye}
              className="absolute right-4 top-4 cursor-pointer"
              alt="Toggle Password"
            />
          </div>
          {validationErrors.password && (
            <p className="text-red-500">{validationErrors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-gray-600 font-notosans"
          >
            Confirm Password
          </label>
          <div className="relative py-2">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Confirm Password"
            />
            <img
              src={Eye}
              className="absolute right-4 top-4 cursor-pointer"
              alt="Toggle Password"
            />
          </div>
          {validationErrors.confirmPassword && (
            <p className="text-red-500">{validationErrors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white rounded-lg p-2 w-full font-notosans"
        >
          Iniciar sesión
        </button>

        <div className="flex justify-center p-3">
          <a href="#" className="text-red-600 underline font-notosans">
            Olvidé mi contraseña
          </a>
        </div>

        <div className="relative flex py-5 items-center">
          <img src={o1} />
        </div>

        <div>
          <p className=" text-center font-notosans">
            ¿Aún no tienes una cuenta?
          </p>
        </div>

        <div className="flex justify-center p-3">
          <a href="#" className="text-red-600 underline font-notosans">
            Crea una aquí
          </a>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
