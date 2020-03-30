import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lot, CreatedLot } from '@app/shared/models/lot.model';
import { environment } from '@env/environment';

import { ProfileModule } from '../profile.module';

@Injectable({ providedIn: ProfileModule })
export class ProfileService {
  private lotsUrl = `${environment.apiUrl}/api/lots`;

  createLot(lotData: Lot) {
    return this.http.post<CreatedLot>(this.lotsUrl, lotData);
  }

  constructor(private http: HttpClient) {}
}
