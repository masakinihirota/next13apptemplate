import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { jest, expect } from "@storybook/jest";

import { Button } from "./Button";

const fn = jest.fn();

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      router: {
        push: fn,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Default",
    "data-testid": "button",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("ボタンにLabelの文字列が表示されている", async () => {
      await expect(canvas.getByText("Default")).toBeInTheDocument();
    });
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary",
    "data-testid": "button",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("ボタンのclassName属性にprimaryが適用されている", async () => {
      const button = canvas.getByTestId("button");
      await expect(button.classList.contains("primary")).toBe(true);
    });
  },
};

export const Toggle: Story = {
  args: {
    label: "Toggle",
    text: "Success",
    "data-testid": "button",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("ボタン押下でtextを表示する", async () => {
      await userEvent.click(canvas.getByTestId("button"));
      await expect(canvas.getByText("Success")).toBeInTheDocument();
    });

    await step("再度ボタン押下でtextを非表示にする", async () => {
      await userEvent.click(canvas.getByTestId("button"));
      await expect(canvas.queryByText("Success")).toBeNull();
    });
  },
};

export const Link: Story = {
  args: {
    label: "Link",
    href: "/auth/login",
    "data-testid": "button",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("ボタン押下でhrefで指定した画面に遷移する", async () => {
      await userEvent.click(canvas.getByTestId("button"));
      await expect(fn.mock.lastCall).toContainEqual("/auth/login");
    });
  },
};
