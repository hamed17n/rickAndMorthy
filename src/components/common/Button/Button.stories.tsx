import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Common/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  children: "Hello World",
  color: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  children: "Hello World",
  color: "blue",
};

export const Gray = Template.bind({});
Gray.args = {
  children: "Hello World",
  color: "gray",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Hello World",
  color: "blue",
  isLoading: true,
};
