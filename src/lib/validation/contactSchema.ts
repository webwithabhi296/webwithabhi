import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Full name is required." })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[A-Za-z\s'-]+$/, {
      message: "Name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required." })
    .email({ message: "Please enter a valid email address (e.g. name@example.com)." }),

  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .refine(
      (val) => {
        // Must match international phone format: optional '+' followed by numbers, spaces, hyphens, parentheses
        if (!/^\+?[0-9\s\-().]+$/.test(val)) return false;
        // Count total digit count
        const digitsOnly = val.replace(/\D/g, "");
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      {
        message:
          "Please enter a valid phone number (10 to 15 digits, optional country code e.g. +91 8421903846).",
      }
    ),

  service: z
    .string()
    .trim()
    .min(1, { message: "Please select a service or area of interest." }),

  projectScope: z.string().optional().default(""),

  message: z.string().optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;
