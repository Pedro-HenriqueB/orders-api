import z from "zod";
import dotenv from "dotenv/config";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  API_URL: z.string().default('https://127.0.0.1:3000'),
});

const env = envSchema.parse(dotenv);

export default env;