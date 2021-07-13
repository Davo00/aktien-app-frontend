import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const baseUrl: string = 'http://162.55.185.65:8080/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://162.55.185.65:8080/';

  constructor(private http: HttpClient) {}

  // ** EXPENSE CONTROLLER ** //

  public getAllExpense() {
    let url = '/expense';
    return this.http.get(url);
  }

  public getSpecificExpense(groupId: number) {
    let url = '/expense/' + groupId;
    return this.http.get(url);
  }

  public createExpense(): Observable<any> {
    let url = '/expense/';
    return this.http.post<string>(url, null);
  }

  public editExpenseById(expenseId: number): Observable<any> {
    let url = '/expense/' + expenseId;
    return this.http.put<string>(url, null);
  }

  public deleteExpenseById(expenseId: number): Observable<any> {
    let url = this.baseUrl + '/expense/' + expenseId;
    return this.http.delete<string>(url);
  }

  // ** GROUP CONTROLLER ** //

  public getUserByGroup(groupId: number) {
    let url = '/group/' + 'allUsers/' + groupId;
    return this.http.get(url); // this.baseUrl + url
  }

  public createGroup(groupName: string): Observable<any> {
    let url = '/group/' + groupName;
    return this.http.post<string>(url, null);
  }

  public addUserToGroup(groupId: number, userName: string): Observable<any> {
    let url = '/group/' + groupId + '/' + userName;
    return this.http.put<string>(url, null);
  }

  public updateGroupById(groupId: number): Observable<any> {
    let url = '/group/' + groupId;
    return this.http.put<string>(url, null);
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

  public createUser(): Observable<any> {
    let url = '/user/register';
    return this.http.post<string>(url, null);
  }

  public editUserByIda(expenseId: number): Observable<any> { // by id?
    let url = '/user/' + expenseId;
    return this.http.put<string>(url, null);
  }

  public deleteUserByIda(expenseId: number): Observable<any> { // by id?
    let url = '/user/' + expenseId;
    return this.http.delete<string>(url);
  }

  // public getUsersByGroup(groupName: string) {
  //   let url = '/user/' + 'group/' + groupName;
  //   return this.http.get(url);
  // }


}
