import React, { Component } from 'react';
import './App.css';
import ContentTile from './components/ContentTile'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: props.ResumeData

    }
  }
  render() {
    let resumeData = this.state.resume.resume
    let iteration = 0
    let resumeSection = resumeData.map(section => {
      iteration += 1
      return(
        <ContentTile
          key={iteration}
          id={section.sectionHeading}
          heading={section.sectionHeading}
          body={section.body}
        />
      )
    })
    return (
      <div className="App">
        <input id="toggle" type="checkbox"/>
        <label htmlFor="toggle">Hide section</label>
        {resumeSection}
      </div>
    );
  }
}

export default App;
