import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialPostsComponent } from './components/social-posts/social-posts.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
