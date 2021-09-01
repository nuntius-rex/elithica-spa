console.log("Users template loaded");
export default {
  defDisplay: function() {

    let display=`
      <style media="screen" scoped>
        .usersTBL{
          border: solid 1px;
          padding:5px;
        }
        .usersTBL td{
          border: solid 1px;
          padding:10px;
        }
        .usersTBL td:nth-child(3){
          text-align:center;
        }
        #usersMenu a{
          color:#8b8b8b;
        }
        .editUser{
          cursor:pointer;
        }
        .deleteUser{
          cursor:pointer;
        }
      </style>

      <h1>Users</h1>
      <p>This is the Users page. The following data was loaded from a REST api.</p>
      <div id="usersMenu"><a id='getUsers'>Get Users</a> | <a id='newUser'>New User</a></div>
      <div id="usersDisplay"></div>
    `;
    return display;

  },
  userForm: function(){
    let userForm=`
      <form id="userForm">
        <p>
        <label>New User:</label><br>
        <input type="text" name="name" id="userName" value="">
        </p>
        <p>
        <label>Email:</label><br>
        <input type="email" name="email" id="userEmail" value="">
        </p>
        <button type="submit">Save</button>
      </form>
    `
    return userForm;

  }
}
