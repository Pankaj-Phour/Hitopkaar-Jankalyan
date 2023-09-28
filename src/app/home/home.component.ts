import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  servicePoints:any = [
    {img:'assets/Icon.png',heading:'Family Support',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'assets/Icon-1.png',heading:'Health Benifits',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'assets/Icon-2.png',heading:'Scholarships',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'assets/Icon-3.png',heading:'Therapy',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
  ]

  projects: any = [
    {img:'../../assets/project1.png', heading:'Mission smile 1k: Outdoor charity', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'../../assets/project2.png', heading:'Weekly excursions', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {img:'../../assets/project3.png', heading:'Monthly public awareness', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  aboutUs(){
    let element = document.getElementById('about-us');
    element?.scrollIntoView({behavior:'smooth'})
  }

}
