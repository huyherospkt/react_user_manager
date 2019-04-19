import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButtion = () =>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); //hide form
    }

    render() {
        return (
         
                <div className="card text-white bg-warning mb-3 mt-2">
                        
                        <div className="card-header text-center">Sửa thông tin User</div>
                        <div className="card-body text-primary">
                        <form>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Ten user" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Dien thoai" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} name="permission" className="custom-select" required>
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal User</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-danger btn-block" value="Save" onClick={() =>this.saveButtion()}/>
                            </div>
                        </form>
                        </div>
                    </div>
     
        );
    }
}

export default EditUser;