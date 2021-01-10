import React from 'react';
import Title from './components/Title';
import UploadFrom from './components/UploadFrom'
import ImageGrid from './components/ImageGrid'

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadFrom/>
      <ImageGrid/>
    </div>
  );
}

export default App;