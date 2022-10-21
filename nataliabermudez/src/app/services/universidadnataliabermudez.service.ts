import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private home: Home[] = [
    {
      Nombre: "Fundación Universitaria de Popayán",
      bio: "​La Fundación Universitaria de Popayán (FUP) es una universidad colombiana, privada, con sede principal en la ciudad de Popayán, y con presencia en otros 2 municipios del país (Santander de Quilichao y Timbío). Fue fundada el 14 de diciembre de 1982. Tan solo comenzó sus labores académicas con cuatro carreras: Ecología, Ingeniería de Minas, Administración Agropecuaria e Historia (esta última no se consolidaría). ",
      Ciudad: "Popayán",
      img:"assets/img/fundacion-logo.png",
      Pais:"Colombia",
      Departamento:"Cauca",
    },
    {
      Nombre: "UNICAUCA",
      bio: "La Universidad del Cauca es una universidad pública de Colombia, sujeta a inspección y vigilancia por medio de la Ley 1740 de 2014 y la ley 30 de 1992 del Ministerio de Educación de Colombia. Su campus principal se encuentra ubicado en la ciudad de Popayán, capital del departamento del Cauca. El 5 de abril de 2013 recibió la Acreditación Institucional de Alta Calidad por 6 años por parte del Consejo Nacional de Acreditación del Ministerio de Educación.​ ",
      Ciudad: "Popayán",
      img:"assets/img/unicauca-logo.png",
      Pais:"Colombia",
      Departamento:"Cauca",
    },
    {
      Nombre: "UNIVALLE",
      bio: "La Universidad del Valle, comúnmente conocida como Univalle, es una universidad pública colombiana ubicada en el Valle del Cauca. Es considerada la      principal institución de educación superior del suroccidente del país, sujeta a inspección y vigilancia por medio de la Ley 1740 de 2014 y la ley 30 de 1992 del Ministerio de Educación de Colombia.1",
      Ciudad: "Cali",
      img:"assets/img/univalle-logo.png",
      Pais:"Colombia",
      Departamento:"Valle del Cauca",
    }
];
  constructor() {
    console.log("aqui esta en uso el servicio de heroes");
  }
  getHome(): Home[] {
    return this.home;
  }

  getHomeData(){
    
  }
}

export interface Home {
  Nombre: string;
  bio: string;
  Ciudad: string;
  Departamento: string;
  img: string;
  Pais: string;

}