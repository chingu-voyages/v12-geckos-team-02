import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  @Input() profile: any;
  // = {
  //   fullName: "Abdul Busari",
  //   imageUrl: "/assets/woman.jpg",
  //   desc: "i love to program using css js and html",
  //   email: "minitext@gmail.com",
  //   stack: "fullstack developer",
  //   country: "Nigeria",
  //   title: "full",
  //   githubProfileUrl: "https://github.com/Busry"
  // };

  constructor() {}

  ngOnInit() {}
}
