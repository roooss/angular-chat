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
