import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class AddThemes extends Component {
    render() {
        return (
            <>
           <div className="px-4 pt-2">
           <div className="card rounded-0 shadow border-0">
            <div className="card-body text-center p-5">
                <h3 className="mb-3">Add Theme</h3>
                <form>
                <div className="mb-3">
                    <input type="text" className="form-control rounded-0" placeholder="Enter name"></input>
                </div>
                <div class="mb-3">
                    <input type="text" className="form-control rounded-0" placeholder="Enter price"></input>
                </div>
                <div class="mb-4">
                    <textarea type="text" className="form-control rounded-0" placeholder="Enter desciption"></textarea>
                </div>
                <button type="submit" className="btn btn-primary rounded-0 w-100">Submit</button>
                </form>
            </div>
            </div>
           </div>
            </>
        );
    }
}

export default AddThemes;