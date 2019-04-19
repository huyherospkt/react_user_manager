import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //trangThaiChinhSua:  false,
            id: "",
            name: "",
            tel: "",
            permission: ""
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
        //if(this.state.trangThaiChinhSua===true){
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
                        <option value={3}>Normal User</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-primary btn-block">Thêm mới</div>
                    </div>
                    </div>
                </div>
            )
        //}
        //return '';
            
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        //package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        //console.log(item);
    }

    kiemTraThangThai = () => {
        if(this.props.hienThiForm===true){ //Nhan props tu component cha (App.js)
            return (
                <div className="col">
                <div className="card border-primary mb-3 mt-2">
                    
                    <div className="card-header">Thêm mới User</div>
                    <div className="card-body text-primary">
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Ten user" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Dien thoai" />
                        </div>
                        <div className="form-group">
                            <select name="permission" onChange={(event) => this.isChange(event)} className="custom-select" required>
                            <option value>Chọn quyền</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal User</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-primary btn-block" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            )
        }
    }

    render() {
        //console.log(this.state);
        return (
            <div>
            
                { /*this.hienThiNut()*/ /* Chay luon */}  
                {this.kiemTraThangThai()}
            </div>
        );
    }
}

export default AddUser;