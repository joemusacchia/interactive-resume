import React, { Component } from 'react';
import './App.css';
import ContentTile from './components/ContentTile'
import profilePhoto from './Joe_Musacchia_press_photo_small.jpg'

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
        <img crossOrigin="anonymous" src={profilePhoto} alt="Joe Musacchia" />
        {resumeSection}
      </div>
    );
  }
}

export default App;
