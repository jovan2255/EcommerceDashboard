import React from 'react';
import './App.css';
import { Component } from 'react'
import { ProductList } from './components/product-list';
import { SearchBox } from './components/search-box';



class App2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        searchField: '',
        nameField:''
      }
     
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
      fetch('http://localhost:8080/api/products').then(res => res.json()).then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
    }
  
  
  
    handleChange = (e) =>{
       this.setState({searchField: e.target.value})
    }
    render() {
  
  const{items, searchField} = this.state;
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
    )
  
  
    
        return (
            <div className='container-fluid'>
          <div className="App2">
      
         <SearchBox placeholder='Search Products' handleChange={this.handleChange}/>
         <ProductList items={filteredItems}/>
         <product></product>
  
  </div>
          </div>
      
        )
      }
    }
  
  export default App2;
  