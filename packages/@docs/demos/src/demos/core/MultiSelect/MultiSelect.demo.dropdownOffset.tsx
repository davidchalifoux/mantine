import React from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './MultiSelect.demo.dropdownOffset.module.css';

const cssCode = `.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`;

const code = `
import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}

export const dropdownOffset: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
  maxWidth: 340,
  centered: true,
};
