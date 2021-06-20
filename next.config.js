const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: ["styles"],
		additionalData: "@import 'utils';",
	},
};
