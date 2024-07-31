import {  useRef } from "react";

export default function AddReview() {

  var userId = useRef();
  var reviewDescription = useRef();

  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Reviews </h1>
      <form>
        <div className="form-group">
          <select className="form-control"></select>
        </div>

        <div className="form-group">
            <textarea
              rows="7"
              cols="20"
              className="form-control"
              placeholder="Enter description"
            />
          </div>
        
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success form-control"
            value="Add Review"
          />
        </div>
      </form>
    </div>
  );
}
