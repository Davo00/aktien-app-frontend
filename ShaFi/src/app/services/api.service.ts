import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl: string = 'http://162.55.185.65:8080/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://162.55.185.65:8080/';

  constructor(private http: HttpClient) {}

  public getAllExpense() {
    let url = '/expense';
    return this.http.get(url);
  }

  public getSpecificExpense(groupId: number) {
    let url = '/expense/' + groupId;
    return this.http.get(url);
  }

  // ** GROUP CONTROLLER ** //

  public getUserByGroup(groupId: number) {
    let url = '/group/' + 'allUsers/' + groupId;
    return this.http.get(url); // this.baseUrl + url
  }

  public createGroup(groupName: string): Observable<any> {
    let url = '/group/' + groupName;
    return this.http.post<string>(this.baseUrl, url);
  }

  public addUserToGroup(groupId: number, userName: string): Observable<any> {
    let url = '/group/' + groupId + '/' + userName;
    return this.http.put<string>(this.baseUrl, url);
  }

  public updateGroupById(groupId: number): Observable<any> {
    let url = '/group/' + groupId;
    return this.http.put<string>(this.baseUrl, url);
  }

  public deleteGroupById(groupId: number): Observable<any> {
    let url = this.baseUrl + '/group/' + groupId;
    return this.http.delete<string>(url);
  }

  // ** USER CONTROLLER ** //

  public getAllGroupsOfUser(userId: number) {
    let url = '/user/' + 'allGroups/' + userId;
    return this.http.get(url);
  }

  public getUsersByGroup(groupName: string) {
    let url = '/user/' + 'group/' + groupName;
    return this.http.get(url);
  }

  // ** CALCULATE CONTROLLER ** //

  public getCalculatedDebtsForGroup(groupId: number) {
    let url = '/calculate/debts'  + groupId;
    return this.http.get(url);
  }
}
