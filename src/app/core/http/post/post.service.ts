import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiPostResponse } from "../../../shared";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<ApiPostResponse> {
    return this.http.get<ApiPostResponse>(environment.apiEndpoint + '/api/posts');
  }

  getPostsFromUri(uri?: string | null) {
    console.log(uri);
    return uri ? this.http.get<ApiPostResponse>(environment.apiEndpoint + uri) : null;
  }
}
