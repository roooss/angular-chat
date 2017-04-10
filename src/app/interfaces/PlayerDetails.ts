import {BadgeUrls, IconUrls, League } from './ClanDetails';

export interface Clan {
    tag: string;
    name: string;
    clanLevel: number;
    badgeUrls: BadgeUrls;
}

export interface Achievement {
    name: string;
    stars: number;
    value: number;
    target: number;
    info: string;
    completionInfo: string;
}

export interface PlayerAchievement {
    name: string;
    stars: number;
    value: number;
    target: number;
    info: string;
    completionInfo: string;
    percent: number; 
}

export interface Troop {
    name: string;
    level: number;
    maxLevel: number;
}

export interface Hero {
    name: string;
    level: number;
    maxLevel: number;
}

export interface Spell {
    name: string;
    level: number;
    maxLevel: number;
}

export interface PlayerDetails {
    tag: string;
    name: string;
    townHallLevel: number;
    expLevel: number;
    trophies: number;
    bestTrophies: number;
    warStars: number;
    attackWins: number;
    defenseWins: number;
    role: string;
    donations: number;
    donationsReceived: number;
    clan: Clan;
    league: League;
    achievements: Achievement[];
    troops: Troop[];
    heroes: Hero[];
    spells: Spell[];
}
