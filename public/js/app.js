
    //Import Routes from Controller:
    import {routes} from "./controller.js";

    //To override the root directory, if other than root folder:
    const rootDir=""; //

    //Discern Initial Route:
    var route=rootDir+window.location.pathname;
    //Relace duplicate slashes:
    route=route.replace(/\/\/+/g, '/');

    //Set route to / for pathing, if not the root folder:
    if(route==rootDir ){
      route="/";
    }

    console.log(route);

    //Root HTML Target:
    const rootDiv = document.getElementById('root');

    //Default page load to url route:
    const result = routes.filter( function(item){
        if(item.path==route){
          return item;
        }
    });
    rootDiv.innerHTML = result[0].content;


    //spa_menu listeners:
    const mainMenuArray=document.querySelectorAll('.spa_menu a');

    //loop through menu items:
    for (var i = 0; i < mainMenuArray.length; i++) {

        //get the datasets of each link:
        let linkData=mainMenuArray[i].dataset;

        //add a listener to each link:
        mainMenuArray[i].addEventListener("click", function(){

          //console.log("Clicked");
          //console.log('/'+linkData.link);

          //build the path:
          var path="/"+linkData.link;
          //console.log(path);

          //Filter the routes by path:
          const result = routes.filter( function(item){
              if(item.path==path){
                return item;
              }
          });

          //console.log(result);
          //console.log(result[0].path);
          //console.log(result[0].content);

          //Set the browser history:
          let pathname=rootDir+result[0].path;
          window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
          )

          //Write content from result:
          rootDiv.innerHTML = result[0].content;

          //initiate any secondary page process that might exist in the page model:
          //Pass the View to the Modal for usage:
          result[0].proc.init(result[0].view);

          //Browser Back and Forward:
          window.onpopstate = () => {
            //console.log(window.location.pathname);
            //console.log(routes);

            let result = routes.filter( function(item){
                let loc=window.location.pathname;
                loc=loc.replace(rootDir,"");
                if(item.path==loc){
                  return item;
                }
            });
            //console.log(result);
            rootDiv.innerHTML = result[0].content;

            //initiate any secondary page process that might exist in the page model:
            //Pass the View to the Modal for usage:
            result[0].proc.init(result[0].view);
          }//end onpopstate

        });
    }
