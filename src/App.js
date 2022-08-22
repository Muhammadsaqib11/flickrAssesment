

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Modal} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Slug from 'react-slug'


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const url = 'https://api.unsplash.com/photos/?client_id=8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b'



// import SweetPagination from "sweetpagination";
// import Pagination from './Pagination';
const App = () => {
  const [images, setimages] = useState([]);
  const [imgData, setimgData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);
  const handleClick = () => {
    const url = 'https://api.unsplash.com/photos/?client_id=8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b'
    
    axios.get(url).then((res) => {
      console.log(res.data)
     setimages(res.data);

    })
  }

  useEffect(() => {
    handleClick();
  }, [])

  const handleShow = () => {
    setShow(true);

  }
  const handleSlug = (e) => {
    console.log(e.target.value)
  }
  const fetchImages = (count = 10) => {
    axios
      .get(`${url}&count=${count}`)
      .then(res => {
        console.log(res);
        setimages(res.data);
      })
  }


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const cuurentPost = images.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber);


  const pageNumber = [];
  const totalPosts=images.length;
    for(let i=1; i<=Math.ceil(totalPosts / postPerPage); i++){
        pageNumber.push(i);
    }
    const [value,setValue]=useState('');
    const Searchedelement = (searchItem) => {
    setValue(searchItem);
    //     // console.log(searchItem, "SearchItem");
       }

  return (
    <React.Fragment>

    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Pagnination & Filters">
      <>
      <div className="container" >
          <div className="d-flex justify-content-between">
            <div>
            <h5 style={{fontSize:'20px', fontWeight:'bold' , marginTop:'10px'}}>Your Pictures </h5>
              </div>
            <div className="d-flex mb-3 ">
                <input
                 type='text' 
                 placeholder='Search...' 
                 className="form-control form-control-lg form-control-solid mx-2"
                 value={value}
                  onChange={(e) => setValue(e.target.value)}
                  />
                {/* <button
                className="btn btn-primary"
                onClick={() => Searchedelement(value) }> Search</button> */}
              </div>
           
    
    
          </div>
          </div>
      {!value ? (
        <>
        <div className="container" >
          <div className='row'>
              {
                cuurentPost && cuurentPost.map((img,key) => (
                  <div className="col-sm-4" key={img.id}>
                    <div className="card h-100">
                      <img className="card-img-top" src={img.urls.small} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">
                          {img.user.first_name}
                        </h5>
                        <button onClick={handleShow} className="btn btn-primary">
                          Details
                        </button>
                      </div>
                    </div>
                    </div>
                ))
              }
    
        </div>
        </div>
        <nav>
        <ul >
                  {pageNumber.map(number => (
                      <li key={number}>
                          <a onClick={() => paginate(number)} href='#'>{number}</a>
                      </li>
                  ))}
              </ul>
            </nav>
    
    </>
      ):(
        <div className="container" >
        <div className="row ">
          {images.filter (item =>{
            console.log("item",item);
         const searchTerm = value.toLowerCase ();
         const full_name= item.user.first_name.toLowerCase();
         return searchTerm && full_name.startsWith(searchTerm) && full_name !== searchTerm;
         }).slice(0,10)
        .map((item) => (
        <div className="col-sm-4" onClick={() => Searchedelement(item.user.first_name)}
         key={item.user.first_name}>
          <div className="card h-100">
                <img className="card-img-top" src={item.urls.small} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.user.first_name}
                  </h5>
              </div>
            </div>
         </div>))}
     </div>
     </div>
      )}


     
     <Modal show={show} onHide={handleClose}>
       <div className='modal-header' >
         <div className='modal-title'>Heading</div>
       </div>
       <div className='modal-body'>Woohoo, you're reading this text in a modal!</div>
       <div className='modal-footer'>
         <button className="btn btn-primary" onClick={handleClose}>
           Close
         </button>
        
       </div>
     </Modal>
    
    </>
      </Tab>
      <Tab eventKey="profile" title="UnLimited Scroll">
        <>
        <React.Fragment>
      <div className="container" >
          <div className="d-flex justify-content-between">
            <div>
            <h5 style={{fontSize:'20px', fontWeight:'bold' , marginTop:'10px'}}>Your Pictures </h5>
              </div>
            <div className="d-flex mb-3 ">
                <input
                 type='text' 
                 placeholder='Search...' 
                 className="form-control form-control-lg form-control-solid mx-2"
                 value={value}
                  onChange={(e) => setValue(e.target.value)}
                  />
                {/* <button
                className="btn btn-primary"
                onClick={() => Searchedelement(value) }> Search</button> */}
              </div>
           
    
    
          </div>
          </div>
      {!value ? (
        <>
        <div className="container" >

          
          <div className='row'>
    
              {
                cuurentPost && cuurentPost.map((img,key) => (
                  <div className="col-sm-4" key={img.id}>
                    <div className="card h-100">
                      <img className="card-img-top" src={img.urls.small} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">
                          {img.user.first_name}
                        </h5>
                        <button onClick={handleShow} className="btn btn-primary">
                          Details
                        </button>
                      </div>
                    </div>
                    </div>
                ))
              }
    
        </div>
        </div>
        <nav>
        {/* <ul >
                  {pageNumber.map(number => (
                      <li key={number}>
                          <a onClick={() => paginate(number)} href='#'>{number}</a>
                      </li>
                  ))}
              </ul> */}
            </nav>
    
    </>
      ):(
        <div className="container" >
        <div className="row ">
          {images.filter (item =>{
            console.log("item",item);
         const searchTerm = value.toLowerCase ();
         const full_name= item.user.first_name.toLowerCase();
         return searchTerm && full_name.startsWith(searchTerm) && full_name !== searchTerm;
         }).slice(0,10)
        .map((item) => (
        <div className="col-sm-4" onClick={() => Searchedelement(item.user.first_name)}
         key={item.user.first_name}>
          <div className="card h-100">
                <img className="card-img-top" src={item.urls.small} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.user.first_name}
                  </h5>
              </div>
            </div>
         </div>))}
     </div>
     </div>
      )}

    <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p>your have seen all photos</p>}
        >
          {
            images && images.map((img, key) => (
          <div className ="row mt-4">
            <div className="col-sm-4 mt-4"></div>
                <div className="col-sm-4" key={img.id}>
                <div className="card h-100" key={img.id}>
                  <img className="card-img-top" src={img.urls.small} alt="Card image cap" />
                  {/* <div className="card-body"> */}
                    <h5 className="card-title">
                      {img.user.first_name}
                    </h5>
                  {/* </div> */}
                </div>
                </div>
                <div className="col-sm-4"></div>
          </div>
            ))
          }
          </InfiniteScroll>


     
     <Modal show={show} onHide={handleClose}>
       <div className='modal-header' >
         <div className='modal-title'>Heading</div>
       </div>
       <div className='modal-body'>Woohoo, you're reading this text in a modal!</div>
       <div className='modal-footer'>
         <button className="btn btn-primary" onClick={handleClose}>
           Close
         </button>
        
       </div>
     </Modal>
    </React.Fragment>

    </>
      </Tab>
    </Tabs>

    </React.Fragment>
  )
}
export default App