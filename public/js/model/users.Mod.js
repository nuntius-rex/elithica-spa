console.log("Users module loaded");

import {fetchData, postData, putData, patchData, deleteData} from "../util/data.Util.js";

var allUsers=[];
var userMod="";
var usersDisplay="";
var View="";

export default {

  init: function(view) {
    console.log("Init Users");

    //this.users=this;
    //Set name to users for scoping:
    userMod=this;

    //assign view to object view
    View=view;

    //Select usersData container:
    usersDisplay=document.querySelector('#usersDisplay');

    //Load users:
    this.getUsers();

    //Set Menu Listeners
    this.getUsersListener();
    this.userFormListener("new");

  },
  //---------------------------------
  //LOAD USERS FUNCTIONALITY:
  // 1.) Get Users Listener
  // 2.) Get Users (data)
  //---------------------------------
  getUsersListener:function(users){
    //Set listener on Get Users Link:
    let getUsers=document.querySelector('#getUsers');
    getUsers.addEventListener("click",function(){
        //Load users:
        userMod.getUsers();
    });
  },
  getUsers:function(){

      //Build your call back for how the data will be displayed:
      let callBack=function(data,url){

        allUsers=data;
        //let aboutResult=document.querySelector('#usersData');
        let dataResult=`
        <p>Get Users Result:</p>
        <table class="usersTBL">
          <tr>
            <thead>
              <th>ID</th>
              <th>Title</th>
              <th>Options</th>
            </thead>
          </tr>
          <tbody>
        `;
        for (var i = 0; i < data.length; i++) {
          dataResult+=`
            <tr>
              <td>${data[i].id}</td>
              <td>${data[i].name}</td>
              <td>
                <span class='editUser' id='edit-${data[i].id}'>&#9998;</span>
                <span class='deleteUser' id='delete-${data[i].id}' >&#x1f5d1;</span>
              </td>
            </tr>
          `;
        }
        dataResult+=`
          <tr>
            <td colspan=3>Data Source: <a href='${url}'><small>${url}</small></a></td>
          </tr>
          </tbody>
          </table>
        `;

        usersDisplay.innerHTML=dataResult;
        userMod.editUserListener();
        userMod.deleteUserListener();
      }

      //Pass the callback to the fetchData function to make the call and display:
      fetchData("https://jsonplaceholder.typicode.com/users", callBack);
  },
  //---------------------------------
  //NEW USER FUNCTIONALITY
  // 1) userFormListener (POST RELATED & PATCH)
  // 2) postUsers (Save the new user)
  //---------------------------------
  userFormListener:function(type, id){

    console.log("listener set");

    //Get the form from the view:
    var userFormHTML=View.userForm();
    //var postUsers=this.postUsers;
    //Set listener on New User Link:

    if(type=="new"){

      let newUser=document.querySelector('#newUser');
      newUser.addEventListener("click",function(){

          //Load form from view:
          usersDisplay.innerHTML=userFormHTML;
          //Set listener on the form
          let userForm=document.querySelector('#userForm');
          userForm.addEventListener("submit",function(e){
              e.preventDefault();
              const formData = new FormData(e.target);
              const formProps = Object.fromEntries(formData);
              console.log(formProps);
              userMod.postUsers(formProps);
          });
      });

    }else if(type=="edit"){

      let userForm=document.querySelector('#userForm');
      userForm.addEventListener("submit",function(e){
          e.preventDefault();
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          console.log(formProps);
          console.log(self);
          userMod.patchUsers(formProps, id);

      });

    }


  },
  postUsers:function(formProps){

    let callBack=function(data){
      if(data.id){
        usersDisplay.innerHTML=`<p>The user has been saved with a new id of ${data.id}</p>`;
      }else{
        usersDisplay.innerHTML+=`<p>There was a problem saving the user data.<br>
        The service may not be available.</p>`;
      }
    }

    postData(
      "https://jsonplaceholder.typicode.com/users",
      callBack,
      formProps //must be an object
    );
  },
  //-------------------------------------------
  //Only for updating the entire user record:
  //-------------------------------------------
  putUsers:function(id, formProps){
    /* SAMPLE USAGE:
    let callBack=function(data){
        console.log(data);
    };
    putData("https://jsonplaceholder.typicode.com/users",
      callBack,
      id,
      formProps
    );
    */
  },
  //---------------------------------
  //EDIT USER FUNCTIONALITY
  //---------------------------------
  editUserListener:function(){

    let editUser=document.querySelectorAll('.editUser');
    let userFormHTML=View.userForm();
    let userFormListener=this.userFormListener;

    for (var i = 0; i < editUser.length; i++) {
      editUser[i].addEventListener('click',function(){

          usersDisplay.innerHTML=userFormHTML;
          console.log(this.id);
          //console.log(allUsers[this.id]);
          //console.log(allUsers[this.id].name);

          let userName=document.getElementById('userName');
          let userEmail=document.getElementById('userEmail');
          let rid=(this.id).replace("edit-","");

          let result=allUsers.filter( function(item){
              if(item.id==rid){
                return item;
              }
          });

          console.log(result);

          userName.value=result[0].name;
          userEmail.value=result[0].email;

          userFormListener("edit",rid)

      });
    }

  },
  patchUsers:function(formProps, id){

    let callBack=function(data){
      if(data.id){
        usersDisplay.innerHTML=`
          <p>The user data has been updated.</p>
          <p>User id: ${data.id}</p>
          <p>User name: ${data.name}</p>
          <p>User email: ${data.email}</p>
        `;
      }else{
        usersDisplay.innerHTML+=`<p>There was a problem saving the user data.<br>
        The service may not be available.</p>`;
      }
    };

    patchData(
      "https://jsonplaceholder.typicode.com/users",
      callBack,
      id,
      formProps //must be an object
    );
  },
  //---------------------------------
  //---------------------------------
  deleteUserListener:function(){

    let deleteUser=document.querySelectorAll('.deleteUser');

    for (var i = 0; i < deleteUser.length; i++) {
      deleteUser[i].addEventListener('click',function(){
          console.log(this.id);
          let rid=(this.id).replace("delete-","");
          console.log(rid);
          userMod.deleteUsers(rid)

      });
    }

  },
  deleteUsers:function(rid){

    let callBack=function(data){
      usersDisplay.innerHTML=`<p>The user was successfully deleted (simulated for demo).</p>`;
    };

    deleteData("https://jsonplaceholder.typicode.com/users",callBack,rid);
  }


}
