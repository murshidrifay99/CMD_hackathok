import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AddAppointmentsService {
 

  constructor (private http: HttpClient) { }

  url: string = "http://localhost:3000";
  
  getdata(){
    return this.http.get(this.url+"/appointments");
  }

  getPatients(){
    return this.http.get( this.url+"/patients");
  }

  getDoctors(){
    return this.http.get(this.url+"/doctors");
  }

  postAppointmentData(data: any){
    return this.http.post(this.url+"/appointments", data);
  }
  
  deleteAppointmentData(id){
    return this.http.delete(`${this.url+"/appointments/"}/${id}`);
  } 
  
  getAppointmentData(id){
    return this.http.get(`${this.url+"/appointments/"}/${id}`);
  }
  
  
  putAppointmentData(id, data){
    return this.http.put(`${this.url+"/appointments/"}/${id}`, data);
  }
}
