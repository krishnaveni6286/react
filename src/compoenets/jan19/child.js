

const ChildComponent=(props)=>{

    <div className="card" style={{ width: 300 }}>
        {/* <img
          className="card-img-top"
          src={reactImg}
          alt="Card image"
          style={{ width: "100%" }}
        /> */}
        <div className="card-body">
         
          <p className="card-text">{props.name}</p>
          <p className="card-text">{props.id}</p>
          <p className="card-text">{props.salary}</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
}
export default ChildComponent