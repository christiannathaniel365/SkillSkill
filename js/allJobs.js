document.addEventListener("DOMContentLoaded", (e) => {
  const allJobs = document.querySelector(".allJobs");
  let html = "";
  let allJobsData = [
    {
      title: "Software Engineer",
      slug: "software-engineer",
      desc: "Develop and maintain web applications using modern technologies like JavaScript, Laravel, and REST APIs, while collaborating with teams to improve system performance and scalability.",
      imagePath: "",
      location: "Jakarta, Indonesia",
      jobType: "Full-time",
    },
    {
      title: "Front-End Developer",
      slug: "front-end-developer",
      desc: "Build responsive and interactive websites using HTML, CSS, and JavaScript, while collaborating with UI/UX designers to enhance user experience.",
      imagePath: "",
      location: "Bandung, Indonesia",
      jobType: "Part-time",
    },
    {
      title: "DevOps Engineer",
      slug: "devops-engineer",
      desc: "Manage CI/CD pipelines, handle application deployments, and maintain the stability of servers and cloud infrastructure.",
      imagePath: "",
      location: "Remote",
      jobType: "Full-time",
    },
  ];
  allJobsData.forEach((job) => {
    html += `
    <article class="job shadow">
      <div class="cardIdentity">
        <figure class="cardImg">
          <img src="../assets/card/pythonImage.png" alt="" />
        </figure>
        <div>
          <h3 class="cardTitle">${job.title}</h3>
          <p class="JobCompany">
            ${job.desc}
          </p>
        </div>
      </div>

      <div class="jobInfo">
        <ul class="jobLocation">
          <li>${job.location}</li>
          <li>${job.jobType}</li>
        </ul>
        <a href="#" class="btn"> Apply Now </a>
      </div>
    </article>
            `;
  });
  allJobs.innerHTML = html;
});
