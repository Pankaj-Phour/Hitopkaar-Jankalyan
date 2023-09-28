import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerLinks: any = [
    {
      title: 'largerthan',
      links: []
    },
    {
      title: 'Home',
      links: [
        {
          linkTitle: 'About us',
        },
        {
          linkTitle: 'Team',
        },
        {
          linkTitle: 'What we do',
        },
        {
          linkTitle: 'contact',
        },
      ],
    },
    {
      title: 'More',
      links: [
        {
          linkTitle: 'Projects',
        },
        {
          linkTitle: 'Events',
        },
        {
          linkTitle: 'Donate',
        },
        {
          linkTitle: 'Blog',
        },
      ],
    },
    {
      title: 'Connect',
      links: [
        {
          linkTitle: 'Facebook',
        },
        {
          linkTitle: 'Instagram',
        },
        {
          linkTitle: 'Twitter',
        },
        {
          linkTitle: 'Linkdin',
        },
      ],
    },
    
  ];
  innerWidth: any;



  subscribe!: FormGroup;

  constructor(private fb: FormBuilder, private dialog:MatDialog) {
    this.subscribe = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerWidth = window.innerWidth;
}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    
}

  submit(){
    if(this.subscribe.valid){
      console.log(this.subscribe.value);
      this.subscribe.reset();
    }
  }


  donate(){
    this.dialog.open(PaymentComponent,{
      height:'400px',
      width:'500px'
    })
  }
}


@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./footer.component.scss'],
})

export class PaymentComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
      console.log("Hello from payment component ");
      
  }
}