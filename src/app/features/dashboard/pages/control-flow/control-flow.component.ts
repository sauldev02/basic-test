import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);

  public toggleContent(): void {
    this.showContent.update((value) => !value);
    this.grade.set('F');
  }

  ngOnInit(): void {}
}
