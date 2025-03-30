import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private readonly service: AuthService, public router: Router) {


  }


  CerrarSesion(){
    this.service.clearAll();
    this.router.navigateByUrl('/');
  }
}
