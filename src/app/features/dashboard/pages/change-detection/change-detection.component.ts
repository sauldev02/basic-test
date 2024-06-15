import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(()=>`Change Detection - ${this.frameworkAsSignal().name}`)

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkasProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkasProperty.name = 'Vue';

      //Sintaxis tradicional
      // this.frameworkAsSignal.update(value =>{
      //   value.name='Vue';
      //   value.releaseDate = 2018
      //   return {...value};
      // })      

      //Sintaxis simplificada
      this.frameworkAsSignal.update(value => ({...value, name: 'Vue'}))

      console.log('Hecho!');
    }, 3000);
  }


}
