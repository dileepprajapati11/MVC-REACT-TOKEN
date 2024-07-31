import { useEffect, useRef, useState } from "react";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";

function AddCategory() {
  var catName = useRef();
  var catImage = useRef();
  var formRef = useRef();
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    showCategory();
  }, []);

  var showCategory = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchCategoryList);

    console.log("Sub Category Response : " + res);
    console.log("Sub Category Response String is : " + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.catList;
      setCatList(list);
    }
  };

  var addCategory = async (ev) => {
    ev.preventDefault();
    var cat_name = catName.current.value;
    var cat_image = catImage.current.files[0];

    const fdata = new FormData();
    fdata.append("caticon", cat_image);
    fdata.append("catnm", cat_name);

    var res = await UserWebService.postAPICall(WebAPI.addCategory, fdata);
    console.log("Response is : " + res);
    console.log("String response is : " + JSON.stringify(res));

    formRef.current.reset();
    showCategory();
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Add Category</h1>
      <form onSubmit={addCategory} ref={formRef}>
      <label htmlFor="catnm">Category Name</label>
        <div className="form-group">
          <input
            id="catnm"
            type="text"
            name="catnm"
            className="form-control"
            placeholder="Enter category Name"
            ref={catName}
          />
        </div>
        <label htmlFor="caticon">Category Icon</label>
        <div className="form-group">
          <input
            type="file"
            name="caticon" id="caticon"
            className="btn btn-primary form-control"
            placeholder="Enter category Name"
            ref={catImage}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success form-control"
            value="Add Category"
          />
        </div>
      </form>
      <h1>Show All Categorys</h1>
      {catList.map((cat) => {
        return (
          <div className="col-md-4 text-center">
            <h2>{cat.catnm}</h2>
            <img
              src={`../../../Upload/Cat_Icon/${cat.caticonnm}`}
              alt={cat.catnm}
              className="img-rounded"
              height={280}
              width={280}
            />
            <br /> <br />
             <button className="btn btn-primary">Update</button> &nbsp;&nbsp;
            <button className="btn btn-danger" >Delete</button> 
          </div>
        );
      })}
    </div>
  );
}

export default AddCategory;
