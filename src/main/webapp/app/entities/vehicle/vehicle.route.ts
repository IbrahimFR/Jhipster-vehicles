import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Vehicle } from 'app/shared/model/vehicle.model';
import { VehicleService } from './vehicle.service';
import { VehicleComponent } from './vehicle.component';
import { VehicleDetailComponent } from './vehicle-detail.component';
import { VehicleUpdateComponent } from './vehicle-update.component';
import { VehicleDeletePopupComponent } from './vehicle-delete-dialog.component';
import { IVehicle } from 'app/shared/model/vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleResolve implements Resolve<IVehicle> {
  constructor(private service: VehicleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVehicle> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Vehicle>) => response.ok),
        map((vehicle: HttpResponse<Vehicle>) => vehicle.body)
      );
    }
    return of(new Vehicle());
  }
}

export const vehicleRoute: Routes = [
  {
    path: '',
    component: VehicleComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'Vehicles'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: VehicleDetailComponent,
    resolve: {
      vehicle: VehicleResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Vehicles'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: VehicleUpdateComponent,
    resolve: {
      vehicle: VehicleResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Vehicles'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: VehicleUpdateComponent,
    resolve: {
      vehicle: VehicleResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Vehicles'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const vehiclePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: VehicleDeletePopupComponent,
    resolve: {
      vehicle: VehicleResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Vehicles'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
