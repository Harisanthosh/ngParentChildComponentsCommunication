import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-donar',
  templateUrl: './request-donar.component.html',
  styleUrls: ['./request-donar.component.css']
})
export class RequestDonarComponent implements OnInit {

  availableGroup: string = "";
  willingDonars: string[];
  constructor() { }

  ngOnInit() {

  }
  onChange(val) {
    if (val !== undefined) {
      this.willingDonars = val;
    }
    else {
      this.willingDonars = ['Sorry no donars Available!']
    }

    console.log("Obtained donars are " + val);
  }

}
