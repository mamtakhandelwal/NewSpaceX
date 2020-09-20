import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
 providedIn: 'root'
})
export class SpaceService {
 
 constructor(private httpClient: HttpClient) { }
 
 getData(url){
   return this.httpClient.get(url)
 }
}
 


