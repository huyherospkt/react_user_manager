import React, { Component } from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1'); //Tao Id ko trung nhau

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject:  {}
    }
  }

  
  componentWillMount() {
    //Kiem tra co localStorage nay chua
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      })
    }
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  
  deleteUser = (idUser) => {
    //console.log(idUser);
    var tempData = this.state.data.filter(item=>item.id!==idUser);
    this.setState({
      data: tempData
    })
    // tempData.forEach((value,key) => {
      
    //   if(value.id===idUser){
    //     //console.log(value.name);
    //   }
    // })
  }

  getUserEditInfoApp = (info) =>{
    //console.log('thong tin da sua '+info.name);
    //forEach: ko can data tra ve, map: giong forEach, nhung phai co data tra ve
    this.state.data.forEach((value,key) => {
      if(value.id===info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  editUser = (user) => {
    //console.log('Da ket noi');
    this.setState({
      userEditObject: user
    })
    //console.log(user);
  }

  getNewUserData = (name, tel, permission) => {
    //console.log('ket noi ok?');
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    
    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    })
    console.log(this.state.data);
  }

  getTextSearch = (dl) => {
    //alert('Da ket noi');
    //console.log('Du lieu component cha nhan duoc la: '+dl);
    this.setState({
      searchText : dl
    })
  }

  render() {
    //localStorage.setItem('userData', JSON.stringify(DataUser)); //Chuyen Object thanh chuoi de luu. Chuyen string -> Object dung: JSON.Parse();
    //console.log(this.state.Data);
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText)!==-1){
        ketqua.push(item);
      }
    })
    //console.log(ketqua);

    return (
      <div>
        <Header/>
        <div className="searchFrom">
            <div className="container">
                  <div className="row">
                  <Search 
                  getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                  checkConnectProps = {(dl) => this.getTextSearch(dl)}
                  ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}
                  editUserStatus = {this.state.editUserStatus}
                  changeEditUserStatus = {() => this.changeEditUserStatus()}
                  userEditObject = {this.state.userEditObject}
                  />
                  <TableData 
                  editFun={(user) => this.editUser(user)}
                  dataUserProps={ketqua}
                  changeEditUserStatus = {() => this.changeEditUserStatus()}
                  deleteUser = {(idUser) => this.deleteUser(idUser)}
                  />
                  <AddUser add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm={this.state.hienThiForm}/>
                  </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
