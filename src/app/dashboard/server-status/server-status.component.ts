import {Component, inject} from '@angular/core';
import {DashboardService} from '../../shared/services/dashboard.service';


@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    class: 'status',
  }
})
export class ServerStatusComponent {
  private dashboardService = inject(DashboardService);
  currentStatus = this.dashboardService.currentStatusServer;
  onClickOff () {
    this.dashboardService.changeServerStatus('offline');
  }
  onClickUnk () {
    this.dashboardService.changeServerStatus('unknown');
  }
  onClickOn () {
    this.dashboardService.changeServerStatus('online');
  }

}
