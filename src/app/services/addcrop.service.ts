import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Seeding } from '../Model/seeding';
import { Adult } from '../Model/adult';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class AddcropService {

  constructor(private http : HttpClient) { }

  private seedingurl ="http://localhost:8080/seeding/add";
  private adulturl = "http://localhost:8080/cropadult/add";
  private flowering = "http://localhost:8080/cropflowering/add";
  private harvest = "http://localhost:8080/cropharvest/add";
  private postharvest = "http://localhost:8080/posthavest/add";

  seedingbackdata(info : Seeding){
    console.log(info );
    return this.http.post<string>(this.seedingurl,info,httpOptions);
  }

  adultbackdata(info : Adult){
    console.log(info );
    return this.http.post<string>(this.adulturl,info,httpOptions);
  }





}
