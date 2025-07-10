const projects = [
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  {
    title: "NFL Passer Rating Calculator",
    desc: "A web application that calculates NFL passer ratings based on user input.",
    link: "https://jimkellyc.github.io/PasserRatingNFL/",
  },
  
];

const projectsContainer = document.getElementById("projects");
projects.forEach((proj) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
                <div class="project-title">${proj.title}</div>
                <div class="project-desc">${proj.desc}</div>
                <a class="project-link" href="${proj.link}" target="_blank">View on GitHub</a>
            `;
  projectsContainer.appendChild(card);
});
