import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notes from "../components/Notes";
import EditModal from "../components/EditModal";
import { Noteadd } from "../api/NoteApi";

function ReactNotes() {
  // let [title,setTitle]= useState("")
  let [description,setDescription] = useState("")
  let [note,setNote] = useState("")
  let [error,setError] = useState("")
  let [success, setSuccess] = useState(false)


  // const handleChange=(e)=>{
  // if(e.target.id==="title"){
      
  //     setTitle(e.target.value)
  //   }
  //   else{
  //     setDesc(e.target.value)
  //   }
    
    // console.log(title,desc)
  // }

  // const addNotesHandler=(e)=>{
  //   e.preventDefault()
  // }
  const handleSubmit = (e)=>{
    e.preventDefault()
    Noteadd(note,description)
    .then(data=>{
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError("")
      }
    
    })
  }
    const showError = () =>{
      if(error){
        return <div className="alert alert-danger">{error}</div>
  }

}
const showSuccess = () =>{
  if(success) {
    return <div className="alert alert-success">Note added successfully</div>
  }
}



  return (
    <>
      <Navbar />
      {showError}
      {showSuccess}
      <div className="container ">
        <div className="row ">
          <div className="col-md-5">
            <form >
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input type="text" className="form-control" id="title" placeholder="Enter Title"  onChange={(e)=>{setNote(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label for="Description" className="form-label" >
                  Description
                </label>
                <textarea name="desc" className="form-control" id="desc"placeholder="Enter Your Description Here"  onChange={(e)=>{setDescription(e.target.value)}} />
              </div>
            </form>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Add Note
        </button>
      </div>
      {/* <form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}> */}

      <div className='container'>
      <div className='row'>
        <div className='col-md-10'>
          <h2 className='mb-3'>Your Notes</h2>
    <Notes/>
    <EditModal/>
        </div>

      </div>

    </div>
          {/* </form> */}

      {/* <Footer /> */}
    </>
  );
}

export default ReactNotes;
