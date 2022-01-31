import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharacterCart } from ".";

export default {
  title: "MainPage/CharacterCart",
  component: CharacterCart,
  decorators: [
    (Story) => (
      <div className="bg-white p-8 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CharacterCart>;

const Template: ComponentStory<typeof CharacterCart> = (args: any) => (
  <CharacterCart {...args} />
);

export const Main = Template.bind({});
Main.args = {
  imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  locationName: "Earth",
  episodeCount: 23,
  id: 1,
};
