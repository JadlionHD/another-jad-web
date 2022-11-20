import style from "../../styles/style.module.css";

export default function Projects() {
  return (
    <>
      <div id="tech" className={style.profile} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <h2>Projects</h2>
      </div>
      <ul className={style.listing}>
        <li data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <a href="https://github.com/JadlionHD/yuuda">
            <img width="90" className="rounded-circle" src="https://raw.githubusercontent.com/JadlionHD/yuuda/main/.github/images/Poi.png" alt="Yuuda" />
          </a>
        </li>
      </ul>
    </>
  );
}
