import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import {AccordionModule} from 'primeng/components/accordion/accordion';
import {ProgressBarModule} from 'primeng/primeng';

import { CocService } from '../../services/coc.service';

import { League, IconUrls, BadgeUrls } from '../../interfaces/ClanDetails';
import { PlayerDetails, Clan, Achievement, PlayerAchievement, Troop, Hero, Spell } from '../../interfaces/PlayerDetails';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
    
    private playerTag: string = "";
    private playerDetails: PlayerDetails;
    private playerAchievements: PlayerAchievement[];
    
    constructor(private route: ActivatedRoute, private cocService: CocService, private sanitizer: DomSanitizer) {
	this.playerAchievements = [{ name: "", stars: 0, value: 0, target: 0, info: "", completionInfo: "", percent: 0 }]; 
	this.playerDetails = {
	    tag: "",
	    name: "",
	    townHallLevel: 0,
	    expLevel: 0,
	    trophies: 0,
	    bestTrophies: 0,
	    warStars: 0,
	    attackWins: 0,
	    defenseWins: 0,
	    role: "",
	    donations: 0,
	    donationsReceived: 0,
	    clan: {
		tag: "",
		name: "",
		clanLevel: 0,
		badgeUrls: { small: "", large: "", medium: "" }
	    },
	    league: {
		id: 0,
		name: "",
		iconUrls: { small: "", tiny: "", medium: "" }
	    },
	    achievements: [{ name: "", stars: 0, value: 0, target: 0, info: "", completionInfo: "" }],
	    troops: [{ name: "", level: 0, maxLevel: 0 }],
	    heroes: [{ name: "", level: 0, maxLevel: 0 }],
	    spells: [{ name: "", level: 0, maxLevel: 0 }]
	};

    }

    getPlayerInformation(playerTag: string) {
	this.cocService.getPlayerDetails(encodeURIComponent(playerTag)).subscribe(
	    details => {
		this.playerDetails = details
	

	    this.playerAchievements = [];

	    for (var item of this.playerDetails.achievements) {
		let result = Math.round((item.value / item.target) * 100);
	    
		if (isNaN(result)|| result > 100) {
		    result = 100;
		}

		console.log(result);

		let tempStyle =  this.sanitizer.bypassSecurityTrustStyle("width: " + result + "%");

		this.playerAchievements.push({ 
		    name: item.name, 
		    stars: item.stars, 
		    value: item.value, 
		    target: item.target, 
		    info: item.info, 
		    completionInfo: item.completionInfo, 
		    percent: result});
		}

	    console.log(this.playerAchievements);
	});
    }

    ngOnInit() {
	this.route.params
	    .subscribe((params: Params) => this.playerTag = params['id']);

	this.getPlayerInformation(this.playerTag);

	console.log(this.playerTag);
    }

}
