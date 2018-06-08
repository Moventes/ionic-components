import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutocompleteComponent } from '../../../componentes/src/components/autocomplete/autocomplete';

export interface Item {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {
  @ViewChild('autocomplete-1') autocomplete1: AutocompleteComponent<Item>;
  @ViewChild('autocomplete-2') autocomplete2: AutocompleteComponent<Item>;
  list: Item[] = [
    {
      id: 1,
      fname: 'item1',
      lname: 'tateti'
    },
    {
      id: 2,
      fname: 'item2',
      lname: 'tetito'
    },
    {
      id: 3,
      fname: 'item3',
      lname: 'titotu'
    }
  ];
  itemCustom: Item;
  itemNoCustom: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  displayFunction(item: Item) {
    const html = `<h1>${item.id || 'N.A.'}</h1> <h2>${item.fname || ''} ${item.lname || ''}</h2>`;
    return html;
  }

  filterFunction(item: Item, searchTerm: string) {
    return (item.fname.includes(searchTerm) || item.lname.includes(searchTerm));
  }

  factoryFunction(string: string): Item {
    const newItem = {
      id: null,
      fname: string,
      lname: null
    };
    return newItem;
  }
}
