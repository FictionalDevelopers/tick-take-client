import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lot } from '@app/shared/models/lot.model';
import { environment } from '@env/environment';

import { ProfileModule } from '../profile.module';

@Injectable({ providedIn: ProfileModule })
export class ProfileService {
  private backUrl = `${environment.apiUrl}/api/lots`;

  createLot(lotData: Lot) {
    return this.http.post(this.backUrl, lotData);
  }

  constructor(private http: HttpClient) {}
}
