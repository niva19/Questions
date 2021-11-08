import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import * as parametersImport from '../enums/parameters';
import * as modesImport from '../enums/modes';
import * as questionsTypesImport from '../enums/questionsTypes';

export enum KEY_CODE {
  KEY_1 = '1',
  KEY_2 = '2',
  KEY_3 = '3',
  KEY_4 = '4',
  KEY_5 = '5',
  KEY_6 = '6',
  KEY_7 = '7',
  KEY_8 = '8',
  KEY_9 = '9',
  KEY_SHIFT = 'Shift'
}

@Component({
  selector: 'app-questionPage',
  templateUrl: './questionPage.component.html',
  styleUrls: ['./questionPage.component.css']
})
export class QuestionPageComponent implements OnInit{
  @ViewChild('textareacode') textareacode: any;
  @ViewChild('radioBoxContainer') radioBoxContainer: any;
  @ViewChild('checkBoxContainer') checkBoxContainer: any;

  questions: any
  currentIndex: any = 0
  checkBoxs: any = {}
  radioBoxCheckedId: any = 0
  isFinished: boolean = false

  mode: any = parametersImport.parameters.mode
  reviewQuestions: any = new Map<string, any>()
  includeQuestions: any = new Map<string, any>()
  topics: any = []
  score: any = 0
  secondRound: any = false

  modes: any = modesImport.modes
  questionsTypes: any = questionsTypesImport.questionTypes

