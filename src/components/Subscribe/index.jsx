export default function Subribe() {
  return (
    <div className="subscribe">
      <a name="subscribe" />
      <div className="subscribe_title">DON’T FORGET TO SIGN UP</div>
      <img src="../img/line.png" alt="" />
      <div className="subscribe_description">
        Find out early about all upcoming promotions and new product releases with
        our newsletter.
      </div>
      <form
        className="subscribe_form"
        name="request_information"
        method="POST"
        action="/subscribe.php"
      >
        <div className="subscribe_form_text-field">
          <input
            type="text"
            name="name"
            placeholder="Enter your name....."
            required="required"
          />
          <input
            type="text"
            name="surname"
            placeholder="Enter your surname....."
            required="required"
          />

        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required="required"
        />

        <input
          className="subscribe_form_button"
          type="submit"
          name="submit_btn"
          value="SUBSCRIBE"
        />
      </form>
    </div>
  );
}
