import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // ngOnInit(): void {
  //   const layerContainer = this.elRef.nativeElement.querySelector('#layerContainer');
  //   const item = this.elRef.nativeElement.querySelector('.item');
  //   console.log(layerContainer);
  //   console.log(item);
  //   layerContainer.classList.replace
    
    // if (layerContainer) {
    //   this.renderer.setStyle(layerContainer, 'display', 'flex');
    // }
  // }
  showPhoto(){
    console.log('hello');
    console.log(this);
  }
  showLabel(){
    console.log('hello');
    
  }
}
