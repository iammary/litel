import type { Meta, StoryObj } from "@storybook/web-components";
import "./demo.ts";

const meta: Meta = {
  component: "gm-demo",
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    docsHint: "Click on the Vite and Lit logos to learn more",
  },
};
