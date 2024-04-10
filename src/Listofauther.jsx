import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";

function Listofauther({ author,setAuthors }) {
    async function deleteAuthor(id){
        await axios.delete(`https://fsdmanagement2.free.beeceptor.com/api/author/${id}`)
        const authordata = await axios.get(
            "https://fsdmanagement2.free.beeceptor.com/api/author"
          );
          setAuthors(authordata.data);    
    }
  return (
    <div className="card text-white bg-secondary mb-3">
      <h1 className="card-header">{author.name}</h1>
      <div className="card-body">
        <h6 className="card-title">{`DATE OF BIRTH : ${author.birthdate}`}</h6>
        <p className="card-text">{`SHORT BIO GRAPHY : ${author.shortbiography}`}</p>
        <div className="iconalign">
                <Link to={ `/editauther/${author.id}`} ><GrEdit title = 'EDIT' className="iconEdit"/></Link>
                <RiDeleteBin5Line title = 'DELETE' className="iconEdit" onClick={()=>deleteAuthor(author.id)}/>
            </div>
      </div>
    </div>
  );
}
export default Listofauther;
