import React from "react";

const ContactForm = () => {
  return (
    <div className=" container px-8 text-white ">
      <h1 className=" text-white text-center">Drop Me To Your Message</h1>

      <div class="input-group mb-3">
        <div class="input-group-append">
          <span
            class="input-group-text bg-transparent text-white border-0"
            id="basic-addon2"
          >
            @example.com
          </span>
        </div>
        <input
          type="text"
          class="form-control  bg-transparent"
          placeholder="Enter your gmail"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text bg-transparent border-0 text-white">
            Your Messages
          </span>
        </div>
        <textarea
          class="form-control bg-transparent"
          aria-label="With textarea"
        ></textarea>
      </div>
      <button className="btn btn-outline-info btn-lg mb-3">Send Message</button>
    </div>
  );
};

export default ContactForm;
