import React from "react";
import cx from "classnames";

import { useEpisodes } from "hooks";
import { LoadingWrapper } from "components/common";

export interface EpisodesDetailProps {
  list: string;
}

interface GridHeaderProps {
  title: string;
  className?: string;
}
const GridHeader = ({ title, className }: GridHeaderProps) => (
  <h4 className={cx("bg-white text-center p-2", className)}>{title}</h4>
);

interface GridCellProps {
  value: string | number;
  className?: string;
}
const GridCell = ({ value, className }: GridCellProps) => (
  <div className={cx("bg-white text-center p-2", className)} data-testid="grid-cell">
    {value}
  </div>
);

export const EpisodesDetail = ({ list }: EpisodesDetailProps): JSX.Element => {
  const { data, isLoading } = useEpisodes(list);

  return (
    <div className="mt-4 pb-8">
      <h2 className="text-xl text-neutral-800 font-medium border-b border-neutral-200 p-2 mb-4">
        Episodes Detail
      </h2>
      {isLoading || !data ? (
        <LoadingWrapper />
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-neutral-200">
          <GridHeader title="Name" className="col-span-2" />
          <GridHeader title="Code" />
          <GridHeader title="Date" className="hidden md:block" />
          <GridHeader title="Characters Count" className="hidden md:block" />
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <GridCell value={item.name} className="col-span-2" />
              <GridCell value={item.episode} />
              <GridCell value={item.air_date} className="hidden md:block" />
              <GridCell value={item.characters.length} className="hidden md:block" />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
