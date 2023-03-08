import Links from "./links";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_company-desc">
        <img className="header_logo" src="../img/logo.png" alt="Logo" />
        But i must explain to you all this mistaken idea of dencouncing
        pleasure.
      </div>
      <div className="footer_main-links">
        <Links/>
      </div>
      <div className="footer_socials">
        Follow Us
        <div className="footer_socials_links">
          <a href="https://tproger.ru/quiz/proger-type/">
            <img src="../img/fb.png" />
          </a>
          <a href="https://quizterra.com/ru/kakoj-ty-vid-hleba">
            <img src="../img/tw.png" />
          </a>
          <a href="https://kfund-media.com/test-yakyj-vy-kit/">
            <img src="../img/inst.png" />
          </a>
          <a href="https://kfund-media.com/test-yakyj-vy-kit/">
            <img src="../img/in.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
