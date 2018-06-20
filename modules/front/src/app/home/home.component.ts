import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  roles: any[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Application',
        icon: 'fa fa-fw fa-file-o',
        items: [
          {label: 'Tasks'},
          {label: 'Departments'},
          {label: 'Away Time Logs'},
          {label: 'Work logs'},
          {label: 'Away Time Reasons'},
          {label: 'Executables'},
          {label: 'Clients'},
          {label: 'Designations'},
          {label: 'Projects'},
          {label: 'Sub Projects'}]
      },

      {
        label: 'Administration',
        icon: 'fa fa-fw fa-edit',
        items: [
          {label: 'Users'},
          {label: 'Access Groups'},
          {label: 'Roles'},
          {label: 'Dynamic Attributes'},
          {label: 'Away Time Reasons'},
          {label: 'User Sessions'},
          {label: 'Locks'},
          {label: 'External Files'},
          {label: 'Scheduled Tasks'},
          {label: 'Restore Deleted Entities'},
          {label: 'Entity Inspector'},
          {label: 'Application Properties'},
          {label: 'JMX console'},
          {label: 'Entity Log'},
          {label: 'User Session Log'},
          {label: 'Email History'},
          {label: 'Server Log'},
          {label: 'Screen Profiler'},
          {label: 'Performance Statistics'}
        ]
      },
      {
        label: 'Help',
        icon: 'fa fa-fw fa-file-o',
        items: [
          {label: 'About'},
          {label: 'Data Model'},
          {label: 'Settings'},
          {label: 'Application Log'},
          {label: 'History'}]
      },
      {
        label: 'Dashboards',
        icon: 'fa fa-fw fa-gear',
        items: [
          {label: 'Top 10 Executables(count)'},
          {label: 'Top 10 Executables(Time)'},
          {label: 'Hourly Usage'}]
      }
    ];
    this.roles = [];
    this.roles = [{role: 'Administration', value: 'Administration'}, {role: 'Testing', value: 'Testing'}];
  }

}
