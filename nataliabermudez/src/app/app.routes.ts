import { RouterModule, Routes } from "@angular/router";
import { CondicionalComponent } from "./components/condicional/condicional.component";
import { FupComponent } from "./components/fup/fup.component";
import { HomeComponent } from "./components/home/home.component";
import { UnicaucaComponent } from "./components/unicauca/unicauca.component";
import { UnivalleComponent } from "./components/univalle/univalle.component";

const APP_ROUTES: Routes=[
    {path : 'home', component:HomeComponent},
    {path : 'condicional', component:CondicionalComponent},
    {path : 'fup', component:FupComponent},
    {path : 'univalle', component:UnivalleComponent},
    {path : 'unicauca', component:UnicaucaComponent},
    {path : '**', pathMatch:'full', redirectTo:'home'},
    ];
    
    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)