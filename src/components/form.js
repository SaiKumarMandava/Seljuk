import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
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
      errors.email = 'Email is required';
    }

    if (!formData.username) {
      errors.username = 'Username is required';
    }

    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form or perform other actions here
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <div className="flex px-28 py-4 w-full max-w-2xl">
      {/* <form className=" bg-zinc-50 p-8 rounded-lg shadow-md w-96 sm:max-w-full md:max-w-full lg:max-w-screen-xl " onSubmit={handleSubmit}> */}
      <form className="bg-zinc-50 p-4 sm:p-8 w-[450px] rounded-lg shadow-md sm:max-w-[450px] md:max-w-[480px] lg:max-w-[500px]" onSubmit={handleSubmit}>
 

        <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
        <p>Register your account here </p>
        <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-500 font-bold">O</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          {validationErrors.email && (
            <p className="text-red-500">{validationErrors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
            className="w-full p-2 border rounded-lg"
            required
          />
          {validationErrors.username && (
            <p className="text-red-500">{validationErrors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg relative"
            placeholder='Password'
            required
          />
          {validationErrors.password && (
            <p className="text-red-500">{validationErrors.password}</p>
            
                    
          )}
          
        </div>
        
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-600 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
            placeholder='Confirm Password'
          />
          {validationErrors.confirmPassword && (
            <p className="text-red-500">{validationErrors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className="bg-red-600 text-white rounded-lg p-2 w-full">
        Iniciar sesión
        </button>
       <div className='flex justify-center p-3'>
       <a href='#' className='text-red-600 underline '>Olvidé mi contraseña</a>
       </div>
       <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-500 font-bold">o</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div>
<div>
    <p className=' text-center'>¿Aún no tienes una cuenta?</p>
</div>
<div className='flex justify-center p-3'>
       <a href='#' className='text-red-600 underline '>Crea una aquí</a>
       </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
