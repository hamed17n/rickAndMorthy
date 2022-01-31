export interface CharacterOriginType {
  name: string;
  url: string;
}

export interface CharacterLocationType {
  name: string;
  url: string;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOriginType;
  location: CharacterLocationType;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
