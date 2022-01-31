import React from "react";
import { Link } from "react-router-dom";

import { Image } from "components/common";
import { CHARACTER_PAGE } from "constants/appRoutes";

export interface CharacterCartProps {
  imageUrl: string;
  name: string;
  status: string;
  species?: string;
  locationName?: string;
  episodeCount?: number;
  id: number;
}

export const CharacterCart = ({
  id,
  imageUrl,
  name,
  status,
  species,
  locationName,
  episodeCount,
}: CharacterCartProps): JSX.Element => {
  return (
    <Link to={CHARACTER_PAGE(id)}>
      <div className="flex sm:flex-col rounded-xl overflow-hidden bg-white border border-neutral-200">
        <div className="relative w-1/3 sm:w-full">
          {!!episodeCount && (
            <div className="absolute top-2 left-2 rounded z-10 text-white bg-green-800 bg-opacity-90 text-xs p-1">
              {`In ${episodeCount} ${episodeCount > 1 ? "episodes" : "episode"}`}
            </div>
          )}
          <Image src={imageUrl} alt={name} />
        </div>
        <div className="p-3">
          <h2>{name}</h2>
          <div className="flex items-center">
            <span>{status}</span>
            {!!species && <span className="ml-1">- {species}</span>}
          </div>
          <div className="flex items-center">
            from <b className="ml-1">{locationName}</b>
          </div>
        </div>
      </div>
    </Link>
  );
};
