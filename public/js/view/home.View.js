console.log("Home template loaded");
export default {
  defDisplay: function() {

    //Note: Here the display has hard coded data,
    //but could be variablized and loaded from the Model.
    //See the models/about.Mod.js for an example of post-load processing.

    let display=`
      <style media="screen" scoped>
        #ElithicaHeading img{
          vertical-align:middle;
        }
      </style>
      <h1 id="ElithicaHeading"><img src="img/logo/elithica-logo.png" alt="Elithica"> ELITHICA SPA</h1>
      <p>Welcome to the Elithica SPA (Single Page Application) Demo.</p>
      <p><i>Philosophy: "Load only what you need, not everything you may never need!"</i></p>
      <p>A simple way to create real single page applications with a minimal footprint.<br>
      Just straight JavaScript, no front end framework required.</p>
    `;
    return display;

  }
}
