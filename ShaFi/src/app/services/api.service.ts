import { dataType } from './../abbrechnung/abbrechnung.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  token = sessionStorage.getItem("Token")
  headersToken= new HttpHeaders()
  
  .set('Authorization', 'Bearer ' + this.token)
  //.set('Access-Control-Allow-Origin', 'POST');



  constructor(private http: HttpClient) {}


  // ** EXPENSE CONTROLLER ** //

  public getAllExpense(): any {
    const url = '/expense';
    return this.http.get(url ,{headers: this.headersToken} );
  }

  public getSpecificExpense(groupId: number): any {
    const url = '/expense/' + groupId;
    return this.http.get(url, {headers: this.headersToken, observe: 'response'});
  }

  public createExpense(): Observable<any> {
    const url = '/expense/';
    return this.http.post<string>(url, null, {headers: this.headersToken, observe: 'response'});
  }

  public editExpenseById(expenseId: number, element: object): Observable<any> {
    const url = '/expense/' + expenseId;
    //console.log(element)
    return this.http.put<string>(url, element, {headers: this.headersToken, observe: 'response'});
  }

  public deleteExpenseById(expenseId: number): Observable<any> {
    const url = '/expense/' + expenseId;
    return this.http.delete<string>(url, {headers: this.headersToken, observe: 'response'});
  }

  // ** GROUP CONTROLLER ** //

  public getUserByGroup(groupId: number) {
    const url = '/group/' + 'allUsers/' + groupId;
    return this.http.get(url ,{headers: this.headersToken} ); // this.baseUrl + url
  }


  public createGroup(group: object): Observable<any> {
    let url = '/group';
    return this.http.post<string>(url, group ,{headers: this.headersToken, observe: 'response'} );
  }

  public addUserToGroup(groupId: number, userName: string): Observable<any> {
    const url = '/group/' + groupId + '/' + userName;
    return this.http.put<string>(url, null ,{headers: this.headersToken} );

  }


  public updateGroupById(groupId: number, data: Object): Observable<any> {
    let url = '/group/' + groupId;
    //console.log(data)
    return this.http.put<string>(url, data ,{headers: this.headersToken,  observe: 'response'});

  }

  public updateGroupByIdDelete(groupId: number, data: Object): Observable<any> {
    let url = '/group/' + groupId;
    return this.http.put<string>(url, data ,{headers: this.headersToken,  observe: 'response'});

  }

  public deleteGroupById(groupId: number): Observable<any> {
    const url = '/group/' + groupId;
    return this.http.delete<string>(url ,{headers: this.headersToken} );
  }

  // ** USER CONTROLLER ** //

  public getAllGroupsOfUser() {
    const url = '/user/' + 'allGroups/';
    return this.http.get(url ,{headers: this.headersToken} );
  }

  public getUsersByGroup(groupName: string) {
    const url = '/user/' + 'group/' + groupName;
    return this.http.get(url, {headers: this.headersToken} );
  }

  public postLogin(login: Object): Observable<any> {
    const url =  '/user/login';
    //console.log(login)
    
      return this.http.post<any>(url, login, {observe: 'response'} );

  }

  // ** CALCULATE CONTROLLER ** //

  public getCalculatedDebtsForGroup(groupId: number): Observable<dataType[]> {
    const url = '/calculate/debts/'  + groupId;
    return this.http.get<dataType[]>(url, {headers: this.headersToken});
  }

  public getCredits(groupId: number): Observable<dataType[]> {
    const url = '/calculate/overview/'  + groupId;
    return this.http.get<dataType[]>(url, {headers: this.headersToken});
  }

  public finalizeCalculatedDebts(groupId: number): Observable<any> {
    const url = '/calculate/final/' + groupId;
    return this.http.put(url, null, {headers: this.headersToken, observe: 'response'});
  }


  //** LOGIN **/
  public loginUser(login: object) {
    const url = 'user/login';
    return this.http.post(url, login)
  }
 
  public postRegister(register: Object){
    const url = '/user/register';
    return this.http.post<any>(url, register, {observe: 'response'} );
  }

  public createUser(): Observable<any> {
    const url = '/user/register';
    return this.http.post<string>(url, null, {headers: this.headersToken, observe: 'response'});
  }

  public editUserByIda(expenseId: number): Observable<any> { // by id?
    const url = '/user/' + expenseId;
    return this.http.put<string>(url, null, {headers: this.headersToken, observe: 'response'});
  }

  public deleteUserByIda(expenseId: number): Observable<any> { // by id?
    const url = '/user/' + expenseId;
    return this.http.delete<string>(url, {headers: this.headersToken, observe: 'response'});
  }

  // public getUsersByGroup(groupName: string) {
  //   let url = '/user/' + 'group/' + groupName;
  //   return this.http.get(url);
  // }

    // ** DEBT CONTROLLER ** //
  public getAllDebts(): Observable<any> {
    const url = '/debt';
    return this.http.get<any>(url, {headers: this.headersToken});
  }

  public getAllDebtsForUser(): Observable<any> {
    const url = '/user/debt';
    return this.http.get<any>(url, {headers: this.headersToken});
  }

  public proposeShare(debtId: number, shareId: number): Observable<any> {
    const url = 'debt/propose';
    const body = {"debtId": debtId, "shareId": shareId};
    //console.log(body);
    return this.http.put(url, body, {headers: this.headersToken});
  }

  public acceptShare(debtId: number): Observable<any> {
    //console.log(debtId);
    const url = 'debt/accept/' + debtId;
    return this.http.put(url, null, {headers: this.headersToken, observe: 'response'});
  }

  // ** SHARE CONTROLLER ** //
  public getAllShares(): Observable<any> {
    const url = '/share';
    return this.http.get<any>(url, {headers: this.headersToken});
  }

}
