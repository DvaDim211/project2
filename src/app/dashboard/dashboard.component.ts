import {Component} from '@angular/core';
import {ServerStatusComponent} from './server-status/server-status.component';
import {DashboardItemComponent} from './dashboard-item/dashboard-item.component';
import {TrafficComponent} from './traffic/traffic.component';
import {TicketsComponent} from './tickets/tickets.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ServerStatusComponent,
    DashboardItemComponent,
    TrafficComponent,
    TicketsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
