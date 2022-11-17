import { Component, OnInit } from '@angular/core';
import { IFooterLinks } from "../../../../shared/models";

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss']
})
export class FooterNavigationComponent implements OnInit {

  footerLinks: IFooterLinks[] = [
    {
      title: 'My bike',
      url: '[/]',
      icon: 'pedal_bike',
      customClass: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
