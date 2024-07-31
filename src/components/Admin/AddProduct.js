import { useEffect, useRef, useState } from "react";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";
// import "../../../public/Upload/pro_icon;

export default function AddProduct() {
  var catName = useRef();
  var subCatName = useRef();
  var pTitle = useRef();
  var pDescription = useRef();
  var pImage = useRef();
  var pOriginalPrize = useRef();
  var pDiscountPrize = useRef();
  var formRef = useRef();

  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadCategory();
    loadSubCategory();
    showAllProducts();
  }, []);

  // var deleteProduct = async (id) => {
  //   var pid = id;
  //   console.log("Product id is : " + pid);

  //   var fdata = new FormData();
  //   fdata.append("_id",pid);

  //   var res = await UserWebService.deleteAPICall(WebAPI.deleteProduct,fdata);
  //   console.log("Product res is : " + res);
  //   console.log("Product res string is : " + JSON.stringify(res));
  // };

  var loadCategory = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchCategoryList);

    console.log(" Category Response : " + res);
    console.log(" Category Response String is : " + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.catList;
      setCatList(list);
    }
  };

  var showAllProducts = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchProductList);

    console.log("Show all products Response" + res);
    console.log("Show all products Response string" + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.pList;
      setProductList(list);
    }
  };

  var loadSubCategory = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchSubCategoryList);

    console.log("Sub category Response : " + res);
    console.log("Sub Category Response String : " + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.subcatList;
      setSubCatList(list);
    }
  };

  var addProduct = async (ev) => {
    ev.preventDefault();

    var cat_name = catName.current.value;
    var sub_cat_name = subCatName.current.value;
    var p_title = pTitle.current.value;
    var p_des = pDescription.current.value;
    var p_image = pImage.current.files[0];
    var p_original_prize = pOriginalPrize.current.value;
    var p_discount_prize = pDiscountPrize.current.value;

    const fdata = new FormData();
    fdata.append("catnm", cat_name);
    fdata.append("subcatnm", sub_cat_name);
    fdata.append("title", p_title);
    fdata.append("description", p_des);
    fdata.append("piconnm", p_image);
    fdata.append("originalprize", p_original_prize);
    fdata.append("discountprize", p_discount_prize);

    var res = await UserWebService.postAPICall(WebAPI.addProduct, fdata);
    console.log("Product Response is : " + res);
    console.log("Product Response is : " + JSON.stringify(res));

    formRef.current.reset();
  };

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Add Product</h1>
        <form onSubmit={addProduct} ref={formRef}>
          <div className="form-group">
            <select className="form-control" ref={catName}>
              {catList.map((cat) => {
                return <option>{cat.catnm}</option>;
              })}
            </select>
          </div>

          <div className="form-group">
            <select className="form-control" ref={subCatName}>
              {subCatList.map((cat) => {
                return <option>{cat.subcatnm}</option>;
              })}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              ref={pTitle}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Original Prize"
              ref={pOriginalPrize}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Discount Prize"
              ref={pDiscountPrize}
            />
          </div>
          <div className="form-group">
            <textarea
              rows="7"
              cols="20"
              className="form-control"
              placeholder="Enter description"
              ref={pDescription}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="btn btn-primary form-control"
              ref={pImage}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-success form-control"
              value="Add Product"
            />
          </div>
        </form>

        <h1>Show All Products : </h1>
        {productList.map((pr) => {
          return (
            <div key={pr._id}>
              {" "}
              <h2>{pr.title}</h2>
              <h3>{pr.description}</h3>
             
              <img  
                src={`../../../Upload/pro_icon/${pr.piconnm}`}
                className="img-rounded"
                height={280}
                width={280}
                alt="product-img"
              ></img>
                <br />
                <br />
              <div class="d-flex justify-content-between">
          <span class="discount-price">&#8377;{pr.originalprize}</span>  &nbsp;&nbsp;
          <span class="original-price">&#8377;{pr.discountprize}</span>
        </div>
        <br />
              &nbsp;&nbsp; <button className="btn btn-primary">Update</button> &nbsp;&nbsp;
              <button className="btn btn-danger" >Delete</button> 
              {/* onClick={() => deleteProduct(pr._id)} */}
            </div>
          );
        })}
        {/* {
          productList.map((pr) => {
            return <div class="card" style={{width: 18}}>
            <img src={`../../../Upload/pro_icon/${pr.piconnm}`} class="card-img-top img-rounded" alt="Image Not Found" height={180} width={180}/>
            <div class="card-body">
              <h5 class="card-title">{pr.title}</h5>
              <p class="card-text">
              {pr.description}
              </p>
              <span><h2>{pr.originalprize}  {pr.discountprize}</h2></span>
              <a href="#" class="btn btn-primary">
                Update
              </a>
              <a href="#" class="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
          })
        } */}
        
      </div>
    </>
  );
}
