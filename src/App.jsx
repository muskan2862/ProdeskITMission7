import { useState } from "react";

import {
  useForm,
  FormProvider,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./schemas/formSchema";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);

  // React Hook Form
  const methods = useForm({
    resolver: zodResolver(formSchema),

    mode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    trigger,
  } = methods;

  // NEXT BUTTON
  const nextStep = async () => {
    let fields = [];

    if (step === 1) {
      fields = [
        "firstName",
        "lastName",
        "dob",
      ];
    }

    if (step === 2) {
      fields = [
        "email",
        "password",
        "confirmPassword",
      ];
    }

    const isValid = await trigger(fields);

    if (isValid) {
      setStep(step + 1);
    }
  };

  // BACK BUTTON
  const prevStep = () => {
    setStep(step - 1);
  };

  // SUBMIT
  const onSubmit = (data) => {
    console.log("Final Data:", data);

    alert("Registration Successful ✅");
  };

  return (
    <FormProvider {...methods}>
      <div className="container">

        {/* PROGRESS BAR */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${(step / 3) * 100}%`,
            }}
          ></div>
        </div>

        <p className="step-text">
          Step {step} of 3
        </p>

        <h1>Registration Wizard</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {step === 1 && (
            <Step1 nextStep={nextStep} />
          )}

          {step === 2 && (
            <Step2
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <Step3 prevStep={prevStep} />
          )}

        </form>
      </div>
    </FormProvider>
  );
}

export default App;