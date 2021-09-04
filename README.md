# Elithica SPA
A Pure JavaScript Modular SPA (With No Front End Framework) - Ultralight, ES6 Modules, MVC Pattern, Fetch-REST

> Philosophy: "Load only what you need, not everything you may never need!"

The evolution of this project can be explored in the following repos:

In the first SPA Router repo, I wanted to build a SPA application with plain JavaScript. Borrowing from a few sources, I was able to accumulate the basics and run on Node with Express.

[Simple SPA Router](https://github.com/nuntius-rex/simple-spa-router.git)


However, then I wanted to move the concept forward with ES6 modules and an MVC type structure.

[Simple SPA Router ES6](https://github.com/nuntius-rex/simple-spa-router-es6)

Finally, in this example, which I named Elithica, to replace my old complex [AMD front end](https://github.com/nuntius-rex/Elithica-AMD-Node), I take things a step further. I added REST functionality through the native JavaScript Fetch API. All weighing in at just 1.8MB (with Express installed). Add your own CSS Framework if you like (Bootstrap, etc.) and you've got a tremendous starting point for projects.


![Alt](/public/img/screenshot.png "Screenshot of Simple SPA Router ES6")

## REST Data

All the data enhancements are done through the following file and the given model:

```
util/data.Util.js
```

Since Fetch uses a promise based encapsulation, the way in is to pass in a callback function from the model. In the following example, found in model/users.Mod.js, I create a callback that will display the result data.

```
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
  }

```
The data.Util.js process postData will handle it as follows:

```
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

```

All of the various REST processes for FETCH, POST, PUSH, PATCH and DELETE work in a similar fashion.

## How to Run

```
git clone https://github.com/nuntius-rex/simple-spa-router-es6

```
Then with node:

```
npm install express
node server.js
```
Open the browser to http://localhost:8000


## About the Author
Written by Dan Guinn
http://danguinn.com
