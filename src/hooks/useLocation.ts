import { useQuery } from "react-query";

import { LOCATION } from "constants/queryKey";
import { getLocation } from "requests";
import { LocationType } from "@types";

export const useLocation = (id: number) => {
  const { data, isLoading, isError, error } = useQuery<LocationType, Error>(
    LOCATION(id),
    () => getLocation(id),
    { enabled: !!id },
  );

  return { data, isLoading, isError, error };
};
