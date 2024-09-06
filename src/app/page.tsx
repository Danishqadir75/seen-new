import React from "react"
import Image from "next/image"
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home.jpg.jpeg" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          This charming house is surrounded by a lush garden with greenery all around.
         The exterior walls are clean and colorful. and there a lovely small porch at the front where you can relax.
          Inside the spacious living room is filled with natural light and furnished with modern decor.
           The kitchen is equipped with state-of-the-art appliances and features beautiful countertops and ample space.
            The house includes three comfortable bedrooms. each with plenty of space and natural light.
             The master bedroom features a large closet and a beautifully designed en-suite bathroom.
              At the back. theres a cozy patio and an outdoor dining area . perfect for barbecue parties.
               Located in a serene neighborhood. this home offers a peaceful and comfortable living experience.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Danish house
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page