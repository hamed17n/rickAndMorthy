export const FIRST_CHARACTERS_URL = "/character";
export const CHARACTER = (id: number): string => `/character/${id}`;
export const LOCATION = (id: number | string): string => `/location/${id}`;
export const EPISODES = (list: string): string => `/episode/${list}`;
