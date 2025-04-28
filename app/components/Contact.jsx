"use client";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a20c85cf-4e3b-4d5c-a697-732df80bec45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-5 lg:px-8 xl:px-[3%] py-10 md:mt-10 lg:mt-10 text-white"
    >
      <div className="flex items-center">
        <span className="text-4xl md:text-5xl lg:text-6xl mr-5">
          Contact Us
        </span>
        <hr className="flex-1 border-[#fff] border-5" />
      </div>

      <h2 className="text-center text-5xl mt-5">Get In Touch</h2>
      <p className="mt-5 mb-12  text-center  max-w-2xl mx-auto leading-8">
        Have a question, feedback, or just want to connect? We’d love to hear
        from you. At 88chibs, we're always ready to assist with your orders,
        sizing inquiries, collaborations, or anything else you might need.
        Whether you're reaching out about our latest drops or simply want to say
        hello, our team is here for you
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mb-8">
          <input
            type="text"
            placeholder="Please Enter Your Name"
            required
            className="flex-1 p-3 outline-none border-[2px] border-white rounded-md text-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Please Enter Your Email"
            required
            className="flex-1 p-3 outline-none border-[2px] border-white rounded-md text-white"
            name="email"
          />
        </div>
        <div className="text-white">
          <textarea
            placeholder="Please Enter Your Message"
            required
            className="w-full p-4 outline-none border-[2px] border-white rounded-md mb-6"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex justify-between items-center gap-2 text-white rounded-full mx-auto duration-500 cursor-pointer hover:bg-[#ff8c00] border-[2px]"
          >
            Submit
          </button>

          <p className="mt-5">{result}</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
