import { Component, OnInit } from '@angular/core';
import { Seeding } from 'src/app/Model/seeding';
import { AddcropService } from 'src/app/services/addcrop.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seeding',
  templateUrl: './seeding.component.html',
  styleUrls: ['./seeding.component.css']
})
export class SeedingComponent implements OnInit {

  form : any = {};
  seedingfrondata : Seeding;

  constructor(private addcropservice : AddcropService, private route : Router) { }

  ngOnInit() {
  }


  onadd(dataf : any){

    console.log(dataf);

    this.seedingfrondata = new Seeding(this.form.id,this.form.seedingsoil, this.form.seedingattack, this.form.seedinglandscape, this.form.seedingwatering, this.form.seedingtemp, this.form.seedingpestattacksymptoms, this.form.seedingcontrolsystemchemical, this.form.seedingcontrolsystemnonchemical);

    this.addcropservice.seedingbackdata(this.seedingfrondata).subscribe(
      (datab : any) => {
        console.log(datab);
        alert("crop is added");
        this.route.navigate(['createmod']);
      }

    )





  }
}
