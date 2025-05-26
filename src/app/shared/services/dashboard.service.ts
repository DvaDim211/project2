import {computed, Injectable, signal} from '@angular/core';
import {DummyTrafficData} from '../model/dummy-trafficdata';
import {TrafficData} from '../model/trafficdata.model';

@Injectable({providedIn: 'root'})
export class DashboardService {
  private _allTrafficData= signal<TrafficData[]>(DummyTrafficData) ;
  allTrafficData = this._allTrafficData.asReadonly()
  maxTraffic = computed(() => {
     return Math.max(...this.allTrafficData().map((data) => data.value))
  })
  currentStatus = 'online';
}
