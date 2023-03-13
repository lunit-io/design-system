import React, { useEffect, useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Toggle from "@/components/Toggle/Toggle";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import FormLabel from "@/components/FormLabel";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        type: "select",
      },
      options: [true, false, undefined],
      description:
        "If `true`, the component is checked. Indeterminate state doesn't supported `checked` prop.",
    },
    onChange: {
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onChange"),
        undefined: undefined,
      },
      description: "(() => void)",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "If `true`, the component is disabled.",
      defaultValue: false,
      options: [true, false],
    },
  },
  args: {
    size: "medium",
    indeterminate: false,
    disabled: false,
  },
  parameters: {
    controls: {
      include: ["disabled", "checked", "size", "indeterminate", "onChange"],
    },
    docs: {
      description: {
        component: `Switches toggle the state of a single setting on or off.
				see [Material-UI Switch](https://mui.com/material-ui/react-switch/).
				\nIn order to use Button, [checked] value have to be undefined`,
      },
    },
  },
} as Meta<typeof Toggle>;

export const ToggleBase = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(Boolean(args.checked));
    }, [args.checked]);

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>DEFAULT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Toggle
                {...args}
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const ToggleEnabled = {
  render: (args) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>ON</TableCell>
          <TableCell>Indeterminate</TableCell>
          <TableCell>OFF</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>MEDIUM DEFAULT</TableCell>
          <TableCell>
            <Toggle {...args} checked />
          </TableCell>
          <TableCell>
            <Toggle {...args} indeterminate />
          </TableCell>
          <TableCell>
            <Toggle {...args} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>MEDIUM FOCUS</TableCell>
          <TableCell>
            <Toggle {...args} className="focus-test" checked />
          </TableCell>
          <TableCell>
            <Toggle {...args} className="focus-test" indeterminate />
          </TableCell>
          <TableCell>
            <Toggle {...args} className="focus-test" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>LARGE DEFAULT</TableCell>
          <TableCell>
            <Toggle {...args} size="large" checked />
          </TableCell>
          <TableCell>
            <Toggle {...args} size="large" indeterminate />
          </TableCell>
          <TableCell>
            <Toggle {...args} size="large" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>LARGE FOCUS</TableCell>
          <TableCell>
            <Toggle {...args} size="large" className="focus-test" checked />
          </TableCell>
          <TableCell>
            <Toggle
              {...args}
              size="large"
              className="focus-test"
              indeterminate
            />
          </TableCell>
          <TableCell>
            <Toggle {...args} size="large" className="focus-test" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ToggleDisabled = {
  render: (args) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>ON</TableCell>
          <TableCell>Indeterminate</TableCell>
          <TableCell>OFF</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>MEDIUM DEFAULT</TableCell>
          <TableCell>
            <Toggle {...args} checked />
          </TableCell>
          <TableCell>
            <Toggle {...args} indeterminate />
          </TableCell>
          <TableCell>
            <Toggle {...args} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>LARGE DEFAULT</TableCell>
          <TableCell>
            <Toggle {...args} size="large" checked />
          </TableCell>
          <TableCell>
            <Toggle {...args} size="large" indeterminate />
          </TableCell>
          <TableCell>
            <Toggle {...args} size="large" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),

  args: {
    disabled: true,
  },
};

export const ToggleWithLabel = {
  render: (args) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>ON</TableCell>
          <TableCell>Indeterminate</TableCell>
          <TableCell>OFF</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>MEDIUM DEFAULT</TableCell>
          <TableCell>
            <FormLabel label="Label 1" control={<Toggle {...args} checked />} />
          </TableCell>
          <TableCell>
            <FormLabel
              label={<input placeholder="Label 2" />}
              control={<Toggle {...args} indeterminate />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              label={<TextField placeholder="Label 3" />}
              control={<Toggle {...args} />}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>MEDIUM FOCUS</TableCell>
          <TableCell>
            <FormLabel
              className="focus-test"
              label="Label 1"
              control={<Toggle {...args} checked />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              className="focus-test"
              label={<input placeholder="Label 2" />}
              control={<Toggle {...args} indeterminate />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              className="focus-test"
              label={<TextField placeholder="Label 3" />}
              control={<Toggle {...args} />}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>LARGE DEFAULT</TableCell>
          <TableCell>
            <FormLabel
              label="Label 1"
              control={<Toggle {...args} size="large" checked />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              label={<input placeholder="Label 2" />}
              control={<Toggle {...args} size="large" indeterminate />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              label={<TextField placeholder="Label 3" />}
              control={<Toggle {...args} size="large" />}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>LARGE FOCUS</TableCell>
          <TableCell>
            <FormLabel
              className="focus-test"
              label="Label 1"
              control={<Toggle {...args} size="large" checked />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              className="focus-test"
              label={<input placeholder="Label 2" />}
              control={<Toggle {...args} size="large" indeterminate />}
            />
          </TableCell>
          <TableCell>
            <FormLabel
              className="focus-test"
              label={<TextField placeholder="Label 3" />}
              control={<Toggle {...args} size="large" />}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ToggleWithLabelAndIndeterminate = {
  render: (args) => {
    const [checked, setChecked] = useState([true, false, false]);

    const handleChange1 = () => {
      const result = !(checked[0] && checked[1]);
      setChecked([result, result, result]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1], checked[2]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked, checked[2]]);
    };

    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], checked[1], event.target.checked]);
    };

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>MEDIUM</TableCell>
            <TableCell>LARGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <FormLabel
                label="Parent"
                control={
                  <Toggle
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormLabel
                  label="Child 1"
                  control={
                    <Toggle checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormLabel
                  label="Child 2"
                  control={
                    <Toggle checked={checked[1]} onChange={handleChange3} />
                  }
                />
                <FormLabel
                  label="Child 3"
                  disabled
                  control={
                    <Toggle checked={checked[2]} onChange={handleChange4} />
                  }
                />
              </Box>
            </TableCell>
            <TableCell>
              <FormLabel
                label="Parent"
                control={
                  <Toggle
                    size="large"
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormLabel
                  label="Child 1"
                  control={
                    <Toggle
                      size="large"
                      checked={checked[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormLabel
                  label="Child 2"
                  control={
                    <Toggle
                      size="large"
                      checked={checked[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormLabel
                  label="Child 3"
                  disabled
                  control={
                    <Toggle
                      size="large"
                      checked={checked[2]}
                      onChange={handleChange4}
                    />
                  }
                />
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },

  parameters: {
    docs: {
      description: {
        story: "Usage is same with Toggle",
      },
    },
  },
};
