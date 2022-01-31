import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Loading } from ".";

export default {
  title: "common/Loading",
  component: Loading,
  decorators: [
    (Story) => (
      <div className="bg-gray-300 p-8 rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Info = Template.bind({});
Info.args = {
  className: "text-white",
};
