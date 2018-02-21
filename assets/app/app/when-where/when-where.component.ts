import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Section } from '../../models/section';

@Component({
  selector: 'app-when-where',
  templateUrl: './when-where.component.html',
  styleUrls: ['../our-story/our-story.component.css']
})
export class WhenWhereComponent implements OnInit {
  sections: Section[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('Section/place')
          .subscribe(result => {
            this.sections = result.json();
          });
  }

}
