import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should have a login form with email and password fields', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  // it('should have a login form with email and password fields required', () => {
  //   const email = component.loginForm.get('email');
  //   const password = component.loginForm.get('password');

  //   email?.setValue('');
  //   password?.setValue('');

  //   expect(email?.valid).toBeFalsy();
  //   expect(password?.valid).toBeFalsy();
  // });

  // it('should have a login form with email and password fields with valid email', () => {
  //   const email = component.loginForm.get('email');

  //   email?.setValue('test');

  //   expect(email?.valid).toBeFalsy();
  // });

  // it('should have a login form with email and password fields with valid password', () => {
  //   const password = component.loginForm.get('password');

  //   password?.setValue('test');

  //   expect(password?.valid).toBeFalsy();
  // });

  // it('should have a login form with password have more of 6 characters', () => {
  //   const password = component.loginForm.get('password');

  //   pzassword?.setValue('123456');

  //   expect(password?.valid).toBeTruthy();
  // })
});
