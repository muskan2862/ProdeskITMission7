import { useState } from "react";

import { useFormContext } from "react-hook-form";

function Step2({
  nextStep,
  prevStep,
}) {

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const email = watch("email");
  const password = watch("password");
  const confirmPassword =
    watch("confirmPassword");

  const isStepValid =
    email &&
    password?.length >= 8 &&
    confirmPassword === password;

  return (
    <div>

      <h2>Account Details</h2>

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      {errors.email && (
        <p className="error">
          {errors.email.message}
        </p>
      )}

      {/* PASSWORD */}
      <div className="password-box">

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Password"
          {...register("password")}
        />

        <span
          className="toggle"
          onClick={() =>
            setShowPassword(!showPassword)
          }
        >
          👁️
        </span>

      </div>

      {errors.password && (
        <p className="error">
          {errors.password.message}
        </p>
      )}

      {/* CONFIRM PASSWORD */}
      <input
        type={
          showPassword
            ? "text"
            : "password"
        }
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />

      {errors.confirmPassword && (
        <p className="error">
          {errors.confirmPassword.message}
        </p>
      )}

      <div className="btn-group">

        <button
          type="button"
          onClick={prevStep}
        >
          Back
        </button>

        <button
          type="button"
          disabled={!isStepValid}
          onClick={nextStep}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Step2;