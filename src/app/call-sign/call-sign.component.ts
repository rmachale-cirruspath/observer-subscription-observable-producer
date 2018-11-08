import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-call-sign',
  templateUrl: './call-sign.component.html',
  styleUrls: ['./call-sign.component.scss']
})
export class CallSignComponent implements OnInit {

  callSign = new FormControl('');
  callSign2 = new FormControl('');
  callSign3 = new FormControl('');
  jsonFileTextbox = new FormControl('');
  jsonFileTextbox7 = new FormControl('');

  mouseSubscription;
  clickSubscription2;
  clickSubscription3;
  clickSubscription3B;
  clickSubscription3C;
  clickSubscription4;
  clickSubscription5;
  clickSubscription6;
  clickSubscription7;
  dataSubscription;

  constructor(
    private http: HttpClient
  ) {
  }

  dataUrl = 'assets/robert-data.json';

  getData() {
    return this.http.get(this.dataUrl);
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

    const buttonElement6 = document.getElementById("myButtonId6");
    const buttonObservable6 = fromEvent(buttonElement6, 'click'); // click = the producer
    this.clickSubscription6 = buttonObservable6.subscribe({
      next: this.myClickObserver6Next.bind(this),
      error: this.myClickObserver6Error.bind(this),
      complete: this.myClickObserver6Complete.bind(this)
    });

    const buttonElement7 = document.getElementById("myButtonId7");
    const buttonObservable7 = fromEvent(buttonElement7, 'click'); // click = the producer
    this.clickSubscription7 = buttonObservable7.subscribe(this.getObservable7.bind(this));

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

  myClickObserver6Next() {
    window.console.log("myClickObserver6Next");

    this.dataSubscription = this.getData().subscribe(
      this.myHttpObserverSuccess.bind(this),
      this.myHttpObserverError.bind(this),
      this.myHttpObserverComplete.bind(this),
    );
  }

  myClickObserver6Error() { }
  myClickObserver6Complete() { }

  myHttpObserverSuccess(data) {
    window.console.log("myHttpObserverSuccess", data);
    this.jsonFileTextbox.setValue(data.hello);
  }
  myHttpObserverError() { }
  myHttpObserverComplete() { }

  getObservable7() {
    window.console.log("getObservable7");
    let observable = this.getData();
    observable.subscribe({
      next: this.myHttpObserver7Success.bind(this),
      error: this.myHttpObserver7Error.bind(this),
      complete: this.myHttpObserver7Complete.bind(this)
    });
    observable.subscribe({
      next: this.myHttpObserver7BSuccess.bind(this),
      error: this.myHttpObserver7BError.bind(this),
      complete: this.myHttpObserver7BComplete.bind(this)
    });
  }

  myHttpObserver7Success(data) {
    window.console.log("myHttpObserverSuccess", data);
    this.jsonFileTextbox7.setValue(data.hello);
  }

  myHttpObserver7Error(data) {
    window.console.log("myHttpObserverError", data);
  }

  myHttpObserver7Complete() {
    window.console.log("myHttpObserverComplete");
  }

  myHttpObserver7BSuccess(data) {
    window.console.log("myHttpObserver7BSuccess", data);
  }

  myHttpObserver7BError(data) {
    window.console.log("myHttpObserver7BError", data);
  }

  myHttpObserver7BComplete() {
    window.console.log("myHttpObserver7BComplete");
  }

  //https://default.docker.host/robert-test/team-test/

}

// https://angular.io/tutorial/toh-pt6#!#observables
// https://chrisnoring.gitbooks.io/rxjs-5-ultimate/content/observable-wrapping.html
// https://angular.io/guide/rx-library
