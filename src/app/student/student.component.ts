import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  Mark: number=0;

  studentList: any[] = [
    { Name:'Hajer ', Email:'Hajer@gmail.com ', Mark: 87},
    { Name:'Sara ', Email:'Sara@gmail.com', Mark: 30},
    { Name:'Ali ', Email:'Ali@gmail.com ', Mark: 50},
    { Name:'Alai ', Email:'Alai@gmail.com', Mark: 20},
    { Name:'Ibrahim ', Email:'Ibrahim@gmail.com', Mark: 90},
    { Name:'Hana ', Email:'Hana@gmail.com', Mark: 66},

    
  ];

  getMarkColor(Mark: number): string {
    return Mark < 50 ? 'red-text' : 'green-text';
  }

  getPassFailStatus(Mark: number): string {
    return Mark >= 50 ? 'PASS' : 'FAIL';
}
getStyle(): any {
  // Your custom logic to determine the style object
  // For example, let's apply a blue background color and white text color:
  return {
    'background-color': '#D3D3D3',
    // 'color': 'white',
    'padding': '10px',
    'text-align': 'center',
  };
}
}