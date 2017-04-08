import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClanComponent } from './components/clan/clan.component'; 
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component'; 
import { PlayerInfoComponent } from './components/player-info/player-info.component'; 
import { WarLogComponent } from './components/war-log/war-log.component'; 

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile/:id', component: ProfileComponent },    
    { path: 'chat', component: ChatScreenComponent  },
    { path: 'clan', component: ClanComponent  },
    { path: 'player-info', component: PlayerInfoComponent  },
    { path: 'war-log', component: WarLogComponent  },
    {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
