import style from "../../styles/style.module.css";
import { BsFillPaletteFill } from "react-icons/bs";

export default function Profile() {
  return (
    <>
      <div id="profile" className={style.profile} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <div id="detail" className={style.detail}>
          <h2>
            Hello world <BsFillPaletteFill />
          </h2>
          <p>
            Hi, my name is{" "}
            <b>
              <u>JadlionHD</u>
            </b>
            , I'm just an web developer that make websites & apps.
          </p>
        </div>
        <img width="180" src="https://avatars.githubusercontent.com/u/48410066?v=4" alt="pfp.png" />
      </div>
    </>
  );
}
