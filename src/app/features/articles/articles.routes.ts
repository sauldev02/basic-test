import { Routes } from '@angular/router';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';

export const ARTICLES_ROUTES: Routes = [
  { path: '', component: ArticleListComponent },
  { path: ':slug', component: ArticleDetailComponent },
];
