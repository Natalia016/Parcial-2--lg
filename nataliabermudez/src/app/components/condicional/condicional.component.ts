import { Component, OnInit } from '@angular/core';
import { Home, HomeService } from 'src/app/services/universidadnataliabermudez.service';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {
 home:Home[]=[];
  constructor(private _universidadnataliaservice:HomeService) { }

  ngOnInit(): void {
    this.home=this._universidadnataliaservice.getHome();
    console.log(this.home)
  }

}
