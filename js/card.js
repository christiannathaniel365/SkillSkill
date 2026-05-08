document.addEventListener("DOMContentLoaded", (e) => {
  const allCard = document.querySelector(".allCard");
  let html = "";
  let allCardData = [
    {
      title: "Networking",
      desc: "Learn networking fundamentals, IP addressing, routing, switching, and network troubleshooting.",
      imagePath: "../assets/card/networkingCourse.webp",
    },
    {
      title: "Linux Administration",
      desc: "Learn Linux administration, user management, shell commands, and server configuration.",
      imagePath: "../assets/card/linuxAdministrationCourse.webp",
    },
    {
      title: "Routing & Switching",
      desc: "Learn routing, switching, and network configuration for efficient communication.",
      imagePath: "../assets/card/routing&switching.webp",
    },
    {
      title: "Security Monitoring",
      desc: "Learn security monitoring techniques to detect, analyze, and respond to cyber threats.",
      imagePath: "../assets/card/securityMonitoring.webp",
    },
    {
      title: "Linux Services",
      desc: "Learn to manage Linux services, system processes, and server operations efficiently.",
      imagePath: "../assets/card/linuxServer.webp",
    },
  ];
  allCardData.forEach((course) => {
    html += `
        <article class="card shadow">
            <figure class="cardImg">
              <img src="${course.imagePath}" alt="" />
            </figure>
            <div class="cardContent">
              <h3 class="cardTitle">${course.title}</h3>
              
              <p class="cardDesc">
               ${course.desc}
              </p>
              <a href="" class="cardLink btn shadow">View Course</a>
            </div>
          </article>
            `;
  });
  allCard.innerHTML = html;
});
