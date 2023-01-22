import React,{useEffect, useState} from "react";
import Axios from "axios";
import Post from "./Post.js";
import Pagination from "./Pagination.js";
import { Container } from "react-bootstrap";
import './StoreList.css'

export default function (){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(12);

  const fetchPosts = async () =>{
    setLoading(true);
    //  http://localhost:3001/api/get
    const res = await Axios.get('http://localhost:3001/api/get');
    setPosts(res.data);
    setLoading(false);
    console.log(res)
    }

  useEffect(()=>{
      console.log("useEffect called")
      fetchPosts();
  },[]);
  
  
  //Отримати конкретні значення бд для конкретної сторінки
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts =  posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
      <div className="mainlist-container">
          <h4 className="mainlist-header-text">Список товарів</h4>
          <div className="List">
              <div className="mainlist__searchlabel">
                  <div className="SearchBar">
                      <input type="text" placeholder="Введіть назву товару:"></input>
                      <button className="SearchBar_BtnFind">🔎</button>
                  </div>
                  <div className="container ">
                      <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} />
                  </div>
              </div>

              {/* тут по-ідеї мають бути елементи списку*/}

              <div className="container d-flex flex-row flex-wrap p-5 justify-content-center">
                  <Post posts={currentPosts} loading={loading} />  
              </div>
              <div className="mainlist__searchlabel">
                  <div className="SearchBar">
                      <input type="text" placeholder="Введіть назву товару:"></input>
                      <button className="SearchBar_BtnFind">🔎</button>
                  </div>
                  <div className="container ">
                      <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} />
                  </div>
              </div>

          </div>
      </div>
  );
}