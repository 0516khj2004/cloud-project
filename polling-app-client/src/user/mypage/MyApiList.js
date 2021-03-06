import React, { Component } from 'react';
import { getApis } from '../../util/APIUtils';
import "./MyApiList.css"
class MyApiList extends Component {
    constructor(props){
        super(props);
        this.state = {
            apilistinfo : [],
        }
        this.loadApilist = this.loadApilist.bind(this);
    }
    loadApilist(){
        let test = getApis(this.props.username);  
        return test; 
    }

    componentDidMount(){
       this.loadApilist().then(res => {
           console.log(res);
           this.setState({
               apilistinfo : res
           })
           
       })
    }
    render() {
        console.log("REDERING.........",this.state.apilistinfo);
        const apilistinfo = this.state.apilistinfo;
        const userkey = this.props.userkey;
        console.log(userkey)
        return (    
      <div className="col-md-12 ftco-animate">
          {apilistinfo && apilistinfo.map((open, index) => (
      <div className="job-post-item p-4 d-block d-lg-flex align-items-center" key={index}>
        <div className="one-third mb-4 mb-md-0">
          <div className="job-post-item-header align-items-center">
            <span className="subadge">Open api table</span>
            <h2 className="mr-3 text-black"><a href={'http://'+open.url+'?key='+userkey}>{open.tableName}</a></h2>
          </div>
          <div className="job-post-item-body d-block d-md-flex">
            <div className="mr-3"><span className="icon-layers" />등록일:{open.createTableTime} </div>
          </div>
        </div>
      </div>
                        ))}
    </div>
        );
    }
}

export default MyApiList;
