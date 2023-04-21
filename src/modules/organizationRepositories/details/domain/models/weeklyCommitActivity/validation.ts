import { array, number, object } from 'yup';

export const weeklyActivitySchema = object({
  all: array().of(number()),
  owner: array().of(number())
});
