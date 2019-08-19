import {Component, OnInit} from '@angular/core';
import {StarwarsApiService} from '../services/starwars-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public people$;
  constructor(private apiService: StarwarsApiService) {}

    ngOnInit() {
        this.apiService.searchForPeople('https://swapi.co/api/people');
        this.people$ = this.apiService.people$;
    }
}
