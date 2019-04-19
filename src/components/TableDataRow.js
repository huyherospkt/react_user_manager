import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission===1)
            return "Admin";
        else if(this.props.permission===2)
            return "Moderator";
        else
            return "Normal User";
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser) => {
        //console.log('id cua phan tu: '+idUser);
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={() => this.editClick()}>
                    <i className="fa fa-edit"/> Sửa
                    </div>
                    <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>
                    Xóa
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;