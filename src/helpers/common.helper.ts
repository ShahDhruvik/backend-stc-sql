import { z } from 'zod';

export const optionalTextInput = (schema: z.ZodString) =>
    z.union([z.string(), z.undefined()]).refine(val => !val || schema.safeParse(val).success);

export const optionalNumberInput = (schema: z.ZodNumber) =>
    z.union([z.number(), z.undefined()]).refine(val => !val || schema.safeParse(val).success);


