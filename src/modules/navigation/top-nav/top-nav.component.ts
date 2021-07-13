import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() tabName: string = '';
  active : boolean = true;
  
  constructor(private _route: ActivatedRoute) { 
    // this.topNavActive = this._route.snapshot.paramMap.get('') || '';
  }
  
  ngOnInit(): void {
    this.tabName === 'player-list' ? this.active = true: this.active = false;
  }

}
