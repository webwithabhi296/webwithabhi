import { z } from "zod";

export const PURPOSE_OPTIONS = [
  "Full-Time Opportunity",
  "Freelance Project",
  "Website Development",
  "WordPress Development",
  "Next.js Development",
  "Landing Page Development",
  "Website Optimization",
  "SEO & Performance",
  "Website Maintenance",
  "Shopify Development",
  "Other",
] as const;

export type PurposeOption = (typeof PURPOSE_OPTIONS)[number];

export const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)", country: "IN" },
  { code: "+1", label: "USA / Canada (+1)", country: "US" },
  { code: "+44", label: "UK (+44)", country: "GB" },
  { code: "+971", label: "UAE (+971)", country: "AE" },
  { code: "+61", label: "Australia (+61)", country: "AU" },
  { code: "+65", label: "Singapore (+65)", country: "SG" },
  { code: "+49", label: "Germany (+49)", country: "DE" },
  { code: "+33", label: "France (+33)", country: "FR" },
  { code: "+81", label: "Japan (+81)", country: "JP" },
  { code: "+41", label: "Switzerland (+41)", country: "CH" },
  { code: "+31", label: "Netherlands (+31)", country: "NL" },
  { code: "+64", label: "New Zealand (+64)", country: "NZ" },
  { code: "+966", label: "Saudi Arabia (+966)", country: "SA" },
  { code: "+974", label: "Qatar (+974)", country: "QA" },
  { code: "+353", label: "Ireland (+353)", country: "IE" },
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name can only contain letters and spaces (no numbers or special characters).",
    }),

  countryCode: z
    .string()
    .trim()
    .min(1, { message: "Country code is required." })
    .default("+91"),

  mobile: z
    .string()
    .trim()
    .min(1, { message: "Mobile number is required." })
    .regex(/^\d+$/, { message: "Mobile number must only contain numbers." })
    .min(10, { message: "Mobile number must be at least 10 digits." })
    .max(15, { message: "Mobile number cannot exceed 15 digits." }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),

  purpose: z
    .string()
    .trim()
    .min(1, { message: "Please select how I can help you." }),

  projectDetails: z.string().optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;

