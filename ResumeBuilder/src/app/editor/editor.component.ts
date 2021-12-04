import { Component, OnInit } from '@angular/core';
interface menuModal {
  name: string;
  icon: string;

}
interface activeMenuModal {
  isLeft: boolean;
  isActive: boolean;
  index: number;
}
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
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
    index: null, isActive: null, isLeft: null
  }
  constructor() { }

  ngOnInit(): void {
  }
  onClickIconRight(index: number) {
    if (this.activeMenu.index === index && this.activeMenu.isActive && !this.activeMenu.isLeft) {
      this.activeMenu = {
        index: null, isActive: null, isLeft: null
      }

    } else {
      this.activeMenu = {
        index: index, isActive: true, isLeft: false
      }
    }

  }
  onClickIconLeft(index: number) {
    if (this.activeMenu.index === index && this.activeMenu.isActive && this.activeMenu.isLeft) {
      this.activeMenu = {
        index: null, isActive: null, isLeft: null
      }

    } else {
      this.activeMenu = {
        index: index, isActive: true, isLeft: true
      }
    }

  }
  onClickContainer() {
    this.activeMenu = {
      index: null, isActive: null, isLeft: null
    }
  }
}
