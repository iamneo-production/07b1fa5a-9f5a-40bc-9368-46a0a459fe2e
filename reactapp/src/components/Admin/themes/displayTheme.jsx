import React, { Component } from 'react';
import './css/displayTheme.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
class DisplayThemes extends Component {
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
            <div className="card shadow border-0 themeCard">
            <div className="card-body p-0 d-flex">
                <div className="py-3 ps-3" style={{width:"95%"}}>
                    <p className="mb-1">Name:dsfdsf</p>
                    <p className="mb-1">Price:$200</p>
                    <p className="mb-1">Description:xfgfgfd sddgdfgfg dffdhfgh fgfg</p>
                </div>
                <div style={{width:"5%"}}>
                    <div className="h-50 d-flex justify-content-center align-items-center" style={{background:"#4C80E5",borderTopRightRadius:"5px",cursor:"pointer"}}>
                        <BiEdit className="text-white" size={18}/>
                    </div>
                    <div className="h-50 d-flex justify-content-center align-items-center" style={{background:"#E03E1F",borderBottomRightRadius:"5px",cursor:"pointer"}}>
                        <RiDeleteBin5Line className="text-white" size={18}/>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </>
        );
    }
}

export default DisplayThemes;