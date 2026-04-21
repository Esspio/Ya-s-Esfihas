import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../../components/topbar/topbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Footer } from '../../components/footer/footer';
import { Toast } from '../../components/toast/toast';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, Topbar, Sidebar, Footer, Toast],
  templateUrl: './app-layout.html',
})
export class AppLayout {
  isDesktop = window.innerWidth >= 768;

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
  }
}
