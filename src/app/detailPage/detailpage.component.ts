import { Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-detailPage',
    templateUrl: './detailPage.component.html',
    styleUrls: ['./detailPage.component.css']
  })
  export class DetailPageComponent implements OnInit{
    currentQuestion: any
    currentTopic: any

    ngOnInit(): void {
        var retrievedObject: any = localStorage.getItem('CurrentQuestion');
        var currentQuestion = JSON.parse(retrievedObject)
        
        this.currentTopic = localStorage.getItem('CurrentTopic')
        
        var values = (Object.keys(currentQuestion) as Array<keyof typeof currentQuestion>).reduce((accumulator, current) => {
            accumulator.push({key: current, value: currentQuestion[current]});
            return accumulator;
        }, [] as (typeof currentQuestion[keyof typeof currentQuestion])[]);

        this.currentQuestion = values
        
        for (let i = 0; i < this.currentQuestion.length; i++) {
          var element = this.currentQuestion[i]
          if (element.key == 'options') {
            element.value.sort((a: any, b: any) => (a.id < b.id ? -1 : 1))
          }
        }
    }
  }