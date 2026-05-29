import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const scrollBtn = document.getElementById("pageTopBtn");
    const fadeLine = 600;

    const scrollBtnFade = () => {
      if (window.scrollY > fadeLine) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    scrollBtnFade();
    window.addEventListener("scroll", scrollBtnFade);
    return () => window.removeEventListener("scroll", scrollBtnFade);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div id="pageTopBtn" onClick={scrollToTop}>
        <span></span>
      </div>
      <p className="copyrightTxt">
        (C) yogo sakamoto. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;