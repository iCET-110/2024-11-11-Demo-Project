import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Patient } from '../../../model/Patient';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-patient-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-patient-page.component.html',
  styleUrl: './manage-patient-page.component.css'
})
export class ManagePatientPageComponent {


  public patientList:Patient[]=[];


  constructor(private http:HttpClient){
    this.loadPatientTable();
  }

  loadPatientTable(){
    this.http.get<Patient[]>("http://localhost:8080/patient/get-all").subscribe(res=>{
      this.patientList=res;
      console.log(res);
      
    })
  }
}
