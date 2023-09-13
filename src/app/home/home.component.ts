import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  servicePoints:any = [
    {img:'',heading:'Family Support',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'',heading:'Health Benifits',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'',heading:'Scholarships',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'',heading:'Therapy',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
