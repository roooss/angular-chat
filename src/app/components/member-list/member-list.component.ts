import { Component, OnInit, Input } from '@angular/core';

import { MemberList, League, IconUrls } from '../../interfaces/ClanDetails';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})

export class MemberListComponent implements OnInit {

    @Input() memberList: MemberList[];
    
    constructor() { }

    
    ngOnInit() {
    
    }
}
