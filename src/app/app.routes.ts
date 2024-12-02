import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { RezaComponent } from './pages/reza/reza.component';
import { AliComponent } from './pages/ali/ali.component';
import { KoroshComponent } from './pages/korosh/korosh.component';
import { SamiComponent } from './pages/sami/sami.component';
import { HassanComponent } from './pages/hassan/hassan.component';

export const routes: Routes = [
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:ListComponent},
    {path:'add',component:AddComponent},
    {path:'reza', component:RezaComponent},
    {path:'ali', component:AliComponent},
    {path:'korosh', component:KoroshComponent},
    {path:'sami', component:SamiComponent},
    {path:'hassan', component:HassanComponent}
];
