let quickLinks = [
  "Quick Links",
  "About Our Company",
  "Services WE provide",
  "Career & Opportunity, ",
  "Privacy & policy",
  "Contact US",
];
let companyLinks = [
  "Company",
  "About Company",
  "Our Testimonials",
  "Latest News",
  "Our misson",
  "Get a free Quot",
];
let contactLunks = [
  "Sagrada Familia, Herba",
  "Street Front USA",
  "brandoxide@gmail.com",
  "	002-568423591",
];

export default function Links() {
  return (
    <>
      <div className="footer_main-links_col">
        {quickLinks.map((el) => (
          <a href="#" key={el}>
            {el}
          </a>
        ))}
      </div>
      <div className="footer_main-links_col">
        {companyLinks.map((el) => (
          <a href="#" key={el}>
            {el}
          </a>
        ))}
      </div>
      <div className="footer_main-links_col">
        {contactLunks.map((el) => (
          <a href="#" key={el}>
            {el}
          </a>
        ))}
      </div>
    </>
  );
}
