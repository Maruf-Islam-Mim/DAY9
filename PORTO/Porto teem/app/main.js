const teamS = document.querySelector("#tm-information");
let team_items = "";
teamMembers.map((item, index) => {
  team_items += `
  <div class="col-12 col-sm-6 col-lg-3 isotope-item design">
  <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
    <span class="thumb-info-wrapper">
      <a href="about-me.html">
        <img src="${item.image}" alt="" />
        <span class="thumb-info-title">
          <span class="thumb-info-inner">${item.name}</span>
          <span class="thumb-info-type">${item.occupation}</span>
        </span>
      </a>
    </span>
    <span class="thumb-info-caption">
      <span class="thumb-info-caption-text"
        >${item.paragraph}</span
      >
      <span class="thumb-info-social-icons mb-4">
      <a href="${item.social_icon.map((midea) => {
        let = `${midea.link}`;
      })}"
      ><i class="${item.social_icon.facebook}"></i><span>${
    item.social_icon.name
  }</span></a
      >


      </span>
    </span>
  </span>
</div>
  `;
});

teamS.innerHTML = team_items;
{
  /* <a href="https://www.twitter.com/"
><i class="fab fa-twitter"></i><span>Twitter</span></a
>
<a href="http://www.linkedin.com/"
><i class="fab fa-linkedin-in"></i
><span>Linkedin</span></a
> */
}
