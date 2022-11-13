import { useState } from 'react';
import NotionWidget from './components/NotionWidget';

function App() {
  let [isVisibleShareWidget, setIsVisibleShareWidget] = useState(true);
  return (
    <div className="App">
      <div className="Ta(end)">
        <button className="button button--transparent C(color-black)" onClick={() => setIsVisibleShareWidget(!isVisibleShareWidget)}>
          Share
        </button>
      </div>
      {
        isVisibleShareWidget && <NotionWidget/>
      }
    </div>
  )
}

export default App
