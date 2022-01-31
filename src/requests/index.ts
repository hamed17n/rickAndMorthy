import { get } from "utils/api";
import { host } from "utils/config";

export const getCharacters = (url: string) =>
  get(url)
    .then((response: any) => {
      return {
        list: response.results,
        nextPageUrl: response.info.next.replace(host, ""),
      };
    })
    .catch((error) => {
      throw new Error(error.meta.msg);
    });
