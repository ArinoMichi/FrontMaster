import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("cajaid") cajaEmailRef !: ElementRef;
  @ViewChild("cajanombre") cajaPassRef !: ElementRef;

  
  constructor(
    private _serviceTienda: ServiceTienda,
    private _router: Router
  ){}


  login(): void{
    var email = this.cajaEmailRef.nativeElement.value;
    var pass = this.cajaPassRef.nativeElement.value;

    this._serviceTienda.login(email,pass).subscribe((result)=>{
      environment.token=result.response;
      alert('usuario logeado!');
      this._router.navigate(['/detallesuser']);

    })

  }
}
