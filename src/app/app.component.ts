import { Component } from '@angular/core';
import { from, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-test';
  observableData$  = of(require('./MOCK_DATA.json') )
  originalData : any
  filteredData$ : any
  ngOnInit(){
    this.observableData$.subscribe(data => {
      this.originalData = data
    })
  }
  filterData(string){
    let val = string.toLowerCase()
    this.filteredData$ = this.originalData.filter(function(d){
      return d.first_name.toLowerCase().indexOf(val) !== -1 || !val
    })
  }
}
