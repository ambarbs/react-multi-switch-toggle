import React from 'react';
import { render} from 'react-dom';
import MultiSwitch from '../../src';
const App = () => (
  <MultiSwitch
    texts={[
          'sa 1sa',
          'sa 2sa',
          'sa 3sa',
          'sa 4sa',
          'sa 5sa',
          'sa 6sa',
    ]}
    selectedSwitch={4}
    bgColor={'#e57168'}
  >
  </MultiSwitch>
);
render(<App />, document.getElementById("root"));