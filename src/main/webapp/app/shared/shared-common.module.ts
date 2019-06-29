import { NgModule } from '@angular/core';

import { VehiclesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [VehiclesSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [VehiclesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VehiclesSharedCommonModule {}
