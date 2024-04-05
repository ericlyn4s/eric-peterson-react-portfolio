import portfolioDoc from '/src/assets/EricPetersonResume2023.pdf';

function ResumePage() {
    return (
      <div id="resume-section">
        <h1>Resume</h1>
        <br></br>
        <a href={ portfolioDoc } download>
          <h3>Download my resume</h3> 
        </a>
        <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
    </div>
    )
  }
  
  export default ResumePage;