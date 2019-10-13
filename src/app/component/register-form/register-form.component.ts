import { Profile } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  countries: any;

  constructor( private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCountries();
  }




  getCountries() {
    this.userService.getAllCountry().subscribe(data => {
      this.countries = data;
    });
  }


  onSubmit(profile: Profile){
    if (this.imageExists(profile['value'].imageURL)){
      this.userService.onCreateProfile(profile['value']).subscribe(data => {
        this.toastr.success('Profile successfully created!');
        this.router.navigate(['/dashboard']);
      })
    } else {
      this.toastr.error('ImageURL not Valid!');
    }

  }

  imageExists(url){
    var image = new Image();
    image.src = url;
    if (!image.complete) {
        return false;
    }
    else if (image.height === 0) {
        return false;
    }
    return true;
  }

}
