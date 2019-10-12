import { Component, OnInit, Input } from "@angular/core";
import { Profile } from 'src/app/model/user.model';

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  @Input() profiles: Profile[];
  constructor() {}
  ngOnInit() {
  }

}
