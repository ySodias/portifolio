import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Img } from '../model/Img';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  listImg: Img[]

  constructor(
    private homeService: HomeService,
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
    this.listarImg()
  }
  listarImg(){
    this.homeService.getLitsImgDbJson().subscribe((r: Img[])=>{
      this.listImg = r;
      console.log(this.listImg)
    })
  }
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
