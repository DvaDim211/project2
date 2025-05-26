import {Component, inject} from '@angular/core';
import {DashboardService} from '../../shared/services/dashboard.service';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  private dashboardService = inject(DashboardService);
  allTrafficData = this.dashboardService.allTrafficData;
  maxTraffic = this.dashboardService.maxTraffic;
}
