import type { Preview } from "@storybook/react";
import React from "react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => {
      return React.createElement(
        "div",
        { className: "min-h-screen bg-background text-foreground" },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;

