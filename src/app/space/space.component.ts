import { Component, OnInit , Input} from '@angular/core';
import {SpaceService} from '../space/space.service';
import {environment} from '../../environments/environment'
@Component({
 selector: 'app-space',
 templateUrl: './space.component.html',
 styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
@Input() Space: any =[];
 constructor(private _spaceService: SpaceService) { }
 
 ngOnInit() {
   this._spaceService.getData(environment.url).subscribe((data)=>{
    this.Space = data;
   });
 }
 
}
