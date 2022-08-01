import { Component, OnInit } from '@angular/core';
import { Option } from '../option.model';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor() { }

  optionList: Option[] = [
    { option1: "abc", option2: "def", option3: "ghi"},
    { option1: "jkl", option2: "mnñ", option3: "opq"},
    { option1: "rst", option2: "uvw", option3: "xyz"},
    { option1: "abc", option2: "def", option3: "ghi"},
    { option1: "jkl", option2: "mnñ", option3: "opq"},
    { option1: "rst", option2: "uvw", option3: "xyz"},
    { option1: "abc", option2: "def", option3: "ghi"}
  ]

  ngOnInit(): void {
  }

}
