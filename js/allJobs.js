document.addEventListener("DOMContentLoaded", (e) => {
  const allJobs = document.querySelector(".allJobs");
  let html = "";
  let allJobsData = [
    {
      title: "Cloud Engineer",
      slug: "cloud-engineer",
      desc: "Design, deploy, and manage scalable cloud infrastructure while ensuring system security, performance, and reliability.",
      imagePath: "../assets/card/Cloud.webp",
      location: "Jakarta, Indonesia",
      jobType: "Full-time",
    },
    {
      title: "Networking IT",
      slug: "networking-it",
      desc: "Design, manage, and maintain computer networks to ensure secure, stable, and efficient connectivity.",
      imagePath: "../assets/card/NetworkingIt.webp",
      location: "Bandung, Indonesia",
      jobType: "Part-time",
    },
    {
      title: "DevOps Engineer",
      slug: "devops-engineer",
      desc: "Manage CI/CD pipelines, deployments, and maintain server and cloud infrastructure stability.",
      imagePath: "../assets/card/DevOpsEnginnering.webp",
      location: "Remote",
      jobType: "Full-time",
    },
  ];
  allJobsData.forEach((job) => {
    html += `
    <article class="job shadow">
      <div class="cardIdentity">
        <figure class="cardImg">
          <img src="${job.imagePath}" alt="" />
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
  const faqItems = document.querySelectorAll(".faqItem");

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faqQuestion");

    btn.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
