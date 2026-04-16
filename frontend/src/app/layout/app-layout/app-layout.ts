import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../component/topbar/topbar';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, Topbar, Sidebar, Footer],
  templateUrl: './app-layout.html',
})
export class AppLayout {
  isDesktop = window.innerWidth >= 768;

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
  }
}
