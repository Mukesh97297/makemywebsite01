import '../CustomerCare.css'
import Lottie from 'lottie-react'
import support from '../animation/CustomerCare.json'
import ServiceDelivery from './ServiceDelivery'
import { Formik } from "formik";
import * as Yup from "yup"
import ReCAPTCHA from "react-google-recaptcha";
function CustomerCare() {
    function onChange(value) {
        console.log("Captcha value:",value );
      }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Please complete this required field."),
        lastName: Yup.string()
            .required("Please complete this required field."),
        phone: Yup.string()
            .required("Please complete this required field.")
            .min(50, "Must contain only numbers, +()-. and x."),
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Please complete this required field."),
        issue: Yup.string()
            .required("Please complete this required field."),
    });
    return (
        <div>
            <div className="container-fluid" id="about-container">
                <div className='row paragraph1'>
                    <div className="col-md-6 paragraph">
                        <h1>
                            Customer Care
                        </h1>
                        <div className='red-devider-top'></div>
                        <h2>
                            An End-To-End Service Aimed At Managing Your Tech-Driven Platforms
                        </h2>
                        <span className='shape-about-1'></span>
                        <span className='shape-about-2'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundColor: "#F5F5F5" }}>
                <div className='container customer'>
                    <div className='row justify-content-center'>
                        <div className='Customer-Care'>
                            <h1>Hi! Need Some Help?</h1>
                            <p>Question not answered yet? We are here to help!</p>
                        </div>
                    </div>
                    <Formik initialValues={{ email: "", lastName: "", name: "", issue: "", phone: "" }} validationSchema={validationSchema}>
                        {({ values, errors, touched, handleChange, handleBlur, }) => {
                            return (
                                <form>
                                    <div className='row justify-content-center  input-fields'>
                                        <div className='col-md-6 input-fields1'>
                                            <label for="inputEmail4" className='form-span'>First Name<span className='required'>*</span></label>
                                            <input className="form-control" value={values.name} onChange={handleChange("name")} onBlur={handleBlur("name")} />
                                            <div className='redalerterror'>{touched.name && errors.name}</div>
                                        </div>
                                        <div className='col-md-6 input-fields1'>
                                            <label for="inputEmail4" className='form-span'>Last Name<span className='required'>*</span></label>
                                            <input type="text" className="form-control" value={values.lastName} onChange={handleChange("lastName")} onBlur={handleBlur("lastName")} />
                                            <div className='redalerterror'>{touched.lastName && errors.lastName}</div>
                                        </div>
                                        <div className='col-md-6 input-fields1'>
                                            <label for="inputEmail4" className='form-span'>Phone Number<span className='required'>*</span></label>
                                            <input type="text" className="form-control" value={values.phone} onChange={handleChange("phone")} onBlur={handleBlur("phone")} />
                                            <div className='redalerterror'>{touched.phone && errors.phone}</div>
                                        </div>
                                        <div className='col-md-6 input-fields1'>
                                            <label for="inputEmail4" className='form-span'>Email<span className='required'>*</span></label>
                                            <input type="text" className="form-control" value={values.email} onChange={handleChange("email")} onBlur={handleBlur("email")} />
                                            <div className='redalerterror'>{touched.email && errors.email}</div>
                                        </div>
                                        <div className='col-md-12 input-fields1'>
                                            <label for="inputEmail4" className='form-span'>Issue<span className='required'>*</span></label>
                                            <input type="text" className="form-control" value={values.issue} onChange={handleChange("issue")} onBlur={handleBlur("issue")} />
                                            <div className='redalerterror'>{touched.issue && errors.issue}</div>
                                        </div>
                                        <div className='col-md-12 input-fields1'>
                                            <label for="inputEmail4" className='form-span'>Details</label>
                                            <textarea type="text" className="form-control" style={{ height: "70px" }}></textarea>
                                        </div>
                                        <div className='col-md-12'>
                                            <ReCAPTCHA
                                                sitekey=""
                                                onChange={onChange}
                                            />,
                                        </div>
                                        <div className='col-md-12 input-fields1'>
                                            <input type="Submit" className='btn submit-btn' value='Submit' />
                                        </div>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
            <div className='container-fluid support-higly'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 CustomerCare-section mb-5'>
                            <p>Support is highly crucial when running a website for your business and it is not feasible to handle all of it by yourself. Offering support for a domain and running its various functionalities optimally requires skill, expertise and experience. Holistic support for your website involves monthly management involving resolution of security issues, updating the plugins, changes in website as per demand, dynamic platform establishment, and making new updates as per search engine’s upgraded algorithms.</p>
                            <p>We offer monthly support for a website that requires to be managed more closely and efficiently and also offer other support packages depending on the requirements of your business and client demands. We truly believe that support is offered in its real essence when it fulfils the need of the hour which is why our custom-tailored packages aim at reaching out to everyone and meeting you where you are!</p>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <Lottie animationData={support} loop={true} autoplay={true} style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='col-lg-12 CustomerCare-section pt-5'>
                            <div >
                                <h3 className='why-support'>Why support is essential to run a website optimally:</h3>
                                <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i><span className='ml-1'> Why support is essential to run a website optimally:</span></p>
                                <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-1'>Allows you to focus on business free of technical glitches</span></p>
                                <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-1'>Keeps your website and domain up to date</span></p>
                                <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-1'>Offers a fully optimized platform helping businesses run at full potential</span></p>
                                <p className='d-flex'><i className="fa-solid fa-circle-check brand-i"></i> <span className='ml-1'>Regular support ensures no issue or bug goes unaddressed</span></p>
                                <p className='d-flex'><span className='ml-1'>Under this service, we have you covered for any updates you need to make on your website. Be it sharing a blog post frequently, or updating your portfolio, our team will be there to help you. </span></p>
                                <p className='d-flex'><span className='ml-1'>Feel free to enquire about our monthly support packages by giving us a call or emailing us.</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceDelivery />
        </div>
    )
}

export default CustomerCare