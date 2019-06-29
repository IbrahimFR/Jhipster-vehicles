import { IVehicle } from 'app/shared/model/vehicle.model';

export interface ICustomer {
  id?: number;
  customerId?: number;
  name?: string;
  address?: string;
  vehicles?: IVehicle[];
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public customerId?: number,
    public name?: string,
    public address?: string,
    public vehicles?: IVehicle[]
  ) {}
}
