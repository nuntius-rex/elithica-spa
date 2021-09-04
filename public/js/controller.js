
import homeMod from '../js/model/home.Mod.js';
import homeView from '../js/view/home.View.js';

import aboutMod from '../js/model/about.Mod.js';
import aboutView from '../js/view/about.View.js';

import contactMod from '../js/model/contact.Mod.js';
import contactView from '../js/view/contact.View.js';

import usersMod from '../js/model/users.Mod.js';
import usersView from '../js/view/users.View.js';

//Always set the first element as home!
export var routes=[
  {
    name: "home",
    path:"/",
    content: homeView.defDisplay(),
    view:homeView,
    proc: homeMod
  },
  {
    name: "home",
    path:"/home",
    content: homeView.defDisplay(),
    view:homeView,
    proc: homeMod
  },{
    name: "about",
    path:"/about",
    content: aboutView.defDisplay(),
    view:aboutView,
    proc: aboutMod
  },{
    name: "contact",
    path:"/contact",
    content: contactView.defDisplay(),
    view:contactView,
    proc: contactMod
  },{
    name: "users",
    path:"/users",
    content: usersView.defDisplay(),
    view:usersView,
    proc: usersMod
  }
];
