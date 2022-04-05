import { html } from 'lit';

import '../src/app-hax.js';

export default {
  title: 'App HAX',
  component: 'app-hax',
  argTypes: {
  },
};

function Template({ slot }) {
  return html`<app-hax>${slot}</app-hax>`;
}
export const appHAXEl = Template.bind({});