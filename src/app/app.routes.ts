import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashBordPageComponent } from './page/dash-bord-page/dash-bord-page.component';
import { AddPatientPageComponent } from './page/add-patient-page/add-patient-page.component';
import { ManagePatientPageComponent } from './page/manage-patient-page/manage-patient-page.component';
import { AddAppointmentPageComponent } from './page/add-appointment-page/add-appointment-page.component';
import { ManageAppointmentPageComponent } from './page/manage-appointment-page/manage-appointment-page.component';
import { DashCompComponent } from './page/dash-comp/dash-comp.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"dash-bord",
        component:DashBordPageComponent,
        children:[
            {
                path:"",
                component:DashCompComponent
            },
            {
                path:"add-patient",
                component:AddPatientPageComponent
            },
            {
                path:"manage-patient",
                component:ManagePatientPageComponent
            },
            {
                path:"add-appointemnt",
                component:AddAppointmentPageComponent
            },
            {
                path:"manage-appointemt",
                component:ManageAppointmentPageComponent
            }
        ]
    }
];
