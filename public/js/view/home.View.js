console.log("Home template loaded");
export default {
  defDisplay: function() {

    //Note: Here the display has hard coded data,
    //but could be variablized and loaded from the Model.
    //See the models/about.Mod.js for an example of post-load processing.

    let display=`
      <h1>Home</h1>
      <p>This is the Home page.</p>
    `;
    return display;

  }
}
