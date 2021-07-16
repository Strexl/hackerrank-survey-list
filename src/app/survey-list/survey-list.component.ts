import { Component, OnInit, Input } from '@angular/core';
import {Survey} from "../types/Survey";
@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  constructor() { }
  @Input() surveyList: Survey[];
  ngOnInit(): void {
  }

}
