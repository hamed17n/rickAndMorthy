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
          <Image className="w-full" src={imageUrl} alt={name} />
        </div>
        <div className="p-3">
          <h2 className="font-bold">{name}</h2>
          <div className="flex items-center">
            <span>{status}</span>
            {!!species && <span className="ml-1">- {species}</span>}
          </div>
          <div className="flex items-center">
            from
            <span className="ml-1 font-semibold text-neutral-700">{locationName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
