import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
      name: "String contents",
      defaultValue: "Dette er et kort. Du kan fylle det med hva du vil.",
    },
    title: {
      control: "text",
      name: "Tittel",
      defaultValue: "Tittel",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, elevation, title }) => {
  return <Card elevation={elevation} title={title}>{children}</Card>;
};

export const Default = Template.bind({});
