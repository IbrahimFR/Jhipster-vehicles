import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VehiclesSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [VehiclesSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [VehiclesSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehiclesSharedModule {
  static forRoot() {
    return {
      ngModule: VehiclesSharedModule
    };
  }
}
