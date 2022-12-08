import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private notifier: NotifierService;

  @Input()
  showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  loading = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  //validate if email has content
  get email() {
    return this.loginForm.get('email');
  }

  constructor(
    private fb: FormBuilder,
    private readonly supabase: SupabaseService,
    notifier: NotifierService
  ) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
    this.email?.valueChanges.subscribe((value) => {
      // console.log(value);
    });
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const email = this.loginForm.value.email as string;
      const { error } = await this.supabase.signIn(email);
      if (error) throw error;
      this.showNotification(
        'success',
        'Revisa tu correo electronico, se te ha enviado un link magico'
      );
    } catch (error) {
      if (error instanceof Error) {
        this.showNotification('error', error.message);
      }
    } finally {
      this.loginForm.reset();
      this.loading = false;
    }
  }
}
