import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DataRow, DataRowProps } from ".";

export default {
  title: "CharacterPage/DataRow",
  component: DataRow,
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DataRow>;

const Template: ComponentStory<typeof DataRow> = (args: DataRowProps) => (
  <DataRow {...args} />
);

export const Main = Template.bind({});
Main.args = {
  title: "Name",
  value: "Beth Smith",
};
