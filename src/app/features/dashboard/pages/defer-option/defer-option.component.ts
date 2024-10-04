import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/components/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-option.component.html',
  styleUrl: './defer-option.component.css'
})
export default class DeferOptionComponent {

}
