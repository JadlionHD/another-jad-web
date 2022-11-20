import { useEffect, useState } from "react";
import style from "../styles/style.module.css";
// import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPaletteFill } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Profile from "./components/Profile";
import Tech from "./components/Tech";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Projects from "./components/Projects";
import Sosmed from "./components/Sosmed";

export interface ScrollType {
  isDown: boolean;
  deltaY: number;
}

function App() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isScrollDown, setScrollDown] = useState<ScrollType>();
  const [posisi, setPos] = useState<number>(1);

  const loader = document.querySelector(".loader");
  const loadCube = document.querySelector(".loading-cube");
  const rootDiv = document.querySelector("#root");
  window.addEventListener("mousewheel", (event) => {
    let ev = event as WheelEvent;
    if (ev.deltaY > 0) {
      setScrollDown({ isDown: true, deltaY: ev.deltaY });
    } else {
      setScrollDown({ isDown: false, deltaY: ev.deltaY });
    }
  });

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      loadCube?.classList.remove("loader-anim");
      loadCube?.classList.add("loader-big");
      setTimeout(() => {
        rootDiv?.classList.add("loader-appear");
        setLoading(false);
        loadCube?.classList.add("cube-hide");
        loadCube?.classList.remove("loader-big");
      }, 3000);
    }, 3000);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    if (isScrollDown?.isDown) {
      if (posisi === 5) return;
      setPos(posisi + 1);
    } else {
      if (posisi === 1) return;
      setPos(posisi - 1);
    }
  }, [isScrollDown]);

  useEffect(() => {
    if (isLoading) return;

    setLoading(true);
    rootDiv?.classList.remove("loader-appear");
    loadCube?.classList.remove("cube-hide");
    loadCube?.classList.add("loader-big");

    setTimeout(() => {
      setLoading(false);
      rootDiv?.classList.add("loader-appear");
      loadCube?.classList.remove("loader-big");
      loadCube?.classList.add("cube-hide");
    }, 3000);
  }, [posisi]);

  const handlePage = (pos: number) => {
    switch (pos) {
      case 1: {
        return (
          <>
            <Profile />
            <FiChevronDown className={style.btnDown} onClick={() => setPos(posisi + 1)} />
          </>
        );
      }
      case 2: {
        return (
          <>
            <FiChevronUp className={style.btnUp} onClick={() => setPos(posisi - 1)} />
            <Tech />
            <FiChevronDown className={style.btnDown} onClick={() => setPos(posisi + 1)} />
          </>
        );
      }
      case 3: {
        return (
          <>
            <FiChevronUp className={style.btnUp} onClick={() => setPos(posisi - 1)} />
            <Projects />
            <FiChevronDown className={style.btnDown} onClick={() => setPos(posisi + 1)} />
          </>
        );
      }
      case 4: {
        return (
          <>
            <FiChevronUp className={style.btnUp} onClick={() => setPos(posisi - 1)} />
            <Sosmed />
            <FiChevronDown className={style.btnDown} onClick={() => setPos(posisi + 1)} />
          </>
        );
      }
      case 5: {
        return (
          <>
            <Button style={{ position: "absolute", bottom: "10px", left: "calc(50% - (106.39px / 2))" }} onClick={() => setPos(1)} variant="light">
              Back to top
            </Button>
            <FiChevronUp className={style.btnUp} onClick={() => setPos(posisi - 1)} />
            <h1 style={{ position: "absolute", top: "calc(50% - (64px / 2))", left: "calc(50% - (64px / 2))", fontSize: "64px" }}>{"<3"}</h1>
          </>
        );
      }
      default: {
        return <>Page {pos}</>;
      }
    }
  };

  if (!isLoading) {
    return (
      <>
        <Container>{handlePage(posisi)}</Container>
      </>
    );
  } else return null;
}

export default App;
