import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="bg-[#1a1225] text-white py-12 px-4 md:px-12 text-center">
     <br />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img src="https://rahulkp15.onrender.com/static/media/contact.411aa947ff95059dd5d7.png" alt="Support" className="w-72 md:w-96" />
        <img src="https://rahulkp15.onrender.com/static/media/contact1.c6199ca74f4e653131db.png" alt="Communication" className="w-72 md:w-96" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Location */}
        <div className="bg-[#322b45] p-6 rounded-lg text-center">
          <FaLinkedin  className="text-3xl mx-auto text-[#ff9a8c]" />
          <h3 className="text-xl font-bold mt-4"> LinkedIn Profile</h3>
          <p className="mt-2 text-[#f7b4a5]"><a href="https://www.linkedin.com/in/abhai-ks">ABHAI KS</a></p>
        </div>

        {/* Email */}
        <div className="bg-[#322b45] p-6 rounded-lg text-center">
          <FaEnvelope className="text-3xl mx-auto text-[#ff9a8c]" />
          <h3 className="text-xl font-bold mt-4">EMAIL ME @</h3>
          <p className="mt-2 text-[#f7b4a5]">abhaiks07@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="bg-[#322b45] p-6 rounded-lg text-center">
          <FaPhone className="text-3xl mx-auto text-[#ff9a8c]" />
          <h3 className="text-xl font-bold mt-4">CALL ME @</h3>
          <p className="mt-2 text-[#f7b4a5]">(+91)-8891633128</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;