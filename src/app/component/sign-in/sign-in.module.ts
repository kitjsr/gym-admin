import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
  ]
})
export class SignInModule { }
