import React from "react";
import { useParams } from "react-router-dom";

import { useCharacter } from "hooks";
import { PageWrapper, LoadingWrapper, ErrorWrapper } from "components/common";
import { Header } from "components/characterPage/header";
import { CharacterDetail } from "components/characterPage/CharacterDetail";
import { LocationDetail } from "components/characterPage/LocationDetail";
import { EpisodesDetail } from "components/characterPage/EpisodesDetail";
import { host } from "utils/config";
import { LOCATION, EPISODES } from "constants/apiRoutes";
import { GENERAL_ERROR } from "constants/errors";

export const CharacterPage = (): JSX.Element => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useCharacter(Number(id) || 0);

  if (isLoading) {
    return <LoadingWrapper />;
  }

  if ((isError && error) || !data) {
    return <ErrorWrapper message={error?.message || GENERAL_ERROR} />;
  }

  return (
    <PageWrapper>
      <div className="max-w-screen-md mx-auto">
        <Header title={data.name} />
        <CharacterDetail {...data} />
        {!!data.location.url && (
          <LocationDetail
            title="Location Details"
            id={Number(data.location.url.replace(host + LOCATION(""), ""))}
          />
        )}
        {!!data.origin.url && (
          <LocationDetail
            title="Origin Details"
            id={Number(data.origin.url.replace(host + LOCATION(""), ""))}
          />
        )}
        {!!data.episode && !!data.episode.length && (
          <EpisodesDetail
            list={data.episode
              .map((url) => url.replace(host + EPISODES(""), ""))
              .join(",")}
          />
        )}
      </div>
    </PageWrapper>
  );
};
