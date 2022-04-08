var fs = require('fs');

// var json1 = require('./buildplaneawsimages.json');
// var json2 = require('./buildplaneazureimages.json');
// var json3 = require('./buildplanegcpimages.json');

console.log(buildplaneImagesUsEast1GCP.json);

var gcpBuildplaneImagesUseast = require('./buildplaneImagesUsEast1GCP.json');
var gcpBuildplaneImagesEucentral = require('./buildplaneImagesGCPEuCentral.json');
var gcpBuildplaneImagesUswest = require('./buildplaneImagesGCPUswest.json');
var gcpBuildplaneImagesEuropewest = require('./buildplaneImagesGCPEuropewest.json');
var gcpBuildplaneImagesAsiaeast = require('./buildplaneImagesGCPAsiaeast.json');


combinedGCPBuildPlaneImages = ((((gcpBuildplaneImagesUseast
                                .concat(gcpBuildplaneImagesEucentral))
                                .concat(gcpBuildplaneImagesUswest))   
                                .concat(gcpBuildplaneImagesEuropewest))
                                .concat(gcpBuildplaneImagesAsiaeast));

var uniqueImageIds = new Set();
var uniqueGCPBuildPlaneImages = [];

combinedGCPBuildPlaneImages.map (eachItem => {
  if (!uniqueImageIds.has(eachItem.imageId)) {
    uniqueImageIds.add(eachItem.imageId);
    uniqueGCPBuildPlaneImages.push(eachItem);
  }
});

fs.writeFileSync('newGCPBuildPlaneImages.json', JSON.stringify(uniqueGCPBuildPlaneImages, null, 2), {flag: 'w'});

// var combined = json1.concat(json2);
// combined = combined.concat(json3);
// var mySet = new Set();
// let uniqueBuildPlaneImages = [];
// combined.map (eachItem => {
//   if (!mySet.has(eachItem.imageId)) {
//     mySet.add(eachItem.imageId);
//     uniqueBuildPlaneImages.push(eachItem);
//   }
// });
// console.log(uniqueBuildPlaneImages);   
// fs.writeFileSync('newBuildPlaneImages.json', JSON.stringify(uniqueBuildPlaneImages, null, 2), {flag: 'w'});
