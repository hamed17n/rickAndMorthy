import { get } from "utils/api";

export const getCharacters = (url: string) =>
  get(url)
    .then((response: any) => {
      return {
        list: response.results,
        nextPageUrl: response.info.next,
      };
    })
    .catch((error) => {
      throw new Error(error.meta.msg);
    });
