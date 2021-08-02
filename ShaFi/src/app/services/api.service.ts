import { dataType } from './../abbrechnung/abbrechnung.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  token = sessionStorage.getItem('Token');
  headersToken = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  baseUrl = "https://api.kreativegruppe42.de"
  //baseUrl = "http://162.55.185.65:8080"
  //.set('Access-Control-Allow-Origin', 'POST');

  constructor(private http: HttpClient) {}

  // ** EXPENSE CONTROLLER ** //

  public getAllExpense(): any {
    const url = this.baseUrl + '/expense';
    return this.http.get(url, { headers: this.headersToken });
  }

  public getSpecificExpense(groupId: number): any {
    const url = this.baseUrl + '/expense/' + groupId;
    return this.http.get(url, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public createExpense(expense: any): Observable<any> {
    const url = this.baseUrl + '/expense';
    return this.http.post<string>(url, expense, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public editExpenseById(expenseId: number, element: any): Observable<any> {
    const url = this.baseUrl + '/expense/' + expenseId;
    return this.http.put<string>(url, element, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public deleteExpenseById(expenseId: number): Observable<any> {
    const url = this.baseUrl + '/expense/' + expenseId;
    return this.http.delete<string>(url, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  // ** GROUP CONTROLLER ** //

  public getUserByGroup(groupId: number): any {
    const url = this.baseUrl + '/group/' + 'allUsers/' + groupId;
    return this.http.get(url, { headers: this.headersToken }); // this.baseUrl + url
  }

  public createGroup(group: any): Observable<any> {
    const url = this.baseUrl +  '/group';
    return this.http.post<string>(url, group, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public addUserToGroup(groupId: number, userName: string): Observable<any> {
    const url = this.baseUrl + '/group/' + groupId + '/' + userName;
    return this.http.put<string>(url, null, { headers: this.headersToken });
  }

  public updateGroupById(groupId: number, data: any): Observable<any> {
    const url = this.baseUrl + '/group/' + groupId;

    return this.http.put<string>(url, data, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public updateGroupByIdDelete(groupId: number, data: any): Observable<any> {
    const url = this.baseUrl +  '/group/' + groupId;
    return this.http.put<string>(url, data, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public deleteGroupById(groupId: number): Observable<any> {
    const url = this.baseUrl + '/group/' + groupId;
    return this.http.delete<string>(url, { headers: this.headersToken,observe: 'response', });
  }

  // ** USER CONTROLLER ** //

  public getAllGroupsOfUser(): Observable<any> {
    const url = this.baseUrl + '/user/' + 'allGroups/';
    return this.http.get<any>(url, { headers: this.headersToken });
  }

  public getUsersByGroup(groupName: string): any {
    const url = this.baseUrl + '/user/' + 'group/' + groupName;
    return this.http.get(url, { headers: this.headersToken });
  }

  public postLogin(login: any): Observable<any> {
    const url = this.baseUrl + '/user/login';

    return this.http.post<any>(url, login, { observe: 'response' })
      
    
    
  }

  // ** CALCULATE CONTROLLER ** //

  public getCalculatedDebtsForGroup(groupId: number): Observable<dataType[]> {
    const url =this.baseUrl +  '/calculate/debts/' + groupId;
    return this.http.get<dataType[]>(url, { headers: this.headersToken });
  }

  public getCredits(groupId: number): Observable<dataType[]> {
    const url =this.baseUrl +  '/calculate/overview/' + groupId;
    return this.http.get<dataType[]>(url, { headers: this.headersToken });
  }

  public finalizeCalculatedDebts(groupId: number): Observable<any> {
    const url = this.baseUrl + '/calculate/final/' + groupId;
    return this.http.put(url, null, {headers: this.headersToken, observe: 'response'});
  }

  //** LOGIN **/
  public loginUser(login: any): any {
    const url = this.baseUrl + 'user/login';
    return this.http.post(url, login);
  }

  public postRegister(register: any): Observable<any> {
    const url = this.baseUrl + '/user/register';
    return this.http.post<any>(url, register, { observe: 'response' });
  }

  public createUser(): Observable<any> {
    const url = this.baseUrl + '/user/register';
    return this.http.post<string>(url, null, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public editUserByIda(expenseId: number): Observable<any> {
    // by id?
    const url = this.baseUrl + '/user/' + expenseId;
    return this.http.put<string>(url, null, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public deleteUserByIda(expenseId: number): Observable<any> {
    // by id?
    const url = this.baseUrl + '/user/' + expenseId;
    return this.http.delete<string>(url, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  // public getUsersByGroup(groupName: string) {
  //   let url = '/user/' + 'group/' + groupName;
  //   return this.http.get(url);
  // }

  // ** DEBT CONTROLLER ** //
  public getAllDebts(): any {
    const url = this.baseUrl + '/debt';
    return this.http.get(url, { headers: this.headersToken });
  }

  public getAllDebtsForUser(): Observable<any> {
    const url = this.baseUrl + '/user/debt';
    return this.http.get<any>(url, { headers: this.headersToken });
  }

  public proposeShare(debtId: number, shareId: number): Observable<any> {
    const url = this.baseUrl + '/debt/propose';
    const body = { debtId: debtId, shareId: shareId };
    return this.http.put(url, body, { headers: this.headersToken });
  }

  public acceptShare(debtId: number): Observable<any> {
    const url = this.baseUrl + '/debt/accept/' + debtId;
    return this.http.put(url, null, {
      headers: this.headersToken,
      observe: 'response',
    });
  }

  public closePaidDebt(debtId: number): Observable<any> {
    const url =this.baseUrl +  '/debt/' + debtId + '/paid/' + true;
    return this.http.put(url, null, {headers: this.headersToken, observe: 'response'});
  }

  // ** SHARE CONTROLLER ** //
  public getAllShares(): Observable<any> {
    const url = this.baseUrl + '/share';
    return this.http.get<any>(url, { headers: this.headersToken });
  }
}
