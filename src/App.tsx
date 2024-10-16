import './App.css';

import '@h5web/lib/dist/styles.css';

import { MyCanvas } from './MyCanvas';

function App() {
  return (
    <>
      <div style={{ display: 'grid', width: '75vw', height: '49vh' }}>
        <MyCanvas />
      </div>
    </>
  )
}

export default App
