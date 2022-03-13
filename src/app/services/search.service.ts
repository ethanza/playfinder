import { Result, ApiParams } from "../models/search.model";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, Observable, Subscription } from "rxjs";

@Injectable()
export default class SearchService {
  private endpoint: string;
  private results = new Subject<Result>();

  private subscription: Subscription;

  constructor(private http: HttpClient) {}

  public getSlots(): Observable<Result> {
    return this.results.asObservable();
  }

  // public loadResults(api_params: ApiParams): void {
  //     // this.endpoint =
  //     //     'https://api-v2.pfstaging.xyz/pitches/' +
  //     //     api_params.pitch_id +
  //     //     '/slots?filter%5Bstarts%5D=' +
  //     //     api_params.start_date +
  //     //     '&filter%5Bends%5D=' +
  //     //     api_params.end_date;

  //     // this.subscription = this.http.get<Result>(this.endpoint).subscribe((results) => {
  //     //     this.results.next(results);
  //     // });

  //     this.subscription = this.http.get<Result>('/assets/slots.json').subscribe((result) => {
  //         this.results.next(result);
  //     });
  // }

  public getSpecificSlot(api_params: ApiParams): void {
    this.subscription = this.http
      .get<Result>("assets/slots.json")
      .subscribe((result) => {
        const specificResult = result.data.find(
          (slot) => parseInt(slot.id) == api_params.pitch_id
        );
        result.data = [];
        result.data.push(specificResult);
        this.results.next(result);
      });
  }

  public getAllAvailableSlots(): void {
    this.subscription = this.http
      .get<Result>("/assets/slots.json")
      .subscribe((result) => {
        const availableSlots = result.data.filter(
          (slot) => slot.attributes.availabilities > 0
        );
        result.data = availableSlots;
        this.results.next(result);
      });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
