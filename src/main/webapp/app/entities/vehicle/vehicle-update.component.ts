import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IVehicle, Vehicle } from 'app/shared/model/vehicle.model';
import { VehicleService } from './vehicle.service';
import { ICustomer } from 'app/shared/model/customer.model';
import { CustomerService } from 'app/entities/customer';

@Component({
  selector: 'jhi-vehicle-update',
  templateUrl: './vehicle-update.component.html'
})
export class VehicleUpdateComponent implements OnInit {
  isSaving: boolean;

  customers: ICustomer[];

  editForm = this.fb.group({
    id: [],
    vehicleId: [],
    vIN: [],
    regNum: [],
    status: [],
    customer: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected vehicleService: VehicleService,
    protected customerService: CustomerService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ vehicle }) => {
      this.updateForm(vehicle);
    });
    this.customerService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICustomer[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICustomer[]>) => response.body)
      )
      .subscribe((res: ICustomer[]) => (this.customers = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(vehicle: IVehicle) {
    this.editForm.patchValue({
      id: vehicle.id,
      vehicleId: vehicle.vehicleId,
      vIN: vehicle.vIN,
      regNum: vehicle.regNum,
      status: vehicle.status,
      customer: vehicle.customer
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const vehicle = this.createFromForm();
    if (vehicle.id !== undefined) {
      this.subscribeToSaveResponse(this.vehicleService.update(vehicle));
    } else {
      this.subscribeToSaveResponse(this.vehicleService.create(vehicle));
    }
  }

  private createFromForm(): IVehicle {
    return {
      ...new Vehicle(),
      id: this.editForm.get(['id']).value,
      vehicleId: this.editForm.get(['vehicleId']).value,
      vIN: this.editForm.get(['vIN']).value,
      regNum: this.editForm.get(['regNum']).value,
      status: this.editForm.get(['status']).value,
      customer: this.editForm.get(['customer']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVehicle>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackCustomerById(index: number, item: ICustomer) {
    return item.id;
  }
}
