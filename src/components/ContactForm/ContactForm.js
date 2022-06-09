import emailjs from "emailjs-com";
import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  const emailSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ty17fq9",
        "template_05s1scp",
        e.target,
        "smOhK3g97zy3QwCYc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" container px-8 text-white ">
      <h1 className=" text-white text-center">Drop To Your Message</h1>
      <Form onSubmit={emailSend} className=" border p-3 mb-5">
        <fieldset className="border p-3">
          <legend></legend>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTextArea">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              type="password"
              placeholder="Message"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </fieldset>
      </Form>

      {/* <div class="input-group mb-3">
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
          placeholder="Enter your email"
          name="email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div> */}
      {/* <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text bg-transparent border-0 text-white">
            Your Messages
          </span>
        </div>
        <textarea
          class="form-control bg-transparent"
          name="message"
          aria-label="With textarea"
        ></textarea>
      </div> */}
      {/* <button className="btn btn-outline-info btn-lg mb-3">Send Message</button> */}
    </div>
  );
};

export default ContactForm;
