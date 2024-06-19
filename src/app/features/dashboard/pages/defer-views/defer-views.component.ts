import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/components/heavy-loaders-slow/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
