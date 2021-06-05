import { Component, OnInit } from '@angular/core';
import { Adult } from 'src/app/Model/adult';
import { AddcropService } from 'src/app/services/addcrop.service';
import { Router } from '@angular/router';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})
export class AdultComponent implements OnInit {



  form : any = {};
  adultfrontdata : Adult;


  constructor(private addcropservice : AddcropService, private route : Router) { }

  ngOnInit() {
  }


  onadd(dataf : any){

    console.log(dataf);

    this.adultfrontdata = new Adult(this.form.id,this.form.adultsoil, this.form.adultattack, this.form.adultlandscape, this.form.adultwatering, this.form.adulttemp, this.form.adultpestattacksymptoms, this.form.adultcontrolsystemchemical, this.form.adultcontrolsystemnonchemical);

    this.addcropservice.adultbackdata(this.adultfrontdata).subscribe(
      (datab : any) => {
        console.log(datab);
        alert("crop is added");
        this.route.navigate(['createmod']);
      }

    )





  }
}
