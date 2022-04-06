var fs = require('fs');

var json1 = require('./buildplaneawsimages.json');
var json2 = require('./buildplaneazureimages.json');
var json3 = require('./buildplanegcpimages.json');

var combined = json1.concat(json2);
combined = combined.concat(json3);
var mySet = new Set();
let uniqueBuildPlaneImages = [];

// console.log(combined);

combined.map (eachItem => {
  if (!mySet.has(eachItem.imageId)) {
    mySet.add(imageId);
    uniqueBuildPlaneImages.push(eachItem);
  }
});

console.log(uniqueBuildPlaneImages);
// var uniqueBuildplaneImages = combined.filter((v,index,a) =
                                             

// var uniqueBuildplaneImages = combined.filter((v,index,a)=>a.findIndex(v2=>(v2.imageId===v.imageId))===index);
// fs.writeFileSync('newBuildPlaneImages.json', JSON.stringify(uniqueBuildplaneImages, null, 2), {flag: 'w'});