  constructor(private router: Router) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event)
    if (event.key === KEY_CODE.KEY_SHIFT) {
      if (this.isFinished == false) {
        if (this.questions[this.currentIndex].questionType == this.questionsTypes.UniqueSelection || this.questions[this.currentIndex].questionType == this.questionsTypes.TrueFalse) {
          this.checkUniqueQuestion()
        }
        else if (this.questions[this.currentIndex].questionType == this.questionsTypes.MultipleSelection){
          this.checkMultipleQuestion()
        }
      }
      else {
        if (this.mode == this.modes.review && this.reviewQuestions.size != 0) {
          this.showReviewQuestions()
        }
        else if(this.mode == this.modes.include && this.includeQuestions.size != 0) {
          this.showIncludeQuestions()
        }
      }
    }

    if (event.key === KEY_CODE.KEY_1) {
      this.choiceQuestionType(0)  
    }

    if (event.key === KEY_CODE.KEY_2) {
      this.choiceQuestionType(1)
    }

    if (event.key === KEY_CODE.KEY_3) {
      this.choiceQuestionType(2)
    }

    if (event.key === KEY_CODE.KEY_4) {
      this.choiceQuestionType(3)
    }

    if (event.key === KEY_CODE.KEY_5) {
      this.choiceQuestionType(4)
    }

    if (event.key === KEY_CODE.KEY_6) {
      this.choiceQuestionType(5)
    }

    if (event.key === KEY_CODE.KEY_7) {
      this.choiceQuestionType(6)
    }

    if (event.key === KEY_CODE.KEY_8) {
      this.choiceQuestionType(7)
    }

    if (event.key === KEY_CODE.KEY_9) {
      this.choiceQuestionType(8)
    }
  }

  ngOnInit(): void {
    this.questions = parametersImport.parameters.questions

    this.questions = this.filterQuestions(this.questions)
    
    if (parametersImport.parameters.rangeIncrementIn != 0) {
      var arrayFrom = parametersImport.parameters.rangeFrom
      var arrayTo = arrayFrom + parametersImport.parameters.rangeIncrementIn
      this.questions = this.questions.slice(arrayFrom, arrayTo)
    }

    if (parametersImport.parameters.shuffleOnlyOptions) {
      this.shuffleOnlyOptions(this.questions)
    }
    else {
      this.shuffleQuestions(this.questions)
    }
    
    this.fillTopics()
  }
  
  choiceQuestionType(option: any) {
    if (this.questions[this.currentIndex].questionType != this.questionsTypes.Complete) {
      if (this.questions[this.currentIndex].questionType == this.questionsTypes.UniqueSelection || this.questions[this.currentIndex].questionType == this.questionsTypes.TrueFalse) {
        this.radioBoxContainerChecker(option)    
      }
      else if (this.questions[this.currentIndex].questionType == this.questionsTypes.MultipleSelection) {
        this.checKBoxContainerChecker(option)
      }
    }
  }

  fillTopics(){
    Object.keys(parametersImport.parameters.topics).forEach(key => this.topics.push(key))
  }

  shuffleOnlyOptions(questions: any){
    for (var i = 0; i < questions.length; i++) {
      questions[i] = this.shuffleOptions(questions[i])
    }
  }

  shuffleQuestions(questions: any){
    for (var i = 0; i < questions.length; i++) {
      var tempQuestion = questions[i];
      var randomNumber = Math.floor(Math.random() * (i + 1));
      questions[i] = this.shuffleOptions(questions[randomNumber]);
      questions[randomNumber] = this.shuffleOptions(tempQuestion);
    }
  }

  shuffleOptions(question: any){
    if (question.questionType == this.questionsTypes.UniqueSelection || question.questionType == this.questionsTypes.MultipleSelection) {
      var options = question.options
      for (var i = 0; i < options.length; i++) {
        var tempOption = options[i];
        var randomNumber = Math.floor(Math.random() * (i + 1));
        options[i] = options[randomNumber];
        options[randomNumber] = tempOption;
      }
    }
    else if (question.questionType == this.questionsTypes.Sort) {
      var sortOptions = question.sortOptions
      for (var i = 0; i < sortOptions.length; i++) {
        var tempOption = sortOptions[i];
        var randomNumber = Math.floor(Math.random() * (i + 1));
        sortOptions[i] = sortOptions[randomNumber];
        sortOptions[randomNumber] = tempOption;
      }
    }
    return question
  }

  filterQuestions(questions: any){
    var filterQuestions = questions.filter((question: any) =>
      question.topic >= 
      parametersImport.parameters.filterTopicFrom &&
      question.topic <=
      parametersImport.parameters.filterTopicTo
    )

    if (parametersImport.parameters.onlyShowOriginalQuestions) {
      filterQuestions = filterQuestions.filter((question: any) => question.isOriginalQuestion == true)
    }  

    return filterQuestions
    // return filterQuestions.filter((questions: any) => questions.questionType == 5)
  }

  updateUniqueCheckedOptions(option: any){
    this.radioBoxCheckedId = option.id
  }

  updateCheckedOptions(option: any, event: any){
    this.checkBoxs[option.id] = event.target.checked
  }

  checkUniqueQuestion() {
    if (this.radioBoxCheckedId != 0) {
      var userAnswer = this.radioBoxCheckedId
      var answer = this.questions[this.currentIndex].answer
      var isCorrectAnswer = (userAnswer == answer) ? true : false

      this.checkAnswers(isCorrectAnswer)
    }
    else {
      alert("Select an option")
    }
  }

  checkMultipleQuestion(){
    if (this.IsValidCheckBoxs()) {
      var flatUserAnswers = Object.keys(this.checkBoxs).filter( key => this.checkBoxs[key] == true).sort().join(',')
      var flatAnswers = this.questions[this.currentIndex].answer.join(',')
      var isCorrectAnswer = (flatUserAnswers == flatAnswers) ? true : false
      this.checkAnswers(isCorrectAnswer)
    }
    else {
      alert("Select at least one option")
    }
  }

  IsValidCheckBoxs(): boolean {
    if (Object.keys(this.checkBoxs).length != 0) {
      var uncheckedOptions = Object.keys(this.checkBoxs).filter( key => this.checkBoxs[key] == false)
      if (Object.keys(this.checkBoxs).length != uncheckedOptions.length) {
        return true
      } else {
        return false        
      }
    }
    else {
      return false
    }
  }

  completeForm(form: NgForm) {
    if(!form.valid) {
      return false
    }
    else {

      var flatuserAnswer = form.value.textAreaAnswer.replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
      var flatanswer = this.questions[this.currentIndex].answer.replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
      var isCorrectAnswer = (flatuserAnswer == flatanswer) ? true : false

      this.checkAnswers(isCorrectAnswer)

      return true
    }
  }
  
  sortForm(form: NgForm) {
    if(!form.valid) {
      return false
    }
    else {

      var flatuserAnswer = form.value.textAreaAnswer.replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
      var flatanswer = this.questions[this.currentIndex].answer.join('').replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
      var isCorrectAnswer = (flatuserAnswer == flatanswer) ? true : false

      this.checkAnswers(isCorrectAnswer)

      return true
    }
  }

  onKeyEvent(event: any) {
    // if (event.key === 'Tab') {
    //   event.target.value += "\t"
    //   event.preventDefault();
    // }
    // else if (event.key === 'Enter') {
    //   event.target.value += "\n"
    //   event.preventDefault();
    // }
  
  }

  validateCurrentId(){
    if (this.currentIndex == this.questions.length - 1) {
      this.isFinished = true
    } else {
      this.currentIndex++
    }
  }

  checkAnswers(isCorrectAnswer: any){
    switch (this.mode) {
      case this.modes.training:
        this.checkAnswersTrainingMode(isCorrectAnswer)
      break
      case this.modes.review:
        this.checkAnswersReviewMode(isCorrectAnswer)
      break
      case this.modes.hard:
        this.checkAnswersHardMode(isCorrectAnswer)
      break
      case this.modes.include:
        this.checkAnswersIncludeMode(isCorrectAnswer)
      break
    }
    
  }

  checkAnswersTrainingMode(isCorrectAnswer: any){
    if (isCorrectAnswer) {
      this.checkBoxs = {}
      this.radioBoxCheckedId = 0
      this.clearTextAreaAnswer()
      // alert("Correct")
      this.validateCurrentId()
    }
    else {
      alert("Incorrect")
    }
  }

  checkAnswersReviewMode(isCorrectAnswer: any){
    if (isCorrectAnswer) {
      this.checkBoxs = {}
      this.radioBoxCheckedId = 0
      this.clearTextAreaAnswer()
      // alert("Correct")
      this.validateCurrentId()
    }
    else {
      var key = this.questions[this.currentIndex].question.replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
    
      this.reviewQuestions.set(key, this.questions[this.currentIndex])
      alert("Incorrect")
    }
  }

  checkAnswersHardMode(isCorrectAnswer: any){
    this.checkBoxs = {}
    this.radioBoxCheckedId = 0
    this.clearTextAreaAnswer()
    if (isCorrectAnswer) {
      this.score++
    }
    this.validateCurrentId()
  }

  checkAnswersIncludeMode(isCorrectAnswer: any){
    if (isCorrectAnswer) {
      this.checkBoxs = {}
      this.radioBoxCheckedId = 0
      this.clearTextAreaAnswer()
      // alert("Correct")
      this.validateCurrentId()
    }
    else {
      if (!this.secondRound) {
        var key = this.questions[this.currentIndex].question.replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
    
        this.includeQuestions.set(key, this.questions[this.currentIndex])
      }
      alert("Incorrect")
    }
  }

  showReviewQuestions(){
    var questions: any = []

    this.reviewQuestions.forEach((value: boolean, key: string) => {
      questions.push(value)
    });

    this.shuffleQuestions(questions)
    this.questions = questions

    this.currentIndex = 0
    this.checkBoxs = {}
    this.radioBoxCheckedId = 0
    this.clearTextAreaAnswer()
    this.isFinished = false
    this.reviewQuestions = new Map<string, any>()
    this.score = 0

  }

  clearTextAreaAnswer(){
    if (this.textareacode != undefined) {
      this.textareacode.nativeElement.value = ''
    }
  }

  getKeyByValue(){
    return this.topics[this.questions[this.currentIndex].topic - 1]
  }

  goToDetail(event: any){
    if (event.ctrlKey)
    {
      localStorage.setItem('CurrentQuestion', JSON.stringify(this.questions[this.currentIndex]))
      localStorage.setItem('CurrentTopic', this.topics[this.questions[this.currentIndex].topic - 1])
      this.router.navigate([]).then(result => {  window.open('/detail', '_blank'); });
    }
  }

  onRightClick() {
    localStorage.setItem('CurrentQuestion', JSON.stringify(this.questions[this.currentIndex]))
    localStorage.setItem('CurrentTopic', this.topics[this.questions[this.currentIndex].topic - 1])
    this.router.navigate([]).then(result => {  window.open('/detail', '_blank'); });
  }

  IncludeQuestion(){
    var key = this.questions[this.currentIndex].question.replace(/(\r\n|\n|\r|\t|\s)/gm, "").toUpperCase()
    
    this.includeQuestions.set(key, this.questions[this.currentIndex])

    this.checkBoxs = {}
    this.radioBoxCheckedId = 0
    this.clearTextAreaAnswer()
    this.validateCurrentId()
  }

  showIncludeQuestions(){
    var questions: any = []

    this.includeQuestions.forEach((value: boolean, key: string) => {
      questions.push(value)
    });

    this.shuffleQuestions(questions)
    this.questions = questions

    this.secondRound = true
    this.currentIndex = 0
    this.checkBoxs = {}
    this.radioBoxCheckedId = 0
    this.clearTextAreaAnswer()
    this.isFinished = false
    this.score = 0
  }
  
  radioBoxContainerChecker(option: any) {
    if (this.radioBoxContainer.nativeElement.children[option] != undefined) {
      this.radioBoxContainer.nativeElement.children[option].children[0].children[0].checked = true
      this.radioBoxCheckedId = this.radioBoxContainer.nativeElement.children[option].children[0].children[0].value
    }
  }

  checKBoxContainerChecker(option: any) {
    if (this.checkBoxContainer.nativeElement.children[option] != undefined) {
      this.checkBoxContainer.nativeElement.children[option].children[0].children[0].checked = !this.checkBoxContainer.nativeElement.children[option].children[0].children[0].checked
      
      var optionValue = this.checkBoxContainer.nativeElement.children[option].children[0].children[0].value 

      this.checkBoxs[optionValue] = this.checkBoxContainer.nativeElement.children[option].children[0].children[0].checked
      
    }
  }

}
