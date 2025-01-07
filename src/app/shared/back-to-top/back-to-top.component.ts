import { Component, HostListener } from '@angular/core';
import { constants } from '../../utils/constants';

@Component({
  selector: 'app-back-to-top',
  standalone: false,
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  private scrollHeight: number = constants.scrollHeight;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollButton = document.querySelector('.top-icon') as HTMLElement
    if (document.body.scrollTop > this.scrollHeight || document.documentElement.scrollTop > this.scrollHeight) {
      scrollButton.style.display = constants.showTopButton
    } else {
      scrollButton.style.display = constants.hideTopButton
    }
  }

  scrollToTop(): void {
    window.scrollTo({ 
      top: constants.topValue, 
      behavior: 'smooth' 
    })
  }
}
