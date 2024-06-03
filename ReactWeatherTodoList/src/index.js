import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './components/Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <div style={{ flex: 1, marginRight: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Weather />
    </div>
  </div>
);
