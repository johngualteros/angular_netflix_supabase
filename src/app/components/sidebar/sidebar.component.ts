import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SupabaseService } from 'src/app/services/supabase.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private readonly supabase: SupabaseService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  
  async signOut() {
    this.cookieService.delete('authSupabaseNetflix');
    await this.supabase.signOut()
  }
}
