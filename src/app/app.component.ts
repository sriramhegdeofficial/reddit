import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles : Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';

    return false
  }

  constructor() {
    this.articles = [
      new Article("reddit clone", "https://reddit.com/", 10),
      new Article("fb clone", "https://facebook.com/", 90),
      new Article("twitter clone", "https://twitter.com/", 810)];
  }

  sortedArticles() : Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
