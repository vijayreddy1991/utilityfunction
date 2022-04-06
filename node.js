var fs = require('fs');

var json1 = require('./buildplaneawsimages.json');
var json2 = require('./buildplaneazureimages.json');
var json3 = require('./buildplanegcpimages.json');

var combined = json1.concat(json2);
combined = combined.concat(json3);
var mySet = new Set();
let uniqueBuildPlaneImages = [];
combined.map (eachItem => {
  if (!mySet.has(eachItem.imageId)) {
    mySet.add(eachItem.imageId);
    uniqueBuildPlaneImages.push(eachItem);
  }
});
console.log(uniqueBuildPlaneImages);   
fs.writeFileSync('newBuildPlaneImages.json', JSON.stringify(uniqueBuildPlaneImages, null, 2), {flag: 'w'});
