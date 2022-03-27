import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchTermSub = new Subject<string>();
  searchTermObs = this.searchTermSub.asObservable();
  constructor() {}
}
