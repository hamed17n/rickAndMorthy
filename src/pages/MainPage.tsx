import React from "react";

import { PageWrapper, LoadingWrapper, Button } from "components/common";
import { CharacterCart } from "components/mainPage/CharacterCart";
import { useCharacters } from "hooks";

export const MainPage = (): JSX.Element => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, isLoading } =
    useCharacters();

  return (
    <PageWrapper>
      <h1 className="text-center font-bold p-4 text-2xl">
        The Rick and Morty Characters
      </h1>
      {isLoading ? (
        <LoadingWrapper />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-8 px-2">
          {data &&
            data?.pages.map((page) =>
              page.list.map((item) => (
                <CharacterCart
                  key={item.id}
                  id={item.id}
                  imageUrl={item.image}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  locationName={item.location.name}
                  episodeCount={item.episode.length}
                />
              )),
            )}
        </div>
      )}
      <div className="flex justify-center items-center pb-12">
        <Button
          color="blue"
          className="w-32"
          disabled={!hasNextPage}
          isLoading={isFetchingNextPage}
          onClick={() => {
            fetchNextPage();
          }}
        >
          Load More!
        </Button>
      </div>
    </PageWrapper>
  );
};
