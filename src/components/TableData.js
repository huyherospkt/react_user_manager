import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtionClick = (idUser) => {
        //console.log(idUser);
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
        <TableDataRow 
        editFunClick={(user) => this.props.editFun(value)} 
        key={key} 
        id={value.id} 
        name={value.name} 
        tel={value.tel} 
        permission={value.permission} 
        stt={key+1}
        
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
        deleteButtonClick = {(idUser) => this.deleteButtionClick(idUser)}
        />
    ))
    render() {
        //console.log(this.props.dataUserProps);
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mappingDataUser()}
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;