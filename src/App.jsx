import React from "react";
import { useFormik } from "formik";
import "./App.css";
import { validationSchema } from "./validation";

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="w-[500px] mt-[20px] mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Ism
        </label>
        <input
          placeholder="Ismingizni kiriting"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={`mt-1 block w-full px-3 py-2 border ${
            formik.name && formik.errors.name
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {formik.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          placeholder="Email manzilingizni kiriting"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`mt-1 block w-full px-3 py-2 border ${
            formik.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {formik.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Parol
        </label>
        <input
          placeholder="Parolingizni kiriting"
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`mt-1 block w-full px-3 py-2 border ${
            formik.password && formik.errors.password
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {formik.password && formik.errors.password ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md shadow-sm focus:outline-none"
      >
        Yuborish
      </button>
    </form>
  );
};

export default App;
