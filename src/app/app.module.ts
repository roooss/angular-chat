import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { ClanComponent } from './components/clan/clan.component';
import { WarLogComponent } from './components/war-log/war-log.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ChatScreenComponent,
    ClanComponent,
    WarLogComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
