import SearchContact from "./contacts/SearchContact";
import { PURPLE } from "../helpers/color";
import Colorfull from "../hoc/Colorfull";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
               <i className="fas fa-id-badge" style={{color: PURPLE}} />{" "}
                 وب اپلیکیشن مدیریت{"  "}
               <span style={{ color: PURPLE }}>مخاطبین</span>
            </div>
            
          </div>
          <div className="col">
          {location.pathname === "/contacts" ? (
            <div className="col">
              <SearchContact />
            </div>
          ) : null}


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Colorfull(Navbar);
