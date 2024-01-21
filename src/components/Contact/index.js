import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
// import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import XIcon from '@mui/icons-material/X';



export default function Contact(){ 
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f7ex5px', 'template_nwgy6mn', form.current, 'JZNdHjqwiqgfbbIWV')
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully!");
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });

      })
      .catch((error) => {
        console.error(error.text);
        toast.error("Error sending email. Please try again later.");
      });
  };
  return (
    <div
      id="contact"
      className="flex text-center max-md:mb-10 flex-col gap-12 mt-10 min-h-screen overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex flex-row  max-md:flex-col ">
        <div className="flex-auto  w-32 pl-10 max-md:w-[95%] overflow-visible">
          <form className="slide-up" ref={form} onSubmit={sendEmail}>
            <label class="block mb-2 text-2xl font-semibold mt-3  text-white ">
              Get in Touch
            </label>
            <hr className="border-cyan-700  w-1/3 mx-auto bg-cyan-700" />
            <div class="flex pt-9">
              <span class="inline-flex items-center px-3 text-sm  border border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <PersonIcon />
              </span>
              <input
                // disabled={mailSent}
                // readOnly={mailSent}
                id="username"
                required
                type="text"
                value={formData.user_name}
                onChange={handleInputChange}
                name="user_name"
                class="rounded-none rounded-r-lg  border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name"
              />
            </div>
            <div class="flex pt-9">
              <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <AlternateEmailIcon />
              </span>
              <input
                // disabled={mailSent}
                // readOnly={mailSent}
                id="emails"
                required
                minLength={5}
                type="email"
                value={formData.user_email}
                onChange={handleInputChange}
                name="user_email" 
                class="rounded-none rounded-r-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <textarea
              id="messages"
              // disabled={mailSent}
              // readOnly={mailSent}
              rows="4"
              name="message"
              required
              minLength={10}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              class="block h-40 text-white mt-10 p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 resize-none"
            ></textarea>
             <div>
                  <button type="submit" value="Send" className="bg-blue-400 px-4 hover:bg-orange-950 rounded-md mt-3 py-2">Send</button>
             </div>
          </form>
        </div>
        <div className="flex-auto w-80 max-md:w-full  flex flex-col justify-center text-center items-center  gap-1">
          <div data-aos={"fade-left"}>
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              style={{ width: "350px" }}
            />
          </div>
          <div className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <div data-aos={"slide-up"} className="text-center ">
            <div className="text-center mt-2 text-3xl max-md:text-2xl font-bold">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                onClick={() =>
                  window.open("https://github.com/ansh1423", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open("https://www.linkedin.com/in/anshyadav-merndeveloper/", "_blank")
                }
              >
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open("https://twitter.com/ErAnshYadav1", "_blank")
                }
              >
                <XIcon className="cursor-pointer hover:scale-105" />
              </div>
            
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500 ">
              <span className=" pl-1 ">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2023 Ansh Yadav</span>
            </div>
          </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
 };