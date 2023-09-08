//import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav className="z-[10] flex items-center py-4 shadow-lg bg-white sticky top-0 w-screen">
                <div className="text-xl mx-auto font-mono font-bold">Karnamic</div>
                <div className="nav-links flex justify-center flex-col sm:flex-row">
                    <a href="/" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-black hover:text-white transition duration-500 font-mono">Home</a>
                </div>
                <div className="social-links flex mx-auto">
                    <a href="/" className="text-black mx-4 hover:scale-[1.5] transition duration-300">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="/" className="text-black mx-4 hover:scale-[1.5] transition duration-300">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="text-black mx-4 hover:scale-[1.5] transition duration-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </nav>
        </>
    )
}

/*
<Link to="/projects" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-beige-400 hover:shadow-md transition duration-500 font-mono">Projects</Link>
<Link to="/resources" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-beige-400 hover:shadow-md transition duration-500 font-mono">Resources</Link>
*/                  
