import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import NewsItem from './news-item-model';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private hubConnection: HubConnection;
  private newsUpdateSubject = new Subject<NewsItem[]>();
  myNew: NewsItem

  constructor(public http: HttpClient) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7247/newsHub') 
      .build();

    this.startConnection();

    this.hubConnection.on('ReceiveNewsUpdate', (updatedNews: NewsItem[]) => {
      this.newsUpdateSubject.next(updatedNews);
    });
  }

  private startConnection() {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  public getNewsUpdateListener(): Observable<NewsItem[]> {
    return this.newsUpdateSubject.asObservable();
  }

  getAllNews() {
    return this.http.get<NewsItem[]>('https://localhost:7247/api/News');
  }

  getNewById(id) {
    const encodedId = encodeURIComponent(id);
    return this.http.get<NewsItem>(`https://localhost:7247/api/News/${encodedId}`).subscribe(
      newItem => this.myNew = newItem
    );
  }
}