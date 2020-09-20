import { Component } from '@angular/core';
import { environment } from '../environments/environment'
import { SpaceService } from './space/space.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewspaceX';
  constructor(private _spaceService: SpaceService) { }
  launchYear: any = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  baseUrl = environment.url
  mySpace: any = []
  mydata
  launchSuccess = ''
  landSuccess = ''
  yearFilter = ''


  showYear(year) {
    this.yearFilter = year

    this.serviceCall()
  }



  processLaunch(val) {
    console.log(val);
    if (val == 1) {
      this.launchSuccess = 'true'
    } else {
      this.launchSuccess = 'false'
    }

    this.serviceCall()
  }

  processLand(val) {
    console.log(val);
    if (val == 1) {
      this.landSuccess = 'true'
    } else {
      this.landSuccess = 'false'
    }

    this.serviceCall()
  }
  serviceCall() {
    this.mydata = this.baseUrl
    if (this.launchSuccess != '') {
      this.mydata += '&launch_success=' + this.launchSuccess
    }

    if (this.landSuccess != '') {
      this.mydata += '&land_success=' + this.landSuccess
    }

    if (this.yearFilter != '') {
      this.mydata += '&launch_year=' + this.yearFilter
    }


    this._spaceService.getData(this.mydata).subscribe((data) => {
      this.mySpace = data
    })
  }

}
