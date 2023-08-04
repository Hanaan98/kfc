import React from "react";

function Footer() {
  return (
    <div className="bg-[#1c1816] px-5 flex flex-col py-5 gap-11 lg:px-32 lg:py-10 ">
      <div class="flex items-center flex-col justify-center gap-5 lg:flex-row">
        <img src="/logo.png" alt="" class="w-auto h-auto object-cover " />
        <span className="border-r border-white h-10 hidden lg:block"></span>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-lg text-white">Find us on</p>
          <div className="flex gap-3 lg:gap-6 items-center justify-center">
            <img
              src="/Untitled design (27).png"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <img
              src="/Untitled design (26).png"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <img
              src="/Untitled design (25).png"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-5 lg:flex-row">
        <div className="flex justify-between gap-2 ">
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-lg font-bold lg:text-xl">Information</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <h2 className="text-[#ffffffd2] text-md lg:text-lg">About Us</h2>
              </li>
              <li>
                <h2 className="text-[#ffffffd2] text-md lg:text-lg">Mitao Bhook</h2>
              </li>
              <li>
                <h2 className="text-[#ffffffd2] text-md lg:text-lg">
                  Mitao Bhook - Scholarship
                </h2>
              </li>
              <li>
                <h2 className="text-[#ffffffd2] text-md lg:text-lg">Privacy Policy</h2>
              </li>
              <li>
                <h2 className="text-[#ffffffd2] text-md lg:text-lg">Careers</h2>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-lg font-bold lg:text-xl">Locations</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <h2 className="text-[#ffffffd2] text-md lg:text-lg">Contact Us</h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-lg font-bold lg:text-xl">Get in Touch</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-[#ffffffd2] text-md lg:text-lg">Terms & Conditions</h2>
            </li>
          </ul>
        </div>
        <div className="flex  gap-3 lg:flex-col">
          <img src="/app-store.png" alt="" className="w-36 object-cover" />
          <img src="/google-store.png" alt="" className="w-36 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
