import React from 'react';

export default function Newscomp(props){
    return <div>
        <div className="card my-4" style={{width: "18rem"}}>
  <img src={props.url} className="card-img-top" alt="..."/>
  <div className="card-body ">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.source}</span>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.des}.......</p>
    <p className="card-text">Date: {new Date(props.date).toUTCString()}</p>
    <a href={props.newsurl}  target='_blanke' className="btn btn-primary btn-sm">Read more</a>
  </div>
</div>
    </div>;
  
}
