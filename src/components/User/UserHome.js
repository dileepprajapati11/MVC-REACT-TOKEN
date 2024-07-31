import { useEffect, useState } from "react";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";


export default function UserHome() {
  const [productList, setProductList] = useState([]);
  
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

 
  return <><div className="container">
  {productList.map((pr) => {
         return (
           <div className="col-md-4 text-center">
             <h2>{pr.title}</h2>
              
             <img
               src={`../../../Upload/pro_icon/${pr.piconnm}`}
               className="img-rounded"
               height={280}
               width={280}
             ></img>
             <br />
             &nbsp;&nbsp;
             <br />   
             <button className="btn btn-success">Add Cart</button>
           </div>
         );
       })}
 </div>;</>;
}
