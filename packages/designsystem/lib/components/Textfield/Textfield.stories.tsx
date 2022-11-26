import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textfield } from "./Textfield";

export default {
  title: "Example/Textfield",
  component: Textfield,
  argTypes: {
    label: {
      control: "text",
      name: "Label",
      defaultValue: "Navn",
    },
    description: {
      control: "text",
      name: "Description",
      defaultValue: "Dette er en beskrivende tilleggstekst",
    },
  },
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = ({
  description,
  label,
  value,
}) => {
  return <Textfield description={description} label={label} value={value} />;
};

export const Default = Template.bind({});
