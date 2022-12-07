import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from '@/components/SelectControl/Toggle/Toggle';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import ToggleFormLabel from '@/components/SelectControl/ToggleFormLabel/ToggleFormLabel';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        type: 'select',
      },
      options: [true, false, undefined],
      description: "If `true`, the component is checked. Indeterminate state doesn't supported `checked` prop.",
    },
    onChange: {
      control: {
        type: 'select',
      },
      options: ['function', undefined],
      mapping: {
        function: action('onChange'),
        undefined: undefined,
      },
      description: '(() => void)',
    },
  },
  args: {
    size: 'medium',
    indeterminate: false,
  },
  parameters: {
    controls: { include: ['checked', 'size', 'indeterminate', 'onChange'] },
    pseudo: {
      focusWithin: ['.focus-test'],
    },
    docs: {
      description: {
        component: `Switches toggle the state of a single setting on or off.
				see [Material-UI Switch](https://mui.com/material-ui/react-switch/).
				\nIn order to use Button, [checked] value have to be undefined`,
      },
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="base90">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Toggle>;

const BaseTemplate: ComponentStory<typeof Toggle> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>DEFAULT</TableCell>
        <TableCell>FOCUS</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <Toggle {...args} />
        </TableCell>
        <TableCell>
          <Toggle className="focus-test" {...args} />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const Template: ComponentStory<typeof Toggle> = (args) => (
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
          <Toggle {...args} size="large" className="focus-test" indeterminate />
        </TableCell>
        <TableCell>
          <Toggle {...args} size="large" className="focus-test" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const DisabledTemplate: ComponentStory<typeof Toggle> = (args) => (
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
);

const TemplateWithLabel: ComponentStory<typeof Toggle> = (args) => (
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
          <ToggleFormLabel label="Label 1" control={<Toggle {...args} checked />} />
        </TableCell>
        <TableCell>
          <ToggleFormLabel label={<input placeholder="Label 2" />} control={<Toggle {...args} indeterminate />} />
        </TableCell>
        <TableCell>
          <ToggleFormLabel label={<TextField placeholder="Label 3" />} control={<Toggle {...args} />} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>MEDIUM FOCUS</TableCell>
        <TableCell>
          <ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} checked />} />
        </TableCell>
        <TableCell>
          <ToggleFormLabel
            className="focus-test"
            label={<input placeholder="Label 2" />}
            control={<Toggle {...args} indeterminate />}
          />
        </TableCell>
        <TableCell>
          <ToggleFormLabel
            className="focus-test"
            label={<TextField placeholder="Label 3" />}
            control={<Toggle {...args} />}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>LARGE DEFAULT</TableCell>
        <TableCell>
          <ToggleFormLabel label="Label 1" control={<Toggle {...args} size="large" checked />} />
        </TableCell>
        <TableCell>
          <ToggleFormLabel
            label={<input placeholder="Label 2" />}
            control={<Toggle {...args} size="large" indeterminate />}
          />
        </TableCell>
        <TableCell>
          <ToggleFormLabel label={<TextField placeholder="Label 3" />} control={<Toggle {...args} size="large" />} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>LARGE FOCUS</TableCell>
        <TableCell>
          <ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} size="large" checked />} />
        </TableCell>
        <TableCell>
          <ToggleFormLabel
            className="focus-test"
            label={<input placeholder="Label 2" />}
            control={<Toggle {...args} size="large" indeterminate />}
          />
        </TableCell>
        <TableCell>
          <ToggleFormLabel
            className="focus-test"
            label={<TextField placeholder="Label 3" />}
            control={<Toggle {...args} size="large" />}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const IndeterminateTemplate: ComponentStory<typeof Toggle> = (args) => {
  const [checked, setChecked] = useState([true, false, false]);

  const handleChange1 = () => {
    const result = !(checked[0] && checked[1])
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
            <ToggleFormLabel
              label="Parent"
              control={
                <Toggle
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <ToggleFormLabel label="Child 1" control={<Toggle checked={checked[0]} onChange={handleChange2} />} />
              <ToggleFormLabel label="Child 2" control={<Toggle checked={checked[1]} onChange={handleChange3} />} />
              <ToggleFormLabel
                label="Child 3"
                disabled
                control={<Toggle checked={checked[2]} onChange={handleChange4} />}
              />
            </Box>
          </TableCell>
          <TableCell>
            <ToggleFormLabel
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <ToggleFormLabel
                label="Child 1"
                control={<Toggle size="large" checked={checked[0]} onChange={handleChange2} />}
              />
              <ToggleFormLabel
                label="Child 2"
                control={<Toggle size="large" checked={checked[1]} onChange={handleChange3} />}
              />
              <ToggleFormLabel
                label="Child 3"
                disabled
                control={<Toggle size="large" checked={checked[2]} onChange={handleChange4} />}
              />
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const ToggleBase = BaseTemplate.bind({});
export const ToggleEnabled = Template.bind({});
export const ToggleDisabled = DisabledTemplate.bind({});
ToggleDisabled.args = {
  disabled: true,
};

export const ToggleWithLabel = TemplateWithLabel.bind({});
export const ToggleWithLabelAndIndeterminate = IndeterminateTemplate.bind({});
ToggleWithLabelAndIndeterminate.parameters = {
  docs: {
    description: {
      story: 'Usage is same with Toggle',
    },
  },
};
