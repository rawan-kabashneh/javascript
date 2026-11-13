const dataproduct=document.querySelector("[data-product]");
const datacategories=document.querySelector("[data-categories]");

function getcategories(){
const xhr=new XMLHttpRequest();
xhr.open("GET","https://dummyjson.com/products/categories");
xhr.send();

xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState==4)
        {
            if(xhr.status==200)
                {
                    const categories=JSON.parse(xhr.responseText);
                    datacategories.innerHTML=`<tr>
                    <th>slug</th>
                     <th>name</th>
                      <th>url</th>
                    </tr>
                    `;
                    const result=categories.map(categorie=>{return `
                      <tr>
                        <td>  ${categorie.slug}  </td>
                        <td> ${categorie.name}  </td>
                        <td> ${categorie.url}  </td>
                        
                        </tr>`}).join('');
                        datacategories.innerHTML+=result; }

        }
})
}



function getproducts()
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://dummyjson.com/products");
    xhr.send();

    xhr.addEventListener("readystatechange",()=>
        {
            if(xhr.readyState==4)
                {
                    if(xhr.status==200)
                        {
                            {
                                const data=JSON.parse(xhr.responseText);
                                const products=data.products;
                                console.log(products)

                                dataproduct.innerHTML=`  <tr>
                                <th>id</th>
                                <th> title </th>         
                                 <th> description </th>         
                                 <th> price </th>                                 
                                </tr>`
                                
                          const result=products.map(product=>
                            {
                                return `
                               
                                
                                <tr>
                                 <td> ${product.id} </h1>
                                 <td> ${product.title} </h1>
                                 <td> ${product.description} </h1>
                                 <td> ${product.price} </h1>
                                </tr>
                                 `}).join('');
                                dataproduct.innerHTML+=result; }
            
                      
                }
        }
    })
}

 getproducts();
getcategories();