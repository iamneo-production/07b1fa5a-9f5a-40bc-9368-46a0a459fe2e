import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import DisplayThemes from '../../../components/Admin/themes/displayTheme';
import AddThemes from '../../../components/Admin/themes/addTheme';

class Themes extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                 <div className="col-8">
                    <DisplayThemes/>
                 </div>
                 <div className="col-4">
                    <AddThemes/>
                </div>
                </div>
            </div>
        );
    }
}

export default Themes;