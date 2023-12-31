import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobileNav:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  closeNav(link:any){
    console.log(link);
    if(link !== ''){
      // this.router.navigate([link])
    }
    this.mobileNav = false;
  }

  toggleNav(){
    this.mobileNav = !this.mobileNav;
  }


  scroll(target:string){
    let element = document.getElementById(target);
    element?.scrollIntoView({behavior:'smooth'})
  }


}
