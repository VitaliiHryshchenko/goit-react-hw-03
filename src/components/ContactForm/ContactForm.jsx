const ContactForm = () => {
  const heydleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>ContactForm</h2>
      <form onSubmit={heydleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" placeholder="" />
        </label>
        <label>
          <span>Number</span>
          <input type="text" placeholder="" />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
