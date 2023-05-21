import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GptDto } from './dto/gptDto';
import { AppHttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saudi-chat-gpt';
  response!:any
  Math = Math
  regForm = new FormGroup({
    companySize: new FormControl("" , Validators.required),
    companyName: new FormControl("" ,Validators.required),
    companySector: new FormControl('', Validators.required),
    subject: new FormControl('' ,Validators.required),
    businessType: new FormControl('' ,Validators.required),
    isStock: new FormControl('' ,Validators.required),
    boardMembers: new FormControl('' ,Validators.required),
    companyPart: new FormControl('' ,Validators.required),
    legalRequirements: new FormControl('' , Validators.required),
    policy: new FormControl('' , Validators.required),
  });

  constructor(public http : AppHttpService){

  }

  submit(){
    console.log(this.regForm)
    this.http.getRegulation(this.regForm.value).subscribe(result => {
      console.log(result)
      this.response = result
      this.response.result = this.response.result.slice(0 , 3)
    })
  }
}
