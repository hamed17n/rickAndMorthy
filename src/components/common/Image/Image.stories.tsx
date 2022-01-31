import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from ".";

export default {
  title: "Common/Image",
  component: Image,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Main = Template.bind({});
Main.args = {
  src: "https://picsum.photos/200",
  width: "200px",
  height: "200px",
};

export const WithBrokenSrc = Template.bind({});
WithBrokenSrc.args = {
  src: "",
  width: "200px",
  height: "200px",
};
