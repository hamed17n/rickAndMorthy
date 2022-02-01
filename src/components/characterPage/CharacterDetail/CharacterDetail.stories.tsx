import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharacterDetail, CharacterDetailProps } from ".";

export default {
  title: "CharacterPage/CharacterDetail",
  component: CharacterDetail,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8 flex justify-center rounded w-3/4 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CharacterDetail>;

const Template: ComponentStory<typeof CharacterDetail> = (args: CharacterDetailProps) => (
  <CharacterDetail {...args} />
);

export const Main = Template.bind({});
Main.args = {
  id: 39,
  name: "Beth Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Female",
  origin: {
    name: "Earth (Evil Rick's Target Dimension)",
    url: "https://rickandmortyapi.com/api/location/34",
  },
  location: {
    name: "Earth (Evil Rick's Target Dimension)",
    url: "https://rickandmortyapi.com/api/location/34",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/10"],
  url: "https://rickandmortyapi.com/api/character/39",
  created: "2017-11-05T09:52:31.777Z",
};
