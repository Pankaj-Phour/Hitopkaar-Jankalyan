import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  subscribe!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscribe = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  ngOnInit(): void {}

  submit(){
    if(this.subscribe.valid){
      console.log(this.subscribe.value);
      this.subscribe.reset();
    }
  }
}