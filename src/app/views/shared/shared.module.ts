import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    NgSelectModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    }),
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule,
    PaginationModule,
    NgSelectModule,
    AgmCoreModule,
    AgmJsMarkerClustererModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
