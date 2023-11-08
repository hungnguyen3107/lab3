import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const showAlert = () => {
    alert('Alert!!!');
  };

  return (
    <div className="App">
      <Button style={{ margin: '10px 10px' }} type="primary" onClick={showAlert}>
        Alert me!
      </Button>
    </div>
  );
}

export default App;
