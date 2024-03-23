import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  #pendingRequest: number = 0;

  #isLoading: BehaviorSubject<boolean>;

  constructor() {
    this.#isLoading = new BehaviorSubject<boolean>(false);
  }

  get isLoading() {
    return this.#isLoading;
  }

  showLoader = () => {
    this.#pendingRequest++;
    this.#isLoading.next(true);
  }

  hideLoader = () => {
    --this.#pendingRequest;
    if (this.#pendingRequest <= 0) {
      this.#pendingRequest = 0;
      this.#isLoading.next(false);
    }
  }
}
