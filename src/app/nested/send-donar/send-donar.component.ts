import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-send-donar',
  templateUrl: './send-donar.component.html',
  styleUrls: ['./send-donar.component.css']
})
export class SendDonarComponent implements OnInit {
  @Input() requiredGroup: string;
  @Output() availableDonors: EventEmitter<String[]> = new EventEmitter<String[]>();
  donarList: Map<string, string[]>;
  constructor() {
    this.donarList = new Map<string, string[]>();
    this.donarList.set('A+', ['corazon', 'law', 'hitman']);
    this.donarList.set('B+', ['nami', 'usopp', 'luffy', 'lucci']);

  }

  ngOnInit() {
    console.log(this.requiredGroup);
  }

  submitClick() {
    let donars = this.donarList.get(this.requiredGroup);
    this.availableDonors.emit(donars);
    console.log(this.requiredGroup);
  }

//http://bit.ly/ang4_02_vatsan
}
