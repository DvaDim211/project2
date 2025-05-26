import {Component, inject} from '@angular/core';
import {DashboardService} from '../../shared/services/dashboard.service';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  private dashboardService = inject(DashboardService);
  currentStatus = this.dashboardService.currentStatus;

}
