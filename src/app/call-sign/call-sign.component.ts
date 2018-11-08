import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-call-sign',
  templateUrl: './call-sign.component.html',
  styleUrls: ['./call-sign.component.scss']
})
export class CallSignComponent implements OnInit {

  callSign = new FormControl('');
  callSign2 = new FormControl('');
  callSign3 = new FormControl('');
  
  mouseSubscription;
  clickSubscription2;
  clickSubscription3;
  clickSubscription3B;
  clickSubscription3C;
  clickSubscription4;
  clickSubscription5;
    
  constructor(

  ) { 
  }

  ngOnInit() {

    const buttonElement = document.getElementById("myButtonId");
    const buttonObservable = fromEvent(buttonElement, 'mousemove'); // mousemove = the producer
    this.mouseSubscription = buttonObservable.subscribe(this.myMouseObserver);

    const buttonElement2 = document.getElementById("myButtonId2");
    const buttonObservable2 = fromEvent(buttonElement2, 'click'); // click = the producer
    this.clickSubscription2 = buttonObservable2.subscribe(this.myClickObserver2.bind(this));

    const buttonObservable3 = this.getObservable3();
    this.clickSubscription3 = buttonObservable3.subscribe({
      next: this.myClickObserver3Next.bind(this)
    });

    this.clickSubscription3B = buttonObservable3.subscribe(this.getObserver3B());

    this.clickSubscription3C = buttonObservable3.subscribe({
      next: this.myClickObserver3CNext.bind(this)
    });

    const buttonElement4 = document.getElementById("myButtonId4");
    const buttonObservable4 = fromEvent(buttonElement4, 'click'); // click = the producer
    this.clickSubscription4 = buttonObservable4.subscribe({
      next: this.myClickObserver4Next.bind(this),
      error: this.myClickObserver4Error.bind(this)
    });

    const buttonElement5 = document.getElementById("myButtonId5");
    const buttonObservable5 = fromEvent(buttonElement5, 'click'); // click = the producer
    this.clickSubscription5 = buttonObservable5.subscribe({
      next: this.myClickObserver5Next.bind(this),
      error: this.myClickObserver5Error.bind(this),
      complete: this.myClickObserver5Complete.bind(this)
    });

  }

  callSignChange(data) {
    window.console.log("callSignChange", data);
  }

  setValue() {
    this.callSign.setValue("KE6BLR-1");
  }

  myMouseObserver(event: MouseEvent) {
    console.log(`Coords: ${event.clientX} X ${event.clientY}`);
  }

  myClickObserver2(event: MouseEvent) {
    this.callSign.setValue("KE6BLR-2");
  }

  getObservable3() {
    const buttonElement3 = document.getElementById("myButtonId3");
    return fromEvent(buttonElement3, 'click'); // click = producer
  }

  myClickObserver3Next(event: MouseEvent) {
    this.callSign.setValue("KE6BLR-3");
  }

  myClickObserver3BNext(event: MouseEvent) {
    this.callSign2.setValue("KE6BLR-3B");
  }

  myClickObserver3CNext(event: MouseEvent) {
    this.callSign3.setValue("KE6BLR-3C");
  }

  myClickObserver4Next(event: MouseEvent) {
    this.callSign.setValue("KE6BLR-4");
  }

  myClickObserver4Error(event: MouseEvent) {
    this.callSign.setValue("ERROR");
  }

  myClickObserver5Next(event: MouseEvent) {
    this.callSign.setValue("KE6BLR-5");
  }

  myClickObserver5Error(event: MouseEvent) {
    this.callSign.setValue("ERROR");
  }

  myClickObserver5Complete(event: MouseEvent) {
    this.callSign.setValue("COMPLETE");
  }

  getObserver3B() {
      return {
        next: this.myClickObserver3BNext.bind(this)
      }
  }
}
