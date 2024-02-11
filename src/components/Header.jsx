
import { Link } from 'react-router-dom';
import logo from "../assets/images/image2.jpg";

const Header = () => {

 
    return (
      <div className="flex justify-between bg-purple-300 shadow-lg">
        <div className="m-4">
          <img
            className="w-28 h-16 m-2 border-solid"
            src={logo}
          />
         
        </div>
        <div className="flex item-center">
          <ul className="m-4 p-4 flex flex-wrap text-border">
         <li  className="m-1 p-2"><Link to='/'>Home</Link></li>
            <li className="m-1 p-2"><Link to='/about'>About Us</Link></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;