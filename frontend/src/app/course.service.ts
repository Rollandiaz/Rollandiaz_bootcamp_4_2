import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {


  id:number;
  name:string = "";

  constructor() {}

  public courseList: object[] = [
    {'id' : '1', 'name' : 'Python'},
    {'id' : '2', 'name' : 'React'},
    {'id' : '3', 'name' : 'React Native'},
    {'id' : '4', 'name' : 'JavaScript'},
    {'id' : '5', 'name' : 'CSS'},
  ]

  AddCourse(){
    this.courseList.push({
      "id" : this.id,
      "name" : this.name
    });
  }
}