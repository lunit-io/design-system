import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />;
// 예제 코드이기 떄문에 지워도 상관없습니다.
export const Primary = () => (
    <Button/>
)

Primary.parameters = {
  pseudo: {
    hover: [".one", ".three"],
  },
}
