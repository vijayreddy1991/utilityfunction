var fs = require('fs');

var json1 = require(process.env.RELEASE_VERSION + '-buildplaneImagesAWS.json');
var json2 = require(process.env.RELEASE_VERSION + '-buildplaneImagesAZURE.json');
var json3 = require(process.env.RELEASE_VERSION + '-buildplaneImagesGCP.json');

var combined = json1.concat(json2);
combined = combined.concat(json3);

var uniqueBuildplaneImages = combined.filter((v,i,a)=>a.findIndex(v2=>(v2.imageId===v.imageId))===i);
fs.writeFileSync('newBuildPlaneImages.json', uniqueBuildplaneImages, 'utf8');
