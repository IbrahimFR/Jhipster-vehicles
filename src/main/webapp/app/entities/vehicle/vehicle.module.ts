import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VehiclesSharedModule } from 'app/shared';
import {
  VehicleComponent,
  VehicleDetailComponent,
  VehicleUpdateComponent,
  VehicleDeletePopupComponent,
  VehicleDeleteDialogComponent,
  vehicleRoute,
  vehiclePopupRoute
} from './';

const ENTITY_STATES = [...vehicleRoute, ...vehiclePopupRoute];

@NgModule({
  imports: [VehiclesSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    VehicleComponent,
    VehicleDetailComponent,
    VehicleUpdateComponent,
    VehicleDeleteDialogComponent,
    VehicleDeletePopupComponent
  ],
  entryComponents: [VehicleComponent, VehicleUpdateComponent, VehicleDeleteDialogComponent, VehicleDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehiclesVehicleModule {}
