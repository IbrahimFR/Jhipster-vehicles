import { ICustomer } from 'app/shared/model/customer.model';

export interface IVehicle {
  id?: number;
  vehicleId?: number;
  vIN?: string;
  regNum?: string;
  status?: boolean;
  customer?: ICustomer;
}

export class Vehicle implements IVehicle {
  constructor(
    public id?: number,
    public vehicleId?: number,
    public vIN?: string,
    public regNum?: string,
    public status?: boolean,
    public customer?: ICustomer
  ) {
    this.status = this.status || false;
  }
}
