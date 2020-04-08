import h5 from "./entry/h5";
import wx from "./entry/wx";

const getProjectName = val => {
  switch (val) {
    case "h5":
      return h5;
    case "wx":
      return wx;
    default:
    //return h5;
  }
};

let result = process.env.mpvuePlatform || mpvuePlatform;
console.log("result", result);
export default getProjectName(result);
