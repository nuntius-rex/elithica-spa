/*
-------------------------------
Data Utility:
-------------------------------
This utility utilizes the standard fetch API:
//https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28

Note the usage of callbacks. Callbacks are fed to the given function to control
the display and output of the data per the given instance of use. See users.Mod.js
for an example of how to user for general REST operations.

*/

console.log("Data Utility loaded");
export default {
  init: function() {
    console.log("Init Data");
  },

}

//To retrieve all of the dataset at an end point:
export var fetchData=function(url,callBack){
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("GET-FETCH:");
    console.log(data);
    callBack(data,url);
  });
}

//To send data to the server to create a new resource:
export var postData=function(url,callBack,data){
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("POST:");
    console.log(data);
    callBack(data);
  });

}

//To Update a resource (should include full instance of resource item):
export var putData=function(url, callBack, id, data){
  fetch(url+"/"+id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("PUT:");
    console.log(data);
    callBack(data);
  });
}

//Update a resource (send just the changes):
export var patchData=function(url, callBack, id, data){
  fetch(url+"/"+id, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("PATCH:");
    console.log(data);
    callBack(data);
  });
}


//Delete a resource:
export var deleteData=function(url,callBack,id){
  fetch(url+"/"+id, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => {
    console.log("DELETE:");
    console.log(data);
    callBack(data);
  });
}
