import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import mail_sent_blue from "./imgs/mail_sent_blue.svg";

import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const [showForm, setShowForm] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uz76obu",
        "template_i6y41pd",
        form.current,
        "qePr5yEnL76eNH_wd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowForm(false);
  };

  const focusName = (e) => {
    document.getElementById("name").focus();
  };

  const focusEmail = (e) => {
    document.getElementById("email").focus();
  };

  const focusText = (e) => {
    document.getElementById("text").focus();
  };

  const clickEmail = () => {
    window.open("mailto:shift0965@gmail.com");
  };

  const clickPhone = () => {
    window.open("sms:+886965013910");
  };

  return (
    <section id="contact" className="container">
      <div className="head md:absolute text-tx-500 md:text-left xl:-left-16 md:-left-5 pb-2">
        <h2
          className={`${
            props.isActive
              ? ["opacity-100 translate-x-0"]
              : ["opacity-0 -translate-x-28"]
          } duration-700`}
        >
          Contact
        </h2>
        <div className="md:mt-8 mt-2 text-light pr-5">
          <div className="contactBox" onClick={clickEmail}>
            <AiOutlineMail className="icon md:text-5xl " />
            <h5 className="duration-300"> shift0965@gmail.com</h5>
          </div>

          <div className="contactBox" onClick={clickPhone}>
            <BsTelephoneFill className="icon md:text-4xl " />
            <h5 className="duration-300">+886 0965013910</h5>
          </div>
        </div>
      </div>

      <div
        className={`${
          props.isActive
            ? ["opacity-100 md:-translate-x-1/2"]
            : ["opacity-0 md:translate-x-0 translate-x-28"]
        }
                             md:absolute md:left-3/4 2xl:w-96 md:w-80 w-72 duration-700`}
      >
        {showForm ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" text-left px-4 py-5 flex flex-col duration-300"
          >
            <h4 className=" ml-2 md:mb-2 font-bold">Let's talk</h4>
            <div className="inputBox">
              <input
                type="text"
                id="name"
                name="user_name"
                required="required"
                className="input"
              />
              <span onClick={focusName}>Name</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                id="email"
                name="user_email"
                required="required"
                className="input"
              />
              <span onClick={focusEmail}>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                type="text"
                id="text"
                name="message"
                rows="5"
                required="required"
                className="input"
              />
              <span onClick={focusText}>Message</span>
            </div>
            <input
              type="submit"
              value="Send"
              className=" w-1/2 mt-4 rounded-lg bg-secondary-second h-8 mx-auto hover:bg-secondary duration-300 text-base"
            />
          </form>
        ) : (
          <div className="w-full flex flex-col justify-center items-center duration-300">
            <h4 className=" mb-2 mt-10">Sent successfully</h4>
            <h4 className=" mb-5">Thank you!</h4>
            <img src={mail_sent_blue} alt="mail sent" className=" w-2/4 mb-3" />

            <button
              onClick={() => setShowForm(true)}
              className="  rounded-2xl py-2 px-8 inline-block mt-8 duration-300 
                                                     border-[1px] border-secondary text-secondary hover:text-tx hover:border-transparent hover:bg-secondary-second md:text-sm text-sm"
            >
              Send a new one
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
