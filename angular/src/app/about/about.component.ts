import { Component, OnInit } from '@angular/core';
import { DjangoService } from '../service/django-service.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  count: number;
  message: string;
  constructor(private djangoService: DjangoService) { }

  ngOnInit(): void {
    this.count = 0;
    this.message = "value is not set yet"
  }

  getMessageFromDjango() {
    this.djangoService.getDataFromDjango().
      subscribe((data: string) => {
        this.count += 1;
        this.message = this.count.toString() + " : " + data;
      }),
      error => {
        this.message = "error";
      }
  }
}
