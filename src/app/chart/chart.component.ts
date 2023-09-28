

import { Component, Input, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
charts:any;
type:any = 'pie';
revenue:any;
color:any;
submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
   this.charts = HighCharts.chart('chart',this.options)
  }

options:any = {
  chart:{
    type:this.type || 'pie',
    inverted:false,
    fill:'none'
  },
 
  xAxis:{
    categories: ['Child care home','Cleanliness program','Helping people', 'Excursions','Feeding the poor'],
    title:{
      text:'Donation spends'
    }
  },
  title:{
    text:'Donation Spends'
  },
  yAxis:{
    min:0,
    title:{
      text:'spends',
      align:'middle'
    },
    labels:{
      overflow:'justify'
    }
  },
  plotOptions:{
    bar:{
      dataLabels:{
        enabled:true
      },
     series: {
        colorByPoint: true
      }
    }
  },
  legend:{
    layout:'horizontal',
    align:'right',
    floating:true,
    borderWidth:1,
    backgroundColor: HighCharts.defaultOptions.legend?.backgroundColor || '#FFFFFF',
    shadow:true,
  },
  credits:{
    enabled: false,
  },
  series:[
    {
      innerSize:'40%',
      name:'Spends',
      data:[
        {name:'Child care home',y:40,color:'#bef3c0'},
        {name:'Cleanliness program',y:35,color:'#ac94f1'},
        {name:'Helping people',y:10,color:'#fff0ca'},
        {name:'Excursions',y:10,color:'#f9cf64'},
        {name:'Feeding the poor',y:5,color:'#f38fbf'},
      ]
    }
  ]

 
}

}