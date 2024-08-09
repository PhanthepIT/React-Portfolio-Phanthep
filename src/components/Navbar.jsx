import logo from "../assets/PAO.png";
import { FaGithub, FaFacebook, FaInstagram, FaHackerrank } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <motion.img 
                    className="mx-2 w-20"
                    src={logo} 
                    alt="logo" 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                />
            </div>
            <div className="flex items-center justify-center space-x-4 text-2xl">
                <motion.a 
                    href="https://github.com/PhanthepIT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                >
                    <FaGithub aria-label="GitHub" />
                </motion.a>
                <motion.a 
                    href="https://www.hackerrank.com/profile/phanthep_s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                >
                    <FaHackerrank aria-label="HackerRank" />
                </motion.a>
                <motion.a 
                    href="https://www.facebook.com/phanthep.supaveerasatien/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                >
                    <FaFacebook aria-label="Facebook" />
                </motion.a>
                <motion.a 
                    href="https://instagram.com/paoverycool/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                >
                    <FaInstagram aria-label="Instagram" />
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
