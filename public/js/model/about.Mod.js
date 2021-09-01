console.log("About module loaded");
export default {
  init: function() {
    console.log("Init About");

    //Trigger secondary process on load, in this case a listener:
    this.aboutBTNListener();

  },
  aboutBTNListener:function(){

    //Listen to the button and write to the container when clicked:
    let aboutBTN=document.querySelector('#aboutButton');
    let aboutResult=document.querySelector('#secondProcResult');
    aboutBTN.addEventListener("click", function(){
          aboutResult.innerHTML="You clicked the About page secondary process button!";
          //console.log("You clicked the about button!");
    });



  }
}
