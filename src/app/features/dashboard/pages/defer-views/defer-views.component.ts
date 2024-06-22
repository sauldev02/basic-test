import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/components/heavy-loaders-slow/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
