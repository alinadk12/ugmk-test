import { InferType } from 'yup';
import { permissionsSchema, ownerSchema, licenceSchema, repositorySchema } from './validation';


interface IOwner extends InferType<typeof ownerSchema> {}

interface IPermissions extends InferType<typeof permissionsSchema> {}

interface ILicense extends InferType<typeof licenceSchema> {}

export interface IRepository extends InferType<typeof repositorySchema> {}
