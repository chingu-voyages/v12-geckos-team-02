import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { ToastrService } from "ngx-toastr";
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  profiles: any;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.userService.onFetchProfiles().subscribe(
      data => {
        this.profiles = data;
        console.log(this.profiles);
      },
      error => {
        this.toastr.error("Unable to fetch Profiles");
      }
    );
  }
}
