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
    let resumeSection = resumeData.map(section => {
      return(
        <ContentTile
          id={section.sectionHeading}
          heading={section.sectionHeading}
          body={section.body}
        />
      )
    })
    return (
      <div className="App">
        <input id="toggle" type="checkbox" checked/>
        <label for="toggle">Hide section</label>
        {resumeSection}
      </div>
    );
  }
}

export default App;
