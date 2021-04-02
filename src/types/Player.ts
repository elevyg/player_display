export interface Data2 {
  id: number;
  legacy_id: number;
  name: string;
  short_code: string;
  twitter?: string;
  country_id: number;
  national_team: boolean;
  founded: number;
  logo_path: string;
  venue_id: number;
  current_season_id: number;
  is_placeholder: boolean;
}

export interface Team {
  data: Data2;
}

export interface Data {
  player_id: number;
  team_id: number;
  country_id: number;
  position_id: number;
  common_name: string;
  display_name: string;
  fullname: string;
  firstname: string;
  lastname: string;
  nationality: string;
  birthdate: string;
  birthcountry: string;
  birthplace?: string;
  height: string;
  weight: string;
  image_path: string;
  team: Team;
}

export interface PlayerDetail {
  data: Data;
}

export interface Player {
  position: number;
  season_id: number;
  player_id: number;
  team_id: number;
  stage_id?: string;
  goals: number;
  penalty_goals: number;
  type: string;
  player: PlayerDetail;
}
