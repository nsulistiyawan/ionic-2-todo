import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos: any;
  public newTodo: string;

  constructor(public navCtrl: NavController) {
    this.loadTodo();
  }

  addTodo() {
    if (this.newTodo) {
      this.todos.push({
        value: this.newTodo,
        checked: false
      });
      this.newTodo = "";
      Keyboard.close();

    }
  }

  deleteTodo(todo){
    let index = this.todos.indexOf(todo);
    if(index > -1){
      this.todos.splice(index,1);
    }
  }

  loadCheckedTodo(){

  }

  loadAllTodo(){

  }

  loadUncheckedTodo(){

  }



  loadTodo() {
    this.todos = [
      {
        value: 'Playing TypeScript',
        checked: false
      }, {
        value: 'Playing Angular 2',
        checked: true
      }, {
        value: 'Playing Ionic 2',
        checked: false
      }, {
        value: 'Playing Cordova',
        checked: true
      }
    ];
  }

}
