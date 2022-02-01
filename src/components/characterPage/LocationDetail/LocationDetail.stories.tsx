import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LocationDetail, LocationDetailProps } from ".";

export default {
  title: "CharacterPage/LocationDetail",
  component: LocationDetail,
  decorators: [
    (Story) => (
      <div className="bg-white p-8 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LocationDetail>;

const Template: ComponentStory<typeof LocationDetail> = (args: LocationDetailProps) => (
  <LocationDetail {...args} />
);

export const Main = Template.bind({});
Main.args = {
  title: "Location Info",
  id: 34,
};
