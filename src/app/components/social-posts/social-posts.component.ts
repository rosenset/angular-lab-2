import { Component, OnInit } from '@angular/core';
import { Posting } from 'src/app/post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  title ='My Thoughts';

  show: boolean = false;

  post: Posting;
  posts: Posting[] =[
    { subject: 'Dog', body: 'Go TIgers' },
    { subject: 'Dog', body: 'Go TIgers' },
    { subject: 'Dog', body: 'Go TIgers' },
    { subject: 'Dog', body: 'Go TIgers' },
    { subject: 'Dog', body: 'Go TIgers' },
];
  

onSubmit = (event) => {
  this.posts.unshift(event);
}

onShowEvent = (event) => {
  this.show = event;
}

showForm = () => {
  this.show = !this.show;
}

onDelete = (i) =>{
  this.posts.splice(i,1);
}

  constructor() { }

  ngOnInit(): void {
  }

}
