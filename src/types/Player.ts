export interface Player {
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
  birthplace: string;
  height: string;
  weight?: string;
  image_path: string;
}

export interface Plan {
  name: string;
  request_limit: string;
}

export interface Sport {
  id: number;
  name: string;
  current: boolean;
}

export interface Meta {
  plans: Plan[];
  sports: Sport[];
}

export interface RootObject {
  data: Player;
  meta: Meta;
}
