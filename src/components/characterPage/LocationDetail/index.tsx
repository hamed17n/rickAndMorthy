import React from "react";

import { useLocation } from "hooks";
import { LoadingWrapper } from "components/common";
import { DataRow } from "components/characterPage/DataRow";

export interface LocationDetailProps {
  id: number;
  title: string;
}

export const LocationDetail = ({ id, title }: LocationDetailProps): JSX.Element => {
  const { data, isLoading } = useLocation(id);

  return (
    <div className="mt-4">
      <h2 className="text-xl text-neutral-800 font-medium border-b border-neutral-200 p-2">
        {title}
      </h2>
      {isLoading || !data ? (
        <LoadingWrapper />
      ) : (
        <div className="p-2">
          <DataRow title="Name" value={data.name} />
          <DataRow title="Dimension" value={data.dimension} />
          <DataRow title="Type" value={data.type} />
          <DataRow title="Residents Count" value={data.residents.length} />
        </div>
      )}
    </div>
  );
};
