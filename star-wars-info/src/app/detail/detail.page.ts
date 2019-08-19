import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StarwarsApiService} from '../services/starwars-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private detailId: string;
  public detailData$;
  constructor(
    private activatedRoute: ActivatedRoute,
    private starwarsApi: StarwarsApiService) { }

  ngOnInit() {
    this.detailId = this.activatedRoute.snapshot.paramMap.get('id');
    this.detailData$ = this.starwarsApi.getPersonDetails$('https://swapi.co/api/people/', this.detailId);
  }

}
