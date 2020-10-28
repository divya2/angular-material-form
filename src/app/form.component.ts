import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {
  hide = true;
  formsControl = new FormControl("", [Validators.required]);
}
