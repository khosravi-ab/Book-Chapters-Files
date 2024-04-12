import { Link } from "react-router-dom";
import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/color";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { useFormik } from "formik";
import { contactSchema } from "../../validations/contactValidation";

const AddContact = () => {
  const { loading, contact, onContactChange, groups, createContact } =useContext(ContactContext);
  
  const formik = useFormik({
    initialValues: {
      fullname: "",
      photo: "",
      mobile: "",
      email: "",
      job: "",
      group: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log(values);
      createContact(values);
    },
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img 
              src={require("../../assets/man-taking-note.png")}   alt="تصویر کاریکاتور ساخت مخاطب جدید"
              height="400px"
              style={{ position: "absolute", zIndex: "-1", top: "130px", left: "100px", opacity: "50%", }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p   className="h4 fw-bold text-center"        style={{ color: GREEN }}  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">

                {/* {errors?.map((error, index) => (
                    <p key={index} className="text-danger">
                      {error.message}
                    </p>
                ))} */}

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                      <input   id="fullname"    name="fullname"          type="text"           className="form-control"
                                  placeholder="نام و نام خانوادگی"               
                                              //  required={true}
                                              value={formik.values.fullname}                            onChange={formik.handleChange}
                                              onBlur={formik.handleBlur}
                      />
                      {formik.touched.fullname && formik.errors.fullname ? (
                        <div className="text-danger">
                          {formik.errors.fullname}
                        </div>
) : null}


                    </div>
                    <div className="mb-2">
                      <input   id="photo"   name="photo"               type="text"          className="form-control"
                                  placeholder="آدرس تصویر"                                 
                                    // required={true}
                                    value={formik.values.photo}                             onChange={formik.handleChange}     
                                    onBlur={formik.handleBlur}            
                      />
                      {formik.touched.photo && formik.errors.photo ? (<div className="text-danger">    {formik.errors.photo} </div>
) : null}

                    </div>
                    <div className="mb-2">
                      <input   id="mobile" name="mobile"               type="number"    className="form-control"
                                  placeholder="شماره موبایل"                               
                                    //  required={true}
                                    value={formik.values.mobile}                           onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                      />
                      {formik.touched.mobile && formik.errors.mobile ? (<div className="text-danger">    {formik.errors.mobile} </div>
) : null}

                    </div>
                    <div className="mb-2">
                      <input    id="email"  name="email"                type="email"        className="form-control"
                                   placeholder="آدرس ایمیل"                               
                                      // required={true}
                                      value={formik.values.email}                             onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (<div className="text-danger">    {formik.errors.email} </div>
) : null}

                    </div>
                    <div className="mb-2">
                      <input    id="job"    name="job"                   type="text"        className="form-control"
                                    placeholder="شغل"                                         
                                    //  required={true}
                                    value={formik.values.job}                                onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                      />
                      {formik.touched.job && formik.errors.job ? (<div className="text-danger">    {formik.errors.job} </div>
) : null}

                    </div>
                    <div className="mb-2">
                      <select   id="group"  name="group"             
                      //  required={true}  
                         className="form-control" 
                         value={formik.values.group}                             onChange={formik.handleChange}    
                         onBlur={formik.handleBlur}                           
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))
                        }
                      </select>
                      {formik.touched.group && formik.errors.group ? (<div className="text-danger">    {formik.errors.group} </div>
) : null}
                    </div>
                    <div className="mx-2">
                      <input       type="submit"                                         className="btn"
                                      style={{ backgroundColor: PURPLE }}       value="ساخت مخاطب"
                      />
                      <Link        to={"/contacts"}                  className="btn mx-2"
                                      style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;
