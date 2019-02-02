import {Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @ViewChild(MatMenuTrigger) signout: MatMenuTrigger;


  constructor(private element: ElementRef) {


  }

  ngOnInit() {
  }

}
