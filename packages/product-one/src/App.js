import React from 'react';
import './App.css';
import { Button } from '@gamersclub-frontend/ui-components';
import { formatDate } from '@gamersclub-frontend/common-utils';

function App() {
  return (
    <div className="App">
      <div>
        Sample product
        <Button label="A product button" />
        <span>
          Today is: {formatDate(new Date())}
        </span>
      </div>
    </div>
  );
}

export default App;