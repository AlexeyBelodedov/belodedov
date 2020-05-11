import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { ResumeComponent } from './main/resume/resume.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ContactComponent } from './main/contact/contact.component';
import { ScrollDirective } from './shared/directives/scroll.directive';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactLineDirective } from "./shared/directives/contact.line.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PortfolioHoverDirective } from "./shared/directives/portfolio.hover.directive";
import { ModalService } from "./shared/services/modal.service";
import { ModalComponent } from './shared/components/modal/modal.component';
import { BlogComponent } from './main/blog/blog.component';
import { HttpClientModule } from "@angular/common/http";
import { ArticleComponent } from './main/blog/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    HomeComponent,
    ResumeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent,
    ScrollDirective,
    ContactLineDirective,
    PortfolioHoverDirective,
    ModalComponent,
    BlogComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
