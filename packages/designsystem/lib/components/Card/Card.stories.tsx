import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
      name: "String contents",
      defaultValue: "Dette er et kort. Du kan fylle det med hva du vil!",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, elevation }) => {
  return <Card elevation={elevation}>{children}</Card>;
};

export const Default = Template.bind({});
