import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',

})
export class LayoutComponent {
  
  

  constructor(private router: Router) {
    
  } 
  

  onLogout() {
   
    console.log('User logged out');

    
    this.router.navigate(['/login']);  
  }

}
