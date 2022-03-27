import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  configList: any = [
    {
      id: 1,
      dataSource: 'Third Party',
      confidenceLevel: '90%',
      enable: true,
    },
    {
      id: 2,
      dataSource: 'Agency A',
      confidenceLevel: '85%',
      enable: true,
    },
    {
      id: 3,
      dataSource: 'Scrapper Data',
      confidenceLevel: '20%',
      enable: true,
    },
  ];

  ngOnInit(): void {}

  saveConfig() {
    console.log('save configuration');
    alert('Configuration Saved Successfully');
  }
}
