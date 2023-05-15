import React from "react";

function EditModal() {
  return (
    <>
      

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
               Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                
            <form>
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input type="text" className="form-control" id="edittitle" placeholder="Enter Title" />
              </div>
              <div className="mb-3">
                <label for="Description" className="form-label" >
                  Description
                </label>
                <textarea name="editdesc" className="form-control" id="desc"placeholder="Enter Your Description Here" />
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Edit Notes
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
