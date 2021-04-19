//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Co-Head Application Development",
    cardImage: "assets/images/experience-page/asper.jpg",
    place: "Asper",
    time: "(July, 2020 - present)",
    desp: "<li>Headed the application development process.</li> <li>Worked to develop Asper android application.</li> <li>Modified existing applications to correct errors and optimize efficiency.</li>",
  },
  {
    title: "Co-Head Core Coding",
    cardImage: "assets/images/experience-page/asper.jpg",
    place: "Asper",
    time: "(Feb, 2021 - present)",
    desp: "<li>Solving complex programming problems.</li><li>Monitoring the progress of other community members.</li>",
  },
  {
    title: "Freelancer",
    cardImage: "assets/images/experience-page/freelancer.jpg",
    place: "SELF EMPLOYED",
    time: "(Oct, 2020 - present)",
    desp:"<li>Did projects for fun.</li><li>Contributed into the open-source community.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
  {
    title: "Smart India Hackathon 2020",
    cardImage: "assets/images/experience-page/hackathone.jpg",
    description:
      "Responsible for handling open source contributions for the project Alumni Association Portal.",
  },
  {
    title: "Code Adept 4.0",
    cardImage: "assets/images/experience-page/codeadept.jpg",
    description:
      "Responsile for compiler testing and for designing complicated programming problems.",
  },
  {
    title: "TEDxRGPV",
    cardImage: "assets/images/experience-page/tedx.png",
    description:
      "Collabrated in a team and volunteers to organise TEDxRPGV event.",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card



const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
