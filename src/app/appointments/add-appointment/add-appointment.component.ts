import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../models/Appointments';
import { AddAppointmentsService } from '../Services/add-appointments.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appointment: Appointment | any = new Appointment();
  
  patients:any;
  doctors: any ;
  data: any;
  addForm: any;

  
 
  constructor(private addAppointments: AddAppointmentsService){
     this.addForm = new FormGroup ({
      title: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      time: new FormControl("", Validators.required),
      patient: new FormControl("", Validators.required),
      doctor: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });

    
    
   }

  

  ngOnInit(): void {
      this. fetchPatientsData();
      this.fetchDoctorsData();
  }
   
  

  get add() {
    return this.addForm.controls
  }

  fetchPatientsData(){

    return this.addAppointments.getPatients().subscribe((resp: any) => {
      this.patients = resp;
      })
    }

  fetchDoctorsData(){
    return this.addAppointments.getDoctors().subscribe((resp:any)=>{
      this.doctors = resp;
      console.log(this.doctors);
      
    })
  } 

  savedata(){
    
    return this.addAppointments.postAppointmentData(this.addForm.value).subscribe((resp) => {
      console.log(resp);
      alert('Appointment added successfully...')
      window.location.reload();
    })
  }
  


  }

 
 





