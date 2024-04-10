import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";

function Listofbokks({ book,setbooks }) {
    async function deleteBook(id){
        await axios.delete(`https://fsdmanagement2.free.beeceptor.com/api/book/${id}`)
        const booksdata = await axios.get(
            "https://fsdmanagement2.free.beeceptor.com/api/book"   
          );
          setbooks(booksdata.data);    
    }
  return (
    <div className="card text-white bg-secondary mb-3">
      <h3 className="card-header">{book.title}</h3>
      <div className="card-body">
        <h6 className="card-title">{`Author : ${book.author}`}</h6>
        <h6 className="card-title">{`ISBN NUMBER : ${book.ISBNNumber}`}</h6>
        <h6 className="card-title">{`PUBLICATION DATE : ${book.publicationdate}`}</h6>
        <div className="iconalign">
                <Link to={ `/editbook/${book.id}`} ><GrEdit title = 'EDIT' className="iconEdit"/></Link>
                <RiDeleteBin5Line title = 'DELETE' className="iconEdit" onClick={()=>deleteBook(book.id)}/>
            </div>
      </div>
    </div>
  );
}
export default Listofbokks;
