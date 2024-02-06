import { z } from 'zod';
import { isValidObjectId } from 'mongoose';

export const optionalTextInput = (schema: z.ZodString) =>
  z.union([z.string(), z.undefined()]).refine(val => !val || schema.safeParse(val).success);

export const optionalNumberInput = (schema: z.ZodNumber) =>
  z.union([z.number(), z.undefined()]).refine(val => !val || schema.safeParse(val).success);

export const ignoreEmptyObjectId = (val: string) => {
  if (isValidObjectId(val)) return val;
  else return undefined;
};
