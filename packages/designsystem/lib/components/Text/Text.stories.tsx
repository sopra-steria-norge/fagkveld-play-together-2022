import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Example/Text",
  component: Text,
  argTypes: {
    level: {
      defaultValue: "h1",
      type: "string",
    },
    children: {
      defaultValue: "A Text",
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextOne = Template.bind({});
TextOne.args = {
  children: "En massiv Text",
};

export const TextTwo = Template.bind({});
TextTwo.args = {
  children: "En ganske stor Text",
};
