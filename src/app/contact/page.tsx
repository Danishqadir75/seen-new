import React from "react"
import Image from "next/image"
const page = () => {
  return (
    <div>
      <figure className="md:flex bg-neet-100 rounded-x5 p-20 md:p-300 dark:bg-slate-1000">
        <Image className="w-80 h-60 md:w-60 md:rounded-none rounded-full mx-auto" src="/contact.jpg.jpeg" alt="" width="100" height="512" />
        <div className="pt-6 md:p-40 text-center md:text-left space-y-2">
          <blockquote>
            <p className="text-lg font-large">
              
            Name: Danish Qadir
Phone Number: +92 300 1234567
Email: qadirdanish045@gmail.com

            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              
            </div>
            <div className="text-slate-1000 dark:text-slate-600">
              
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default page