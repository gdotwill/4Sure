import { Component } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { EmitType } from '@syncfusion/ej2-base';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public data: { [key: string]: Object; }[] = [
      { id: 1, name: 'Australia'},
      { id: 2, name: 'Benin'},
      { id: 3, name: 'Canada'},
      { id: 4, name: 'Denmark'},
      { id: 5, name: 'England'},
      { id: 6, name: 'Finland'},
      { id: 7, name: 'Granada'},
      { id: 8, name: 'Honduras'},
    ];

    public fields :Object = { dataSource: this.data, value: 'id', text: 'name'};
    public height: string = '250px';
    public watermark: string = 'Select a country';
    public filterPlaceholder: string = 'Search countries ...';
    public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
        let query: Query = new Query();
        query = (e.text !== '') ? query.where('name', 'startswith', e.text, true) : query;
        e.updateData(this.data, query);
    }

    public treeSettings: Object = { autoCheck: true }

}
