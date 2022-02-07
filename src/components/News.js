import React, {useEffect,useState } from 'react';
import Newscomp from './Newscomp';
import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props){
  const [articles,setarticles]=useState([])
  const [loading,setloading]=useState(false)
  const[page,setpage]=useState(1)
  const [result,setresult]=useState(0)
  const cap=(strin)=>{
    return strin[0].toUpperCase() + strin.slice(1);
  }
  
  const update= async()=>{
    // let {size,country,cet,progress,api}=props
    props.progress(10) 
    setloading(true);  
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cet}&apiKey=${props.api}&page=${page}&pagesize=${props.size}`
    let data= await fetch(url)
    props.progress(50)
        let newdata=await data.json()
        setarticles(newdata.articles)
        setloading(false)
        setresult(newdata.totalResults)
        props.progress(100)
  } 

    useEffect(()=>{
      update()
                  },[])
  const fetchMoreData= async ()=>{
    setpage(page+1)
    setloading(true) 
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cet}&apiKey=${props.api}&page=${page+1}&pagesize=${props.size}`  
    let data= await fetch(url)
    let newdata=await data.json()
    setarticles(articles.concat(newdata.articles))
    setresult(newdata.totalResults)
    setloading(false)
  }
  // Previus=async ()=>{
  //    this.setState({page:this.state.page-1})
  //    this.update()
  // }
  // Next= async()=>{
  //   this.setState({page:this.state.page+1})
  //   this.update()
  // }
    return(<>
      <h3 className='text-center' style={{margin:'20px',marginTop:'95px'}}>News Dude - {cap(props.cet)} Top Headlines</h3>
      {/* {this.state.loading&&<Spiner/>} */}
      {loading&&<Spiner/>}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==result}
          loader={<Spiner/>}
        >
      <div className='container'>
      <div className='row'>
      {articles.map((element)=>{
          return <div key={element.url} className='col-md-4'>
                  <Newscomp date={element.publishedAt} source={element.source.name}  title={element.title.slice(0,45)} des={element.description==null?'':element.description.slice(0,30)} url={element.urlToImage==null?'https://images.hindustantimes.com/tech/img/2022/02/06/1600x900/D6CQ6LAB3ZOXHE42PKEKCFVNEE_(1)_1644120676481_1644120695068.jpg':element.urlToImage} newsurl={element.url}/></div>
                 })}
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.Previus}>&larr; Previus</button>
      <button  disabled={this.state.page+1>Math.ceil(this.state.totalarti/props.size)} type="button" className="btn btn-dark" onClick={this.Next}>Next &rarr;</button>

        </div> */}
</>)
}
News.defaultProps={
  country:'in',
  size:6,
  cet:'health'
}
News.propTypes={
  country:PropTypes.string,
  size:PropTypes.number,
  cet:PropTypes.string
}