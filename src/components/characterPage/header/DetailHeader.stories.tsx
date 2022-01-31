import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from ".";

export default {
  title: "DetailPage/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-100 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Burger GIF!",
};
