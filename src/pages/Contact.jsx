const Contact = () => {
  
  const handleFormSubmit = (formData) => {
    const formDataInput = Object.fromEntries(formData.entries())
    console.log(formDataInput);
    
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            className="form-control"
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your mesage"
            rows="10"
            name="message"
          />
          <button type="submit" value="send">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
