var fs = require('fs');

var json1 = require('./buildplaneawsimages.json');
var json2 = require('./buildplaneazureimages.json');
var json3 = require('./buildplanegcpimages.json');

var combined = json1.concat(json2);
combined = combined.concat(json3);

var uniqueBuildplaneImages = combined.filter((v,i,a)=>a.findIndex(v2=>(v2.imageId===v.imageId))===i);
fs.writeFileSync('newBuildPlaneImages.json', JSON.stringify(uniqueBuildplaneImages), {flag: 'w'});
console.log(newBuildPlaneImages.json);
