import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { CocService } from '../../services/coc.service';
import { ClashService } from '../../services/clash.service';

import { ClanDetails, MemberList, Location, League, BadgeUrls, IconUrls } from '../../interfaces/ClanDetails';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
    styleUrls: ['./clan.component.scss'],
    providers: [ CocService ]
})
export class ClanComponent implements OnInit {
    public details: ClanDetails;
    private errorMessage: string;

    constructor(private cocService: CocService) {
	this.details = {
	    tag: '',
	    name: '',
	    type: '',
	    description: '',
	    location: {
		id: 0,
		name: '',
		isCountry: false,
		countryCode: ''
	    },
	    badgeUrls: {
		small: '',
		large: '',
		medium: ''
	    },
	    clanLevel: 0,
	    clanPoints: 0,
	    requiredTrophies: 0,
	    warFrequency: '',
	    warWinStreak: 0,
	    warWins: 0,
	    warTies: 0,
	    warLosses: 0,
	    isWarLogPublic: false,
	    members: 0,
	    memberList: [{
		tag: '',
		name: '',
		role: '',
		expLevel: 0,
		league: {
		    id: 0,
		    name: '',
		    iconUrls: {
			small: '',
			tiny: '',
			medium: ''
		    }
		},
		trophies: 0,
		clanRank: 0,
		previousClanRank: 0,
		donations: 0,
		donationsReceived: 0
	    }]
	};
    }

    getClanDetails() {
	this.cocService.getClanDetails().subscribe(
	    details => {
		this.details = details;
		console.log(this.details.name);
	    },
	    error => this.errorMessage = <any> error
	);

	console.log(this.details.name);
    }

    ngOnInit() {
	this.getClanDetails();
    }

}
