import { Component, Input, OnInit } from '@angular/core';
import NewsItem from '../news-item-model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss']
})
export class OneNewComponent implements OnInit {

  constructor(public newsService: NewsService) {
  }
  ngOnInit(): void {
  }

}
