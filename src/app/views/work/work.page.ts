import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {
  name: string;
  radioClock: string;
  results;
  results2;
  // ng if
  question1 = true;
  question2: boolean ;
  question3: boolean;
  question4: boolean;
  question5: boolean;
  question6: boolean;
  couter = 0;
  percent = 0;
  // Ng modules
  Question1;
  Question2;
  Question3;
  Question4;
  Question5;

  // Timer
  // Timer
  timeInSeconds;
  time;
  runTimer;
  hasStarted;
  hasFinished;
  remainingTime;
  displayTime;

  constructor(private route: ActivatedRoute, private route1: Router) { }
  Exit() {
    this.route1.navigate(['home']);
}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params.name;
      this.radioClock = params.radioClock;

      console.log(this.name);
      console.log(this.radioClock);
    });
     // start timer
     this.initTimer();
     this. startTimer();
  }
  Submit1() {
    this.question1 = false;
    this.question2 = true;
  }

  Submit2() {
    this.question2 = false;
    this.question3 = true;

  }
  Submit3() {
    this.question3 = false;
    this.question4 = true;

  }
  Submit4() {
    this.question4 = false;
    this.question5 = true;

  }
  Submit5() {
    this.question5 = false;
    this.question6 = true;
    // tslint:disable-next-line:triple-equals
    if (this.Question1 == '15 days') {
      this.couter += 1;
      this.percent += 20;
    }
    // tslint:disable-next-line:triple-equals
    if (this.Question2 == 'R400') {
      this.couter += 1;
      this.percent += 20;
    }
    // tslint:disable-next-line:triple-equals
    if (this.Question3 == '4 days') {
      this.couter += 1;
      this.percent += 20;
    }
    // tslint:disable-next-line:triple-equals
    if (this.Question4 == '25 days') {
      this.couter += 1;
      this.percent += 20;
    }
    // tslint:disable-next-line:triple-equals
    if (this.Question5 == 40) {
      this.couter += 1;
      this.percent += 20;
    }


    this.Result();
    this.Percent();
  }
  Result() {
    this.results = this.couter;
    console.log(this.results);

  }
  Percent() {
    this.results2 = this.percent;
    console.log(this.results2);
    }
    // start timer
  initTimer() {
    // Pomodoro is usually for 25 minutes
   if (!this.timeInSeconds) {
     this.timeInSeconds = 600;
   }
   this.time = this.timeInSeconds;
   this.runTimer = false;
   this.hasStarted = false;
   this.hasFinished = false;
   this.remainingTime = this.timeInSeconds;
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }

  startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
   }

   timerTick() {
    setTimeout(() => {
     if (!this.runTimer) { return; }
     this.remainingTime--;
     this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
     if (this.remainingTime > 0) {
       this.timerTick();
     }
     else if (this.hasFinished = true) {
      //  this.router.navigateByUrl("home")
      this.question1 = false;
      this.question2 = false;
      this.question3 = false;
      this.question4 = false;
      this.question5 = false;
      this.question6 = true;
     }
    }, 500 );
    }

    getSecondsAsDigitalClock(inputSeconds: number) {
      var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      var hoursString = '';
      var minutesString = '';
      var secondsString = '';
      hoursString = (hours < 10) ? '0' + hours : hours.toString();
      minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
      secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
      return minutesString + ':' + secondsString;
      }

  // End timer

}
