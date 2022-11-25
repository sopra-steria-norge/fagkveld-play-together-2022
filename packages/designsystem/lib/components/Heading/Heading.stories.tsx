import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
