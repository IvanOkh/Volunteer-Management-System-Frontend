import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "cars-master-frontend";
  constructor(private authService: AuthService) {}

  onActivate(event){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    console.log("GOFKDOGKODFSOGDFKSO TOP");
  }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
