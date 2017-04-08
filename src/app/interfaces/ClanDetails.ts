export interface Location {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
}

export interface BadgeUrls {
    small: string;
    large: string;
    medium: string;
}

export interface IconUrls {
    small: string;
    tiny: string;
    medium: string;
}

export interface League {
    id: number;
    name: string;
    iconUrls: IconUrls;
}

export interface MemberList {
    tag: string;
    name: string;
    role: string;
    expLevel: number;
    league: League;
    trophies: number;
    clanRank: number;
    previousClanRank: number;
    donations: number;
    donationsReceived: number;
}

export interface ClanDetails {
    tag: string;
    name: string;
    type: string;
    description: string;
    location: Location;
    badgeUrls: BadgeUrls;
    clanLevel: number;
    clanPoints: number;
    requiredTrophies: number;
    warFrequency: string;
    warWinStreak: number;
    warWins: number;
    warTies: number;
    warLosses: number;
    isWarLogPublic: boolean;
    members: number;
    memberList: MemberList[];
}
