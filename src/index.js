import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ResumeData from './ResumeData'

ReactDOM.render(<App ResumeData={ResumeData} />, document.getElementById('root'));
registerServiceWorker();
