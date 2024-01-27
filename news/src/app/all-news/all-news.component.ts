import { Component, OnInit } from '@angular/core';
import NewsItem from '../news-item-model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  newsArr: NewsItem[] = [];

  constructor(public newsService: NewsService) {

  }

  ngOnInit(): void {
    this.newsService.getNewsUpdateListener().subscribe((newsResult) => {
      console.log("vhhgh");
      this.newsArr = newsResult;
    });
    this.newsService.getAllNews().subscribe(newsResult => {
      this.newsArr = newsResult;
    });
  }
  
  getNewById(id: string) {
    this.newsService.getNewById(id);
  }

}
