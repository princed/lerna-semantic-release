var Repository = require('@ahfarmer/lerna/lib/Repository');
var PackageUtilities = require('@ahfarmer/lerna/lib/PackageUtilities');

module.exports = {
  getAllPackages: function () {
    return PackageUtilities.getPackages(new Repository());
  }
};
