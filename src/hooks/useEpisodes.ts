import { useQuery } from "react-query";

import { EPISODES } from "constants/queryKey";
import { getEpisodes } from "requests";
import { EpisodeType } from "@types";

export const useEpisodes = (list: string) => {
  const { data, isLoading, isError, error } = useQuery<EpisodeType[], Error>(
    EPISODES(list),
    () => getEpisodes(list),
    { enabled: !!list },
  );

  return { data, isLoading, isError, error };
};
