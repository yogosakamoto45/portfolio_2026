import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("isScrolled", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    const header = document.querySelector("header");
    if (target && header) {
      const headerH = header.offsetHeight;
      const position = target.offsetTop - headerH;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="topInner">
        <div className="logo">
          <a href="#" onClick={scrollToTop}>
            <img src="img/logo-ys.svg" alt="yogo sakamoto" />
          </a>
        </div>
        <div className="headBnr">
          <h1>WEB制作実績｜都内のUI/UXデザイナー｜Yogo Sakamoto</h1>
          <nav>
            <ul className="naviGlobal">
              <li><a href="#about"   onClick={(e) => scrollToSection(e, "#about")}>ABOUT</a></li>
              <li><a href="#skills"  onClick={(e) => scrollToSection(e, "#skills")}>SKILLS</a></li>
              <li><a href="#works"   onClick={(e) => scrollToSection(e, "#works")}>WORKS</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;