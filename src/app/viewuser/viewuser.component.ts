import { Component, OnInit,Input } from '@angular/core';
import { Userview } from '../auth/userview';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
 
  @Input() userviews: Userview[]
  
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
   
    this.authService.getAllUsers().subscribe(data => {
      this.userviews = data;
    });

  }

  delete(userview : Userview):void {
    this.authService.deleteUser(userview.id).subscribe(data => {
      this.userviews = data;
    });
 
 window.location.reload();
 
  }






}