import { useQuery } from "react-query";

import { CHARACTER } from "constants/queryKey";
import { getCharacter } from "requests";
import { CharacterType } from "@types";

export const useCharacter = (id: number) => {
  const { data, isLoading } = useQuery<CharacterType, Error>(
    CHARACTER(id),
    () => getCharacter(id),
    { enabled: !!id },
  );

  return { data, isLoading };
};
