import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

export interface Posting {
  subject:string;
  body: string;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    title = "socialPosts";
    
    @Input() show: boolean;
    @Output() submitted = new EventEmitter<Posting>();
    @Output() showEvent = new EventEmitter<boolean>();
    @Input() form: boolean;
    
    
      addPost = (subject: string, body: string ) => {  
      if (body && subject){
    
      this.submitted.emit({subject,body});
          
      }
          
        }
    
      hideForm = () => {
        this.showEvent.emit(false);
        this.show=false;
      }
    }
