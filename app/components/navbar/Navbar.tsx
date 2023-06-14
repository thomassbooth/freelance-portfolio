'use client'


import Link from "next/link"
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";
import DarkmodeIcon from "./DarkmodeIcon";

const links = [
  { href: '/', label: 'Home'},
  { href: '/about', label: 'About'},
  { href: '/projects', label: 'Projects'},
  { href: '/contact', label: 'Contact'},
]

const Navbar = () => {
  const path = usePathname();
  
  return (
    <motion.header className= 'z-10'
      initial={{ y: '50%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{duration: 0.5}}
      exit={{ opacity: 0 }}>
      <div className="flex items-center  text-[15px] font-bold py-20 justify-between">
        <Link href="/" className="text-3xl  font-bold">
          T B
        </Link>
        <nav className = 'flex items-center'>
          <ul className="[&_li]:ml-4 ml-12 flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="relative" href={link.href}>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className = 'group hover:text-blue-300 transition-colors duration-500'
                >
                  {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="group-hover:bg-blue-300 transition-colors duration-500 absolute left-0 top-full block mt-1 h-[1px] w-full bg-black"
                    />
                  )}
                  {link.label}
                 </motion.div> 
                </Link>
              </li>
            ))}
          </ul>
          <div className = 'px-5'>
            <DarkmodeIcon/>
          </div>
          
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar