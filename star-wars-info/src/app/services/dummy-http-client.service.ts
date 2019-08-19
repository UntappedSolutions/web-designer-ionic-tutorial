import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyHttpClientService {
    private allData = [
        {
            name: 'Luke Skywalker',
            height: 172,
            mass: 77,
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/14/',
                'https://swapi.co/api/vehicles/30/'
            ],
            starships: [
                'https://swapi.co/api/starships/12/',
                'https://swapi.co/api/starships/22/'
            ],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            id: 1
        },
        {
            name: 'C-3PO',
            height: 167,
            mass: 75,
            hair_color: 'n/a',
            skin_color: 'gold',
            eye_color: 'yellow',
            birth_year: '112BBY',
            gender: 'n/a',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/2/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:10:51.357000Z',
            edited: '2014-12-20T21:17:50.309000Z',
            id: 2
        },
        {
            name: 'R2-D2',
            height: 96,
            mass: 32,
            hair_color: 'n/a',
            skin_color: 'white, blue',
            eye_color: 'red',
            birth_year: '33BBY',
            gender: 'n/a',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/8/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/2/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:11:50.376000Z',
            edited: '2014-12-20T21:17:50.311000Z',
            id: 3
        },
        {
            name: 'Darth Vader',
            height: 202,
            mass: 136,
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [
                'https://swapi.co/api/starships/13/'
            ],
            created: '2014-12-10T15:18:20.704000Z',
            edited: '2014-12-20T21:17:50.313000Z',
            id: 4
        },
        {
            name: 'Leia Organa',
            height: 150,
            mass: 49,
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '19BBY',
            gender: 'female',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/2/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/30/'
            ],
            starships: [],
            created: '2014-12-10T15:20:09.791000Z',
            edited: '2014-12-20T21:17:50.315000Z',
            id: 5
        },
        {
            name: 'Owen Lars',
            height: 178,
            mass: 120,
            hair_color: 'brown, grey',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '52BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:52:14.024000Z',
            edited: '2014-12-20T21:17:50.317000Z',
            id: 6
        },
        {
            name: 'Beru Whitesun lars',
            height: 165,
            mass: 75,
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '47BBY',
            gender: 'female',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:53:41.121000Z',
            edited: '2014-12-20T21:17:50.319000Z',
            id: 7
        },
        {
            name: 'R5-D4',
            height: 97,
            mass: 32,
            hair_color: 'n/a',
            skin_color: 'white, red',
            eye_color: 'red',
            birth_year: 'unknown',
            gender: 'n/a',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/2/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:57:50.959000Z',
            edited: '2014-12-20T21:17:50.321000Z',
            id: 8
        },
        {
            name: 'Biggs Darklighter',
            height: 183,
            mass: 84,
            hair_color: 'black',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '24BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [
                'https://swapi.co/api/starships/12/'
            ],
            created: '2014-12-10T15:59:50.509000Z',
            edited: '2014-12-20T21:17:50.323000Z',
            id: 9
        },
        {
            name: 'Obi-Wan Kenobi',
            height: 182,
            mass: 77,
            hair_color: 'auburn, white',
            skin_color: 'fair',
            eye_color: 'blue-gray',
            birth_year: '57BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/20/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/38/'
            ],
            starships: [
                'https://swapi.co/api/starships/48/',
                'https://swapi.co/api/starships/59/',
                'https://swapi.co/api/starships/64/',
                'https://swapi.co/api/starships/65/',
                'https://swapi.co/api/starships/74/'
            ],
            created: '2014-12-10T16:16:29.192000Z',
            edited: '2014-12-20T21:17:50.325000Z',
            id: 10
        },
        {
            name: 'Anakin Skywalker',
            height: 188,
            mass: 84,
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '41.9BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/44/',
                'https://swapi.co/api/vehicles/46/'
            ],
            starships: [
                'https://swapi.co/api/starships/59/',
                'https://swapi.co/api/starships/65/',
                'https://swapi.co/api/starships/39/'
            ],
            created: '2014-12-10T16:20:44.310000Z',
            edited: '2014-12-20T21:17:50.327000Z',
            id: 11
        },
        {
            name: 'Wilhuff Tarkin',
            height: 180,
            mass: 'unknown',
            hair_color: 'auburn, grey',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '64BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/21/',
            films: [
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T16:26:56.138000Z',
            edited: '2014-12-20T21:17:50.330000Z',
            id: 12
        },
        {
            name: 'Chewbacca',
            height: 228,
            mass: 112,
            hair_color: 'brown',
            skin_color: 'unknown',
            eye_color: 'blue',
            birth_year: '200BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/14/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/3/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/19/'
            ],
            starships: [
                'https://swapi.co/api/starships/10/',
                'https://swapi.co/api/starships/22/'
            ],
            created: '2014-12-10T16:42:45.066000Z',
            edited: '2014-12-20T21:17:50.332000Z',
            id: 13
        },
        {
            name: 'Han Solo',
            height: 180,
            mass: 80,
            hair_color: 'brown',
            skin_color: 'fair',
            eye_color: 'brown',
            birth_year: '29BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/22/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [
                'https://swapi.co/api/starships/10/',
                'https://swapi.co/api/starships/22/'
            ],
            created: '2014-12-10T16:49:14.582000Z',
            edited: '2014-12-20T21:17:50.334000Z',
            id: 14
        },
        {
            name: 'Greedo',
            height: 173,
            mass: 74,
            hair_color: 'n/a',
            skin_color: 'green',
            eye_color: 'black',
            birth_year: '44BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/23/',
            films: [
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/4/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T17:03:30.334000Z',
            edited: '2014-12-20T21:17:50.336000Z',
            id: 15
        },
        {
            name: 'Jabba Desilijic Tiure',
            height: 175,
            mass: '1,358',
            hair_color: 'n/a',
            skin_color: 'green-tan, brown',
            eye_color: 'orange',
            birth_year: '600BBY',
            gender: 'hermaphrodite',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/24/',
            films: [
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/5/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T17:11:31.638000Z',
            edited: '2014-12-20T21:17:50.338000Z',
            id: 16
        },
        {
            name: 'Wedge Antilles',
            height: 170,
            mass: 77,
            hair_color: 'brown',
            skin_color: 'fair',
            eye_color: 'hazel',
            birth_year: '21BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/22/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/14/'
            ],
            starships: [
                'https://swapi.co/api/starships/12/'
            ],
            created: '2014-12-12T11:08:06.469000Z',
            edited: '2014-12-20T21:17:50.341000Z',
            id: 17
        },
        {
            name: 'Jek Tono Porkins',
            height: 180,
            mass: 110,
            hair_color: 'brown',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: 'unknown',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/26/',
            films: [
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [
                'https://swapi.co/api/starships/12/'
            ],
            created: '2014-12-12T11:16:56.569000Z',
            edited: '2014-12-20T21:17:50.343000Z',
            id: 18
        },
        {
            name: 'Yoda',
            height: 66,
            mass: 17,
            hair_color: 'white',
            skin_color: 'green',
            eye_color: 'brown',
            birth_year: '896BBY',
            gender: 'male',
            image: '../../assets/placeholder-image.jpg',
            homeworld: 'https://swapi.co/api/planets/28/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/'
            ],
            species: [
                'https://swapi.co/api/species/6/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-15T12:26:01.042000Z',
            edited: '2014-12-20T21:17:50.345000Z',
            id: 19
        }
    ];

  get(url: string): Observable<any> {
    switch (url) {
        case 'https://swapi.co/api/people': return of(
          this.allData
        );
        case 'https://swapi.co/api/people/1': return of(
            this.allData[0]
        );
        case 'https://swapi.co/api/people/2': return of(
            this.allData[1]
        );
        case 'https://swapi.co/api/people/3': return of(
            this.allData[2]
        );
        case 'https://swapi.co/api/people/4': return of(
            this.allData[3]
        );
        case 'https://swapi.co/api/people/5': return of(
            this.allData[4]
        );
        case 'https://swapi.co/api/people/6': return of(
            this.allData[5]
        );
        case 'https://swapi.co/api/people/7': return of(
            this.allData[6]
        );
        case 'https://swapi.co/api/people/8': return of(
            this.allData[7]
        );
        case 'https://swapi.co/api/people/9': return of(
            this.allData[8]
        );
        case 'https://swapi.co/api/people/10': return of(
            this.allData[9]
        );
        case 'https://swapi.co/api/people/11': return of(
            this.allData[10]
        );
        case 'https://swapi.co/api/people/12': return of(
            this.allData[11]
        );
        case 'https://swapi.co/api/people/13': return of(
            this.allData[12]
        );
        case 'https://swapi.co/api/people/14': return of(
            this.allData[13]
        );
        case 'https://swapi.co/api/people/15': return of(
            this.allData[14]
        );
        case 'https://swapi.co/api/people/16': return of(
            this.allData[15]
        );
        case 'https://swapi.co/api/people/17': return of(
            this.allData[16]
        );
        case 'https://swapi.co/api/people/18': return of(
            this.allData[17]
        );
        case 'https://swapi.co/api/people/19': return of(
            this.allData[18]
        );
        case 'https://swapi.co/api/people/20': return of(
            this.allData[19]
        );
      default: return throwError('Unrecognised url');
    }
  }
}
