import { Link } from "react-router-dom";
import { CURRENTLINE, ORANGE, PINK } from "../../helpers/color";
import Spinner from "../Spinner";
import ContactOnly from "./ContactOnly";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
// import NotFound from "../../assets/no-found.gif";

const ContactsAll = () => {
  const { filteredContacts, loading, deleteContact } = useContext(ContactContext);
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
            <p className="h3 float-end">
              <Link  to={"/contacts/add"}    className="btn mx-2"  style={{ backgroundColor: PINK }} >
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2" />
              </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? <Spinner /> : (
         <section className="container">
         <div className="row">
         {filteredContacts.length > 0
             ? filteredContacts.map((c) => <ContactOnly   key={c.id}    deleteContact={() => deleteContact(c.id, c.fullname)}    contact={c}/>)
             : (
               <div  className="text-center py-5"  style={{ backgroundColor: CURRENTLINE }}>
                 <p className="h3" style={{ color: ORANGE }}> مخاطب یافت نشد ... </p>
                 <img src={require("../../assets/no-found.gif")}  alt="پیدا نشد"  className="w-25"/>
               </div>
             )}
          </div>
       </section>
      )}
    </>
  );
};

export default ContactsAll;
