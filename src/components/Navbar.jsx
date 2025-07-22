import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const linkedClass = (path) => {
        return `hover:underline ${location.pathname === path ? 'text-purple-500 font-bold':
        'text-pink'}`;
    }
    return (
    <nav className=" bg-gray-800 text-white px-6 py-3">
        <ul className="flex gap-4">
            <li><Link className={linkedClass('/')} to="/">Home</Link></li>
            <li><Link className={linkedClass('/form')} to="/form">Feedback Form</Link></li>
            <li><Link className={linkedClass('/list')} to="/list">Feedback List</Link></li>
        </ul>
        </nav>
    )
}
export default Navbar; 