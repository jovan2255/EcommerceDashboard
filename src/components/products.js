import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap'
import {AddProductModal} from './AddProductModal'
import {EditProductModal} from './EditProductModal'

export class Products extends Component {
constructor(props){
    super(props);
    this.state={product:[], AddModalShow: false, EditModalShow:false }
}

componentDidMount(){
    this.refreshList();
}

refreshList(){
    fetch('http://localhost:8080/api/products')
    .then(response=> response.json())
    .then(data=> {
        this.setState({product:data});
    });
 
}

componentDidUpdate(){
    this.refreshList();
}

deleteProduct(productid){
    if(window.confirm('Are You Sure?'))
    {
        fetch('http://localhost:8080/api/products/'+productid,{
            method:'DELETE',
            header:{'Accept':'application/json',
        'Content-Type': 'application/json'
    }
        }) 
    }

}

render(){
const{product, productid,productname,productcategory,productprice, productimageurl}= this.state;
let AddModalClose =() => this.setState({AddModalShow:false})
let EditModalClose =() => this.setState({editModalShow:false})

return(
     <div>
<Table className="mt-4" striped bordered hover size="small">
<thead>
    <tr>
<th>Product Id</th>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Category</th>
<th>Product Image URL</th>
<th>Option</th>
    </tr>
</thead>
<tbody>
{product.map(prod =>
  <tr key={prod.id}> 
  <td>{prod.id}</td>
  <td>{prod.name}</td>
  <td>{prod.price}</td>
  <td>{prod.category}</td>
  <td>{prod.imageurl}</td>
  <td>
      <ButtonToolbar>
          <Button className="mr-2 sizebutton" variant="info" onClick={()=> this.setState({editModalShow:true, productid:prod.id, productname:prod.name, productcategory:prod.category,productprice:prod.price, productimageurl:prod.imageurl})}>
              Edit
          </Button>
          <Button variant="danger" className="mr-2 sizebutton" onClick={()=>this.deleteProduct(prod.id)}>Delete</Button>
          <EditProductModal
          show={this.state.editModalShow}
          onHide={EditModalClose}
          productid={productid}
          productname={productname}
          productcategory={productcategory}
          productprice={productprice}
          productimageurl={productimageurl}/>
      </ButtonToolbar>

  </td>
  </tr>
  )}

</tbody>


</Table>
 
<ButtonToolbar>
  
    <Button 
    variant = 'primary'
    onClick={()=> this.setState({AddModalShow:true})}>Add Product
    </Button>

    <AddProductModal show={this.state.AddModalShow} 
    onHide={AddModalClose}/>
    </ButtonToolbar>
    </div>
)
}

}