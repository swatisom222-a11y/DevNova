import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 transition-colors duration-300'>
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 pt-5 ">

  <div className="flex flex-col md:flex-row items-center justify-between gap-4">

    <div className='text-center'>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        DevNova
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        From Beginner to Developer
      </p>
    </div>

    <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
      <a href="#" className="hover:text-cyan-500 transition">
        Home
      </a>

      <a href="#services" className="hover:text-cyan-500 transition">
        Courses
      </a>

      <a href="#contact-us" className="hover:text-cyan-500 transition">
        Contact
      </a>
    </div>
  </div>


</div>
 <div className="mt-6 px-10 py-3 text-center bg-cyan-600 dark:bg-gray-950 text-white text-sm">
    © 2026 DevNova. All rights reserved.
  </div>
</footer>
  )
}

export default Footer
