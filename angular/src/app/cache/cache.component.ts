import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith, tap } from 'rxjs/operators';
import { FormBuilderService } from '../form-builder.service'
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'
import { myFormModel } from '../models/myForm.model'
import { OtherInfoModel } from '../models/ohterInfo.model'
import { of } from 'rxjs'
import { disableDebugTools } from '@angular/platform-browser';

const CACHE_KEY = 'httpCache';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.sass']
})

export class CacheComponent implements OnInit {
  repos$;
  myForm : FormGroup;

  CACHE_KEY = 'httpCache';
  constructor(
    private http: HttpClient,
    private formBuilderService : FormBuilderService,
    private formBuilder : FormBuilder
    ) {}

  ngOnInit(): void {
    const url = 'https://api.github.com/search/repositories?q=angular';
    
    this.repos$ = this.http.get<any>(url).
    pipe(
      map(data => data.items),
      tap(data => console.log("fetched"))
    )

    this.repos$.subscribe(data =>{
      localStorage[CACHE_KEY] = JSON.stringify(data);
    })

    this.repos$ = this.repos$.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || ''))
    )
    let otherInfo = new OtherInfoModel(100, "300");
    let myFormInput = new myFormModel(
      "shin",
      "nagai",
      "5/10",
      otherInfo
    );
    console.log(myFormInput)
    console.log(myFormInput.otherInfo)
    this.myForm = this.formBuilderService.buildForm(myFormInput);
    console.log(this.myForm)
  }

}
