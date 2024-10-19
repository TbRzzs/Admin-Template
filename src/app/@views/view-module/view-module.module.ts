import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [ButtonsComponent, SidebarComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ButtonsComponent, SidebarComponent],
})
export class ViewModuleModule {}
