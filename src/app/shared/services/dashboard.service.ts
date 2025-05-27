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
  private _currentStatusServer = signal('online') ;
  currentStatusServer = this._currentStatusServer.asReadonly()
  changeServerStatus (data: string) {
    this._currentStatusServer.set(data)
  }
}
