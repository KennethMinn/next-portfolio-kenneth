"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Email = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setIsSending(true);
    emailjs
      .sendForm(
        "service_22oq2p9",
        "template_1u7zbkk",
        e.target,
        "AAH-BHDCEH61tD2t0"
      )
      .then(
        (result) => {
          setIsSending(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your email has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input required name="name" id="name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input required name="email" id="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input required name="subject" id="subject" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea required cols={40} rows={10} id="message" name="message">
            {" "}
          </textarea>
        </div>
        <button type="submit" className="form-submit-btn">
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Email;
