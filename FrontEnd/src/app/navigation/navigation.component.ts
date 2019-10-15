import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserMaster} from '../app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  usuarioLog : string;
  message: string;
  editMessage: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private usuarioM: UserMaster) {
     this.usuarioLog = usuarioM.getUsuario();
  }

  ngOnInit() {
    this.usuarioM.customMessage.subscribe(msg => this.message = msg);
  }

  isMenuOpen=true;
  contentMargin = 240;

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  onToolbarMenuToggle(){
    console.log('On toolbar toggled',this.isMenuOpen);
    this.isMenuOpen=!this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 5;
    } else {
      this.contentMargin = 240;
    }
  }

  changeMessage() {
    this.usuarioM.changeMessage(this.editMessage);
  }

}
