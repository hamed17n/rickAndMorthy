import { get } from "utils/api";
import { host } from "utils/config";
import { CHARACTER, LOCATION, EPISODES } from "constants/apiRoutes";

export const getCharacters = (url: string) =>
  get(url)
    .then((response: any) => {
      return {
        list: response.results,
        nextPageUrl: response.info.next.replace(host, ""),
      };
    })
    .catch((response) => {
      throw new Error(response.error);
    });

export const getCharacter = (id: number) =>
  get(CHARACTER(id))
    .then((response: any) => {
      return response;
    })
    .catch((response) => {
      throw new Error(response.error);
    });

export const getLocation = (id: number) =>
  get(LOCATION(id))
    .then((response: any) => {
      return response;
    })
    .catch((response) => {
      throw new Error(response.error);
    });

export const getEpisodes = (list: string) =>
  get(EPISODES(list))
    .then((response: any) => {
      return Array.isArray(response) ? response : [response];
    })
    .catch((response) => {
      throw new Error(response.error);
    });
