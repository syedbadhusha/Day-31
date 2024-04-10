import { useEffect, useState } from "react";
import Listofauther from "./Listofauther";
import Listofbokks from "./Listofbokks";
import axios from "axios";
import { RiAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Dashboard() {
  const [books, setbooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const booksdata = await axios.get(
        "https://fsdmanagement2.free.beeceptor.com/api/book"
        
      );
      setbooks(booksdata.data);
    }
    getBooks();
  }, []);
  useEffect(() => {
    async function getAuthor() {
      const authordata = await axios.get(
        "https://fsdmanagement2.free.beeceptor.com/api/author"
      );
      setAuthors(authordata.data);
    }
    getAuthor();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">DASHBOARD</h1>
      <div className="row">
        <div className="col-md-6">
        <div className='iconalign d-flex justify-content-between'>
        <h3 className="text-center">BOOKS</h3>
          <Link to={'Createbooks'}><RiAddLine title = 'ADD' className='iconaddm'/></Link>
        </div>
          {books.map((book) => {
            return <Listofbokks key={book.id} book={book} setbooks={setbooks}/>;
          })}
        </div>
        <div className="col-md-6">
        <div className='iconalign d-flex justify-content-between'>
        <h3 className="text-center">AUTHORS</h3>
          <Link to={'Createauthers'}><RiAddLine title = 'ADD' className='iconaddm'/></Link>
        </div>
          {authors.map((author) => {
            return <Listofauther key={author.id} author={author} setAuthors={setAuthors}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
