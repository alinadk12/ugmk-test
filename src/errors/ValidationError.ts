import { ApplicationException } from './ApplicationException';

export class ValidationError extends ApplicationException {
  constructor(message: string = 'Validation Error') {
    super(message);
  }
}
