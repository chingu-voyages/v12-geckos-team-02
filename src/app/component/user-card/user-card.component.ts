import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  @Input() profile: any;
  viewMode: boolean;
  smallDesc: string;
  constructor() {}
  ngOnInit() {
    if (this.profile.desc.length > 25) {
      this.viewMode = true;
      this.smallDesc = this.profile.desc.slice(0, 60);
    } else {
      this.viewMode = false;
    }
  }
  changeView() {
    this.viewMode = !this.viewMode;
  }
}
