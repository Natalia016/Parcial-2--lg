import { Component, OnInit } from '@angular/core';
import { Home, HomeService } from 'src/app/services/universidadnataliabermudez.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home:Home[]=[];

  constructor(private _homeservice:HomeService) { }

  ngOnInit(): void {
   this.home=this._homeservice.getHome();
   console.log(this.home)
  }

}
