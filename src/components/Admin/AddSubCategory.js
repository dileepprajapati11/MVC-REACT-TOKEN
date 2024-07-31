import { useEffect, useRef, useState } from "react";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";

function AddSubCategory() {
  var catName = useRef();
  var subCatName = useRef();
  var subCatImage = useRef();
  var formRef = useRef();

  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);

  useEffect(() => {
    loadCategory();
    showSubCat();
  }, []);

  var loadCategory = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchCategoryList);

    console.log("Sub Category Response : " + res);
    console.log("Sub Category Response String is : " + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.catList;
      setCatList(list);
    }
  };

  var showSubCat = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchSubCategoryList);

    console.log("Sub Category Response : " + res);
    console.log("Sub Category Response String is : " + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.subcatList;
      setSubCatList(list);
    }
  };

  var addSubCategory = async (ev) => {
    ev.preventDefault();

    var cat_name = catName.current.value;
    var sub_cat_name = subCatName.current.value;
    var sub_cat_image = subCatImage.current.files[0];

    const fdata = new FormData();
    fdata.append("caticon", sub_cat_image);
    fdata.append("catnm", cat_name);
    fdata.append("subcatnm", sub_cat_name);

    var res = await UserWebService.postAPICall(WebAPI.addSubCategory, fdata);
    console.log("Add Sub Category Response is : " + res);
    console.log("Add Sub Category Response is : " + JSON.stringify(res));

    formRef.current.reset();
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Add Sub Category</h1>
      <form onSubmit={addSubCategory} ref={formRef}>
        <div className="form-group">
          <select className="form-control" ref={catName}>
            {catList.map((cat) => {
              return <option>{cat.catnm}</option>;
            })}
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter category Name"
            ref={subCatName}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="btn btn-primary form-control"
            ref={subCatImage}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success form-control"
            value="Add Sub Category"
          />
        </div>
        <h1>Show All Sub Category</h1>
        <div>
          {subCatList.map((im) => {
            // return <img src={im.subcaticonnm} alt="image not found"></img>
            return (
              <div className=" col-md-4 text-center">
                <h2>{im.subcatnm}</h2>
                <img
                  src={`../../../Upload/Sub_Cat_Icon/${im.subcaticonnm}`}
                  alt="sub-cat-img"
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
      </form>
    </div>
  );
}

export default AddSubCategory;
