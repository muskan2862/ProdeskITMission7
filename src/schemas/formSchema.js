import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required"),

    lastName: z
      .string()
      .min(1, "Last name is required"),

    dob: z
      .string()
      .min(1, "Date of birth is required"),

    email: z
      .string()
      .email("Invalid email"),

    password: z
      .string()
      .min(8, "Password must be 8+ characters"),

    confirmPassword: z.string(),
  })

  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );