import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ErrorWrapper } from ".";

export default {
  title: "common/ErrorWrapper",
  component: ErrorWrapper,
  decorators: [
    (Story) => (
      <div className="bg-gray-300 p-8 rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ErrorWrapper>;

const Template: ComponentStory<typeof ErrorWrapper> = (args) => (
  <ErrorWrapper {...args} />
);

export const Main = Template.bind({});
Main.args = {
  message: "Errorrrrr!! ...",
};
