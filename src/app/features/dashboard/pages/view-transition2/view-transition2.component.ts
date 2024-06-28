import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition2.component.html',
  styleUrl: './view-transition2.component.css'
})
export default class ViewTransition2Component {

}
