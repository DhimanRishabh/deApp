import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSuffix,
  MatTabsModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {SideNavUserAvatarComponent} from './header/side-menu/side-nav-user-avatar/side-nav-user-avatar.component';
import { BodyComponent } from './body/body.component';
import { ImagesListComponent } from './body/images-list/images-list.component';
import { ImageComponent } from './body/images-list/image/image.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideNavUserAvatarComponent, BodyComponent, ImagesListComponent, ImageComponent],
  imports: [BrowserModule, MatIconModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatCardModule,MatInputModule,MatDividerModule,MatTabsModule],
  exports: [HeaderComponent, FooterComponent, SideNavUserAvatarComponent,BodyComponent]
})

export class CoreModule {
}
