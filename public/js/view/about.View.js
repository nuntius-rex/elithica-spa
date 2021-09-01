console.log("About template loaded");
export default {
  defDisplay: function() {

    //Note: Here the display has hard coded data, 
    //but could be variablized and loaded from the Model.
    //See the models/about.Mod.js for an example of post-load processing.

    let display=`
      <h1>About</h1>
      <p>This is the About page.</p>
      <button type="button" id="aboutButton">Secondary Process</button>
      <div id="secondProcResult"></div>
    `;
    return display;

  }
}
