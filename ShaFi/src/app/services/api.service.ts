import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const baseUrl: string = 'http://162.55.185.65:8080/';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://162.55.185.65:8080/';
  token = sessionStorage.getItem("Token")
  headersToken= new HttpHeaders()
  
  .set('Authorization', 'Bearer ' + this.token)
  //.set('Access-Control-Allow-Origin', 'POST');



  constructor(private http: HttpClient) {}


  // ** EXPENSE CONTROLLER ** //

  public getAllExpense() {
    let url = '/expense';
    return this.http.get(url ,{headers: this.headersToken} );
  }

  public getSpecificExpense(groupId: number) {
    let url = '/expense/' + groupId;
    return this.http.get(url, {headers: this.headersToken});
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
    return this.http.get(url ,{headers: this.headersToken} ); // this.baseUrl + url
  }

  public createGroup(groupName: string): Observable<any> {
    let url = '/group/' + groupName;

    return this.http.post<string>(url, null ,{headers: this.headersToken} );

  }

  public addUserToGroup(groupId: number, userName: string): Observable<any> {
    let url = '/group/' + groupId + '/' + userName;
    return this.http.put<string>(url, null ,{headers: this.headersToken} );

  }

  public updateGroupById(groupId: number): Observable<any> {
    let url = '/group/' + groupId;
    return this.http.put<string>(url, null ,{headers: this.headersToken} );

  }

  public deleteGroupById(groupId: number): Observable<any> {
    let url = this.baseUrl + '/group/' + groupId;
    return this.http.delete<string>(url ,{headers: this.headersToken} );
  }

  // ** USER CONTROLLER ** //

  public getAllGroupsOfUser(userId: number) {
    let url = '/user/' + 'allGroups/' + userId;
    return this.http.get(url ,{headers: this.headersToken} );
  }


  public getUsersByGroup(groupName: string) {
    let url = '/user/' + 'group/' + groupName;
    return this.http.get(url, null ,{headers: this.headersToken} );
  }
  public postLogin(login: Object): Observable<any> {
    let url =  '/user/login';
    console.log(login)
    
      return this.http.post<any>(url, login, {headers: this.headersToken, observe: 'response'} );
  }
  //return this.http.post<string>(url, login , { 'headers': headers };

  public createUser(): Observable<any> {
    let url = '/user/register';
    return this.http.post<string>(url, null, {headers: this.headersToken, observe: 'response'});
  }

  public editUserByIda(expenseId: number): Observable<any> { // by id?
    let url = '/user/' + expenseId;
    return this.http.put<string>(url, null, {headers: this.headersToken, observe: 'response'});
  }

  public deleteUserByIda(expenseId: number): Observable<any> { // by id?
    let url = '/user/' + expenseId;
    return this.http.delete<string>(url, {headers: this.headersToken, observe: 'response'});
  }

  // public getUsersByGroup(groupName: string) {
  //   let url = '/user/' + 'group/' + groupName;
  //   return this.http.get(url);
  // }



}
