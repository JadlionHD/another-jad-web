import style from "../../styles/style.module.css";
import { BsDiscord, BsYoutube, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function Sosmed() {
  return (
    <>
      <div id="tech" className={style.profile} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <h2>Social Media</h2>
      </div>
      <ul className={style.sosmedListing}>
        <li data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <Button variant="light" href="https://discord.gg/zCr2jeZ">
            <BsDiscord fontSize={18} /> Discord
          </Button>
        </li>
        <li data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <Button variant="light" href="https://www.youtube.com/channel/UCrXvTWmb2AnWGKPCsFIn1_A">
            <BsYoutube fontSize={18} /> Youtube
          </Button>
        </li>
        <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <Button variant="light" href="https://instagram.com/hendora_g">
            <BsInstagram fontSize={18} /> Instagram
          </Button>
        </li>
        <li data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <Button variant="light" href="https://github.com/JadlionHD">
            <BsGithub fontSize={18} /> Github
          </Button>
        </li>
        <li data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <Button variant="light" href="https://twitter.com/JadlionHD">
            <BsTwitter fontSize={18} /> Twitter
          </Button>
        </li>
      </ul>
    </>
  );
}
