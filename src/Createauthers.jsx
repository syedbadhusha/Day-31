import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

function Createauthers() {
    const navigate = useNavigate()
    const authorFormik = useFormik({
      initialValues: {
        name: "",
        birthdate: "",
        shortbiography: "",
      },
      validate: (values) => {
        let error = {};
        if (values.name == "") {
          error.name = "Please Enter author's Name";
        }
        if (values.birthdate == "") {
          error.birthdate = "Please Enter author's birth date";
        }
        if (values.shortbiography == "") {
          error.shortbiography = "Please Enter author's Short biography";
        }
        return error;
      },
      onSubmit: async (values) => {
        await axios.post('https://fsdmanagement2.free.beeceptor.com/api/author',values)
        // console.log(values)
        navigate('/')
      },
    });
    return (
      <form
        className="container"
        style={{ backgroundColor: "salmon" }}
        onSubmit={authorFormik.handleSubmit}
      >
        <h5 className="text-center">AUTHOR DETAILS</h5>
        <ol>
          <li className="line">
            <label htmlFor="name" className="formLable">
              AUTHOR NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={authorFormik.values.name}
              onChange={authorFormik.handleChange}
              placeholder="Name"
              style={{
                borderColor:
                  authorFormik.getFieldMeta("name").error &&
                  authorFormik.getFieldMeta("name").touched &&
                  "green",
              }}
            />
  
            {authorFormik.getFieldMeta("name").error &&
              authorFormik.getFieldMeta("name").touched && (
                <span style={{ color: "white" }}>
                  {authorFormik.getFieldMeta("name").error}
                </span>
              )}
          </li>
          <li className="line">
            <label className="formLable" htmlFor="birthdate">
              AUTHOR BIRTH DATE
            </label>
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              value={authorFormik.values.birthdate}
              onChange={authorFormik.handleChange}
              placeholder="Birth Date"
              style={{
                borderColor:
                  authorFormik.getFieldMeta("birthdate").error &&
                  authorFormik.getFieldMeta("birthdate").touched &&
                  "green",
              }}
            />
            {authorFormik.getFieldMeta("birthdate").error &&
              authorFormik.getFieldMeta("birthdate").touched && (
                <span style={{ color: "white" }}>
                  {authorFormik.getFieldMeta("birthdate").error}
                </span>
              )}
          </li>
          <li className="line">
            <label htmlFor="shortbiography" className="formLable">
              SHORT BIOGRAPHY
            </label>
            <textarea
              rows="3"
              className="form-control"
              id="shortbiography"
              name="shortbiography"
              value={authorFormik.values.shortbiography}
              onChange={authorFormik.handleChange}
              placeholder="Short Biography"
              style={{
                borderColor:
                  authorFormik.getFieldMeta("shortbiography").error &&
                  authorFormik.getFieldMeta("shortbiography").touched &&
                  "green",
              }}
            />
            {authorFormik.getFieldMeta("shortbiography").error &&
              authorFormik.getFieldMeta("shortbiography").touched && (
                <span style={{ color: "white" }}>
                  {authorFormik.getFieldMeta("shortbiography").error}
                </span>
              )}
          </li>
        </ol>
        <div className="d-flex justify-content-start p-5">
          <div>
            <Link to="/" type="button" className="submitbtn text-center">
              BACK
            </Link>
          </div>
          <div>
            <button type="submit" className="submitbtn text-center">
              SAVE
            </button>
          </div>
        </div>
      </form>
    );
  }

export default Createauthers