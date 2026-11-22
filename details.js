const params = new URLSearchParams(location.search);
const id=params.get('id');

const details=document.querySelector("[product_details]");
console.log(details)

async function getproducts() {
    const respond=await axios.get("https://dummyjson.com/products");
    return respond;
}

const displayproducts= async()=>
    {
     try{
     const {data} =await getproducts();
     const result=data.products.find((product)=>product.id==id);
        console.log(result);
           
            details.innerHTML= `<div class="details_products">
                 
                    <img src=${result.thumbnail} class="width:100px">
                    <h3>${result.title}</h1>
                    <p>${result.description}</p>
                     <div class="ps">
                         <h3>${result.rating} </h2>
                          <h3>${result.price}$</h2>
                     </div>
                     <button type="button"  class="cart">add to card</button>
                 
                </div>`;
                
            
    
   
      
     }
     catch(error)
     {
        console.log(error);
     }


    }
    displayproducts();