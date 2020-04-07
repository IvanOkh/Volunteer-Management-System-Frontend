import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { passwordService } from "../../services/password.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"],
  providers: [passwordService]
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild("form", { static: false }) form: NgForm;

  submitted: Boolean;
  email: string;

  constructor(private passwordService: passwordService) {}

  ngOnInit() {}

  onSubmit(resetForm: NgForm) {
    this.email = resetForm.value.email;
    if (!(this.email === "" || this.email === null)) {
      this.passwordService.sendPostResquest(this.email);
      this.submitted = true;
      resetForm.reset();
    }
  }
}
