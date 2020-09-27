import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  users : any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getUsers().subscribe(data =>{
      this.users = data
    })
  }

  firstClick(){
    console.log(this.users)
  }
}
