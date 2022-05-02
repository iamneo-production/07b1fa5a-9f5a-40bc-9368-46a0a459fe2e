import React, { Component } from 'react';
import './css/displayTheme.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import {api_url} from '../../../helper/Api';
import axios from 'axios';
class DisplayThemes extends Component {
    
    constructor(props){
        super(props);
        this.state={
            themeCards:[],
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json', 
                     },
            url:`${api_url}/admin/getTheme`,
          })
          .then((response)=>{
              console.log(response.data);
              this.setState({...this.state,themeCards:response.data})
          })
          .catch((err)=>{
              console.log(err);
          })
            
    }

    deleteTheme=(id)=>{
        axios({
            method: 'delete',
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json', 
                     },
            url:`${api_url}/admin/deleteTheme/${id}`,
          })
          .then((response)=>{
              console.log(response.data);
              window.location.reload(true);
          })
          .catch((err)=>{
              console.log(err);
          })
    }

    render() {
        return (
            <>
            <div className="d-flex p-2">
                <div className="input-group">
                <input type="text" className="form-control border-0 shadow fs-6 p-2 rounded-0" placeholder="Type here to search theme"></input>
                </div>
                <button type="button" className="btn ms-3 text-white rounded-0 shadow" style={{background:"#4C80E5"}}>Search</button>
            </div>
            <div className="theme-card-container p-2 my-3">
                {
                    this.state.themeCards.map((card)=>
                    <div key={card.id} className="card shadow border-0 themeCard mt-3">
            <div className="card-body p-0 d-flex">
                <div className="py-3 ps-3" style={{width:"95%"}}>
                    <p className="mb-1">Name: {card.themeName}</p>
                    <p className="mb-1">Price: {card.themePrice}</p>
                    <p className="mb-1">Description: {card.themeDetails}</p>
                </div>
                <div style={{width:"5%"}}>
                    <div className="h-50 d-flex justify-content-center align-items-center" style={{background:"#4C80E5",borderTopRightRadius:"5px",cursor:"pointer"}}>
                        <BiEdit className="text-white" size={18}/>
                    </div>
                    <div className="h-50 d-flex justify-content-center align-items-center" onClick={()=>this.deleteTheme(card.id)} style={{background:"#E03E1F",borderBottomRightRadius:"5px",cursor:"pointer"}}>
                        <RiDeleteBin5Line className="text-white" size={18}/>
                    </div>
                </div>
            </div>
            </div>
                    )
                }
            
            </div>
            </>
        );
    }
}

export default DisplayThemes;