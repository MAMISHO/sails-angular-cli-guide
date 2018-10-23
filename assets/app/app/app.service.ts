import { Injectable } from "@angular/core";
// import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { User } from "./user.model";

@Injectable()
export class AppService {
    private resourceUrl = 'users';
    constructor(private http: HttpClient) {   
    }

    findAll(req?: any): Observable<User[]> {
        return this.http.get<Array<User>>(this.resourceUrl);
    }
    
    create(user: User): Observable<User> {
        return this.http.post<User>(this.resourceUrl, user);
    }

}