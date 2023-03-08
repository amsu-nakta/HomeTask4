export default function About() {
  return (
    <div className="about">

      <img className="about_pic" src="../img/about.png" alt="img" />
      <div className="about_desk">
        <a name="about" />
        <div className="about_desk_subtitle">ABOUT US</div>
        <div className="about_desk_title">
          Interioris The Will of An Epoch Mextreo
        </div>
        <div className="about_desk_description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form injected humour, or
          randomised words which don't look even slightly believable.If you are
          going to use a passage of Lorem Ipsum, sure there isn't anything
          embarrassing hidden the middleof text. All the Lorem Ipsum generators
          on the Internettend to repeat predefined chunks as necessary,making
          this the first true generator on the Internet.
        </div>
        <a className="about_desk_button" href="https://uk.wikipedia.org">
          LEARN MORE
        </a>
      </div>
    </div>
  );
}
