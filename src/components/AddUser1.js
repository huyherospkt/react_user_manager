import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua:  false
        }
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        })
    }
    hienThiNut = () => {
        if(this.state.trangThaiChinhSua===true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai() /* Doi click vao */}>Đóng lại</div>;
        }
        else
            return <div className="btn btn-block btn-outline-primary" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
    }
    hienThiForm = () => {
        if(this.state.trangThaiChinhSua===true){
            return (
                <div className="card border-primary mb-3 mt-2">
                    
                    <div className="card-header">Thêm mới User</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Ten user" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Dien thoai" />
                    </div>
                    <div className="form-group">
                        <select className="custom-select" required>
                        <option value>Chọn quyền</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>Register</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-primary btn-block">Thêm mới</div>
                    </div>
                    </div>
                </div>
            )
        }
        return '';
            
    }
    render() {
        return (
            
            <div className="col-3">
                { this.hienThiNut() /* Chay luon */}  
                {this.hienThiForm()}
                </div>
        );
    }
}

export default AddUser;