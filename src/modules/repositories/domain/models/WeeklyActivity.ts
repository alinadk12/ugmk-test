import { array, number, object } from 'yup';
import { ValidationError } from 'src/errors/ValidationError';

export class WeeklyActivity {
  public all: number[];
  public owner: number[];

  constructor(data: WeeklyActivity) {
    const validatedData = weeklyActivitySchema.validateSync(data, {strict: true});

    if (validatedData) {
      this.all = [...data.all];
      this.owner = [...data.owner];
    } else {
      throw new ValidationError();
    }
  }
}

const weeklyActivitySchema = object({
  all: array().of(number()),
  owner: array().of(number())
});
