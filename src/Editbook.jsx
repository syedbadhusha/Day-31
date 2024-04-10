import { useFormik } from "formik";
import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Editbook() {
    const {id} = useParams()
    const [selectedBook,setSelectedBook] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
      async function getdata() {
        const response = await axios.get(
          `https://fsdmanagement2.free.beeceptor.com/api/book/${id}`
        );
        const axiosdata = response.data;
        // console.log(axiosdata)
        setSelectedBook(axiosdata);
      }
      getdata();
    }, []);
    const bookFormik = useFormik({
        enableReinitialize:true,
        initialValues: {
          title: selectedBook.title,
          author: selectedBook.author,
          ISBNNumber: selectedBook.ISBNNumber,
          publicationdate: selectedBook.publicationdate
        },
        validate: (values) => {
          let error = {};
          if (values.title == "") {
            error.title = "Please Enter title";
          }
          if (values.author == "") {
            error.author = "Please Enter author";
          }
          if (values.ISBNNumber == "") {
            error.ISBNNumber = "Please Enter author";
          }
          if (values.publicationdate == "") {
            error.publicationdate = "Please Enter author";
          }
          return error;
        },
        onSubmit: async (values) => {
          await axios.put(`https://fsdmanagement2.free.beeceptor.com/api/book/${id}`,values)
          navigate('/')
        },
      });
      return (
        <form
          className="container"
          style={{ backgroundColor: "salmon" }}
          onSubmit={bookFormik.handleSubmit}
        >
          <h5 className="text-center">BOOK DETAILS</h5>
          <ol>
            <li className="line">
              <label htmlFor="title" className="formLable">
                BOOK TITLE
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={bookFormik.values.title}
                onChange={bookFormik.handleChange}
                placeholder="book title"
                style={{
                  borderColor:
                    bookFormik.getFieldMeta("title").error &&
                    bookFormik.getFieldMeta("title").touched &&
                    "green",
                }}
              />
    
              {bookFormik.getFieldMeta("title").error &&
                bookFormik.getFieldMeta("title").touched && (
                  <span style={{ color: "white" }}>
                    {bookFormik.getFieldMeta("title").error}
                  </span>
                )}
            </li>
            <li className="line">
              <label className="formLable" htmlFor="author">
                AUTHOR NAME
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={bookFormik.values.author}
                onChange={bookFormik.handleChange}
                placeholder="Author Name"
                style={{
                  borderColor:
                    bookFormik.getFieldMeta("author").error &&
                    bookFormik.getFieldMeta("author").touched &&
                    "green",
                }}
              />
              {bookFormik.getFieldMeta("author").error &&
                bookFormik.getFieldMeta("author").touched && (
                  <span style={{ color: "white" }}>
                    {bookFormik.getFieldMeta("author").error}
                  </span>
                )}
            </li>
            <li className="line">
              <label htmlFor="ISBNNumber" className="formLable">
                ISBN NUMBER
              </label>
              <input
                type="text"
                id="ISBNNumber"
                name="ISBNNumber"
                value={bookFormik.values.ISBNNumber}
                onChange={bookFormik.handleChange}
                placeholder="ISBN Number"
                style={{
                  borderColor:
                    bookFormik.getFieldMeta("ISBNNumber").error &&
                    bookFormik.getFieldMeta("ISBNNumber").touched &&
                    "green",
                }}
              />
              {bookFormik.getFieldMeta("ISBNNumber").error &&
                bookFormik.getFieldMeta("ISBNNumber").touched && (
                  <span style={{ color: "white" }}>
                    {bookFormik.getFieldMeta("ISBNNumber").error}
                  </span>
                )}
            </li>
            <li className="line">
              <label htmlFor="publicationdate" className="formLable">
                AUTHOR NAME
              </label>
              <input
                type="text"
                id="publicationdate"
                name="publicationdate"
                value={bookFormik.values.publicationdate}
                onChange={bookFormik.handleChange}
                placeholder="Publication Date"
                style={{
                  borderColor:
                    bookFormik.getFieldMeta("publicationdate").error &&
                    bookFormik.getFieldMeta("publicationdate").touched &&
                    "green",
                }}
              />
              {bookFormik.getFieldMeta("publicationdate").error &&
                bookFormik.getFieldMeta("publicationdate").touched && (
                  <span style={{ color: "white" }}>
                    {bookFormik.getFieldMeta("publicationdate").error}
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
    
  )
}

export default Editbook