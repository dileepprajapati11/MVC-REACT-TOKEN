import { useEffect, useState } from "react";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";


export default function Home() {

  const [productList, setProductList] = useState([]);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    showAllProducts();
  }, []);

  var showAllProducts = async () => {
    var res = await UserWebService.getAPICall(WebAPI.fetchProductList);

    console.log("Show all products Response" + res);
    console.log("Show all products Response string" + JSON.stringify(res));
    if (res.data.status) {
      var list = res.data.pList;
      setProductList(list);
    }
  };
  const handleAddToCart = (product) => {
    if (user.token) {
      dispatch(addToCart(product));
    } else {
      navigate('/login');
    }
  };

  return <div className="container">
   {productList.map((pr) => {
          return (
            <div className="col-md-4 text-center">
              <h2>{pr.title}</h2>
               
              <img
                src={`../../../Upload/pro_icon/${pr.piconnm}`}
                className="img-rounded"
                height={280}
                width={280}
                alt="product-img"
              ></img>
              <br />
              &nbsp;&nbsp;
              <br />   
              <button className="btn btn-success" onClick={() => handleAddToCart(pr)}>Add to Cart</button>
            </div>
          );
        })}
  </div>;

}
