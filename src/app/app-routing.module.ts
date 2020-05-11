import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { AboutMeComponent } from "./main/about-me/about-me.component";
import { ResumeComponent } from "./main/resume/resume.component";
import { ContactComponent } from "./main/contact/contact.component";
import { BlogComponent } from "./main/blog/blog.component";
import { PortfolioComponent } from './main/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
