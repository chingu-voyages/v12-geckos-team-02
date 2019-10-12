import { Profile } from 'src/app/model/user.model';
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  profiles: any;
  stackTerm: string;
  filteredProfiles: any;
  filteredProfiles1: any;
  filteredProfiles2: any;

  // set frontendTerm(stack) : string {
  //   this.stackTerm = stack;
  //   this.filteredProfiles = this.getFrontend(stack)
  // }





  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.spinner.show();
    this.userService.onFetchProfiles().subscribe(
      data => {
        setTimeout(() => {
          this.profiles = data;
          this.spinner.hide();
        }, 1000);
      },
      error => {
        this.toastr.error("Unable to fetch Profiles");
        this.spinner.hide();
      });
      }

      // frontend(){
      //   this.filteredProfiles = this.profiles.filter(profile => {
      //     return profile.stack === 'frontend';
      //   })
      //   this.profiles = this.filteredProfiles;
      // }

      // backend(){
      //   this.filteredProfiles1 = () => this.profiles.filter(profile => {
      //     return profile.stack === 'backend';
      //   })
      //   this.profiles = this.filteredProfiles1;
      // }

      // fullstack(){
      //   this.filteredProfiles2 = this.profiles.filter(profile => {
      //     return profile.stack === 'fullstack';
      //   })
      //   this.profiles = this.filteredProfiles2;
      // }

      // all(){
      //   this.filteredProfiles = this.profiles;
      //}
}
