import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const baseUrl: String = "http://162.55.185.65:8080/";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllExpense() {
    let url = "/expense";
    return this.http.get(url);
  }

  public getSpecificExpense(groupId: number) {
    let url = "/expense/" + groupId;
    return this.http.get(url);
  }

}