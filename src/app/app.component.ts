import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;
  
  images = [ 
    {
    title:'kuch kuch hota hai',
    imageUrl: 'https://images.unsplash.com/photo-1670616440058-927ed245e905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

  },

  {
    title: 'tere bina kya jeena',
    imageUrl: 'https://images.unsplash.com/photo-1669462277329-f32f928a4a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    title: 'Adidas',
    imageUrl: 'https://images.unsplash.com/photo-1615064779799-df1bfcc66ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 '
  },

  {
    title: 'Hello world',
    imageUrl: 'https://images.unsplash.com/photo-1670400338143-eca9501ef009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    title: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1658526972751-6d9f71f2cfa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    title: 'Nike ',
    imageUrl: 'https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },

  {
    title: 'Cars ',
    imageUrl: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    title: 'Architecture & Interiors ',
    imageUrl: 'https://images.unsplash.com/photo-1670469583184-fea120451bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },

  {
    title: 'Mountain',
    imageUrl: 'https://images.unsplash.com/photo-1669806501241-2116f00b2c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  }



  ];

  showNav(i: number){

    return Math.abs(this.currentPage - i) < 5;
  }
}
