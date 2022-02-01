import React from "react";

import { Image } from "components/common";
import { CharacterType } from "@types";
import { DataRow } from "components/characterPage/DataRow";

export interface CharacterDetailProps extends CharacterType {}

export const CharacterDetail = ({
  name,
  image,
  species,
  status,
  gender,
  type,
  episode,
}: CharacterDetailProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
      <Image src={image} alt={name} className="mx-auto rounded-lg" />
      <div className="flex flex-col items-center sm:items-start justify-center">
        <DataRow title="Name" value={name} />
        <DataRow title="Species" value={species} />
        <DataRow title="Status" value={status} />
        <DataRow title="Gender" value={gender} />
        <DataRow title="Type" value={!!type ? type : "-"} />
        <DataRow title="Episode Count" value={episode.length} />
      </div>
    </div>
  );
};
