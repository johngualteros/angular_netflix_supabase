import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { SupabaseService } from './services/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_netflix_supabase';

  session = this.supabase.session;

  cookieAuthentication = '';

  private notifier: NotifierService;

  constructor(
    private readonly supabase: SupabaseService,
    notifier: NotifierService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.supabase.authChanges((_, session) => {
      this.session = session;
      this.setCookie();
      this.router.navigate([this.session ? 'home' : 'login']);
    });

    this.cookieAuthentication = this.cookieService.get('authSupabaseNetflix');
    this.showNotification('default', 'Bienvenido a Angular Netflix Supabase!');
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  setCookie(): void{
    if(this.session){
      this.cookieService.set('authSupabaseNetflix', this.session.access_token);
    }
  }

}
