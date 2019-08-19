import { Injectable } from '@angular/core';
import {DummyHttpClientService} from './dummy-http-client.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
    private peopleStore$ = new BehaviorSubject([]);

  constructor(private http$: DummyHttpClientService) { }

    get people$() {
        return this.peopleStore$.asObservable();
    }
    searchForPeople(url: string) {
        this.http$.get(url).subscribe(people => this.peopleStore$.next(people));
    }

    getPersonDetails$(url: string, id: string) {
        return this.http$.get(url + id);
    }
}
