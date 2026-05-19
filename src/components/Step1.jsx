import { useFormContext } from "react-hook-form";

function Step1({ nextStep }) {

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const dob = watch("dob");

  const isStepValid =
    firstName &&
    lastName &&
    dob;

  return (
    <div>

      <h2>Personal Info</h2>

      <input
        type="text"
        placeholder="First Name"
        {...register("firstName")}
      />

      {errors.firstName && (
        <p className="error">
          {errors.firstName.message}
        </p>
      )}

      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
      />

      {errors.lastName && (
        <p className="error">
          {errors.lastName.message}
        </p>
      )}

      <input
        type="date"
        {...register("dob")}
      />

      {errors.dob && (
        <p className="error">
          {errors.dob.message}
        </p>
      )}

      <button
        type="button"
        disabled={!isStepValid}
        onClick={nextStep}
      >
        Next
      </button>

    </div>
  );
}

export default Step1;