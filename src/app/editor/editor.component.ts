import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
interface menuModal {
  name: string;
  icon: string;
}
interface activeMenuModal {
  isLeft: boolean;
  isActive: boolean;
  index: number;
  activeAnimation: string;

}
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [
    trigger('openPanel', [
      state('inLeft', style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      state('inRight', style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      transition('*=>inLeft', [
        animate(200, style({
          'opacity': '0',
          'transform': 'translateX(-60px)'
        })), animate(200)
      ]),
      transition('inLeft=>*', [
        animate(200, keyframes([
          style({
            'opacity': '1',
            'transform': 'translateX(0)',
            'offset': '0'
          }), style({
            'opacity': '0.8',
            'transform': 'translateX(-40px)',
            'offset': '0.3'

          }), style({
            'opacity': '0.4',
            'transform': 'translateX(-80px)',
            'offset': '0.7'

          }), style({
            'opacity': '0',
            'transform': 'translateX(-60px)',
            'offset': '1'

          })
        ])),


      ]),
      transition('inRight=>*', [
        animate(300, keyframes([
          style({
            'opacity': '1',
            'transform': 'translateX(0)',
            'offset': 0
          }), style({
            'opacity': '0.8',
            'transform': 'translateX(10px)',
            'offset': 0.3
          }), style({
            'opacity': '0.4',
            'transform': 'translateX(15px)',
            'offset': 0.5
          }), style({
            'opacity': '0',
            'transform': 'translateX(20px)',
            'offset': 1
          })
        ]))
      ]),
      transition('*=>inRight', [
        animate(300, style({
          'transform': 'translateX(20px)',
          'opacity': '0'
        })), animate(300)

      ])
    ]
    )

  ]
})
export class EditorComponent implements OnInit {
  leftMenuList: menuModal[] = [{ name: 'Intro', icon: "fa-user" },
  { name: "Social", icon: "fa-users" },
  { name: "Skills", icon: "fa-wrench" }, {
    name: "Company", icon: "fa-briefcase"
  }, {
    name: "Education", icon: "fa-university"
  }];
  rightMenuList: menuModal[] = [
    {
      name: "Template", icon: "fa-clone"
    },
    {
      name: "Theme", icon: "fa-palette"
    }, {
      name: "Download", icon: "fa-download"
    }, {
      name: "Zoom Out", icon: "fa-search-plus"

    }, {
      name: "Zoom in", icon: "fa-search-minus"

    }]
  activeMenu: activeMenuModal = {
    index: null, isActive: null, isLeft: null, activeAnimation: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  onClickIconRight(index: number) {
    if (this.activeMenu.index === index && this.activeMenu.isActive && !this.activeMenu.isLeft) {
      this.activeMenu = {
        index: null, isActive: null, isLeft: null, activeAnimation: ''
      }

    } else {
      this.activeMenu = {
        index: index, isActive: true, isLeft: false, activeAnimation: 'inRight'
      }
    }

  }
  onClickIconLeft(index: number) {
    if (this.activeMenu.index === index && this.activeMenu.isActive && this.activeMenu.isLeft) {
      this.activeMenu = {
        index: null, isActive: null, isLeft: null, activeAnimation: ''
      }

    } else {
      this.activeMenu = {
        index: index, isActive: true, isLeft: true, activeAnimation: 'inLeft'
      }
    }

  }
  onClickContainer() {
    this.activeMenu = {
      index: null, isActive: null, isLeft: null, activeAnimation: ''
    }
  }
}
