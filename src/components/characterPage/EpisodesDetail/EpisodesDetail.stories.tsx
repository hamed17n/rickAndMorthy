import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EpisodesDetail, EpisodesDetailProps } from ".";

export default {
  title: "CharacterPage/EpisodesDetail",
  component: EpisodesDetail,
  decorators: [
    (Story) => (
      <div className="bg-white p-8 flex justify-center rounded w-full mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof EpisodesDetail>;

const Template: ComponentStory<typeof EpisodesDetail> = (args: EpisodesDetailProps) => (
  <EpisodesDetail {...args} />
);

export const SingleEpisode = Template.bind({});
SingleEpisode.args = {
  list: "1",
};

export const MultipleEpisode = Template.bind({});
MultipleEpisode.args = {
  list: "1,2,3,4",
};
