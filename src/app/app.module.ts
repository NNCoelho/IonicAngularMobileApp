import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './auth/login.page';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './home/home.page';
import { ProfilePage } from './profile/profile.page';
import { SettingsPage } from './settings/settings.page';
@NgModule({
  declarations: [AppComponent, TabsPage, LoginPage, HomePage, ProfilePage, SettingsPage],
  imports: [CoreModule, SharedModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
