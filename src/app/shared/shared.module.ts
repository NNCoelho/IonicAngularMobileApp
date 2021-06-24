import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  exports: [CommonModule, ReactiveFormsModule, IonicModule],
})
export class SharedModule {}
