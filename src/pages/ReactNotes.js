import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notes from "../components/Notes";
import EditModal from "../components/EditModal";

function ReactNotes() {
  const [title,setTitle]= useState("")
  const [desc,setDesc]= useState("")
  const [notes,setNotes] = useState([])

  const handleChange=(e)=>{
    if(e.target.id==="title"){
      
      setTitle(e.target.value)
    }
    else{
      setDesc(e.target.value)
    }
    
    // console.log(title,desc)
  }

  const addNotesHandler=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row ">
          <div className="col-md-5">
            <form >
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="Description" className="form-label" >
                  Description
                </label>
                <textarea name="desc" className="form-control" id="desc"placeholder="Enter Your Description Here" value={desc} onChange={handleChange} />
              </div>
            </form>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>
          Add Note
        </button>
      </div>
      <form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}>

      <div className='container'>
      <div className='row'>
        <div className='col-md-10'>
          <h2 className='mb-3'>Your Notes</h2>
    <Notes/>
    <EditModal/>
        </div>

      </div>

    </div>
          </form>

      {/* <Footer /> */}
    </>
  );
}

export default ReactNotes;
