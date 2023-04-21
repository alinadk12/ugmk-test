import { IWeeklyActivity } from './IWeeklyActivity';
import { weeklyActivitySchema } from './validation';

export class WeeklyActivityModel implements IWeeklyActivity {
  public all: IWeeklyActivity['all'];
  public owner: IWeeklyActivity['owner']

  constructor(data: IWeeklyActivity) {
    const validatedData = weeklyActivitySchema.validateSync(data, {strict: true});

    if (validatedData) {
      this.all = [...data.all];
      this.owner = [...data.owner];
    } else {
      throw new Error('Validation Error');
    }
  }
}
