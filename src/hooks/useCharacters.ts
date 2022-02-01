import { useInfiniteQuery } from "react-query";

import { CHARACTERS } from "constants/queryKey";
import { getCharacters } from "requests";
import { FIRST_CHARACTERS_URL } from "constants/apiRoutes";
import { CharacterType } from "@types";

interface CharacterRequestResult {
  list: CharacterType[];
  nextPageUrl: string;
}

export const useCharacters = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery<CharacterRequestResult, Error>(
    CHARACTERS,
    ({ pageParam = FIRST_CHARACTERS_URL }) => getCharacters(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPageUrl,
    },
  );

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isError,
    error,
  };
};
