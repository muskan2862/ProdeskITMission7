import { useFormContext } from "react-hook-form";

function Step3({ prevStep }) {

  const { getValues } = useFormContext();

  const data = getValues();

  return (
    <div>

      <h2>Review & Submit</h2>

      <p>
        <strong>First Name:</strong>
        {data.firstName}
      </p>

      <p>
        <strong>Last Name:</strong>
        {data.lastName}
      </p>

      <p>
        <strong>DOB:</strong>
        {data.dob}
      </p>

      <p>
        <strong>Email:</strong>
        {data.email}
      </p>

      <div className="btn-group">

        <button
          type="button"
          onClick={prevStep}
        >
          Back
        </button>

        <button type="submit">
          Submit
        </button>

      </div>

    </div>
  );
}

export default Step3;