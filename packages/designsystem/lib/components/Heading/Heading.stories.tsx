import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "Example/Heading",
  component: Heading,
  argTypes: {
    level: {
      defaultValue: "h1",
      type: "string",
    },
    children: {
      defaultValue: "A heading",
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingOne = Template.bind({});
HeadingOne.args = {
  level: "h1",
  children: "En massiv heading",
};

export const HeadingTwo = Template.bind({});
HeadingTwo.args = {
  level: "h2",
  children: "En ganske stor heading",
};
