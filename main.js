const dataproduct=document.querySelector("[data-product]");
const datacategories=document.querySelector("[data-categories-ul]");

console.log(datacategories);

async function getcategories()
{
    const respond=await axios.get("https://dummyjson.com/products/categories");
    return respond;

}

const displaycategories=async ()=> {
       
    try{
    const {data}=await getcategories();
        console.log(data);

        const result =data.map((category)=>{
               return`<li><button type="button">${category.name}</button></li>`

            }).join("");
           
            console.log("hi")
            datacategories.innerHTML=result;}
            catch(error)
            {
                datacategories.textContent=error;
            }

    }

    displaycategories();



    async function getproducts() {
        const respond=await axios.get("https://dummyjson.com/products");
       console.log(respond);
        return respond;
    }

    const displayproducts= async()=>
        {
         try{
         const {data} =await getproducts();
           console.log(data.products);
           
         const result=data.products.map((product)=>
            {
           return `<div class="products">
           <a href="./details.html?id=${product.id}"> 
            
               <img src=${product.thumbnail} class="width:100px">
               <h3>${product.title}</h1>
               <p>${product.description}</p>
                <div class="ps">
                    <h3>${product.rating}</h2>
                     <h3>${product.price}</h2>
                </div>
                <button type="button"  class="cart">add to card</button>
            </a>
           </div>
            `

            }).join('');
            console.log(data.result);

         dataproduct.innerHTML=result;}
         
         catch(error)
         {
            dataproduct.textContent=error;
         }


        }

        displayproducts();