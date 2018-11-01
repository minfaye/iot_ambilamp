var mongoose	=require('mongoose');

var settingsSchema = new mongoose.Schema({
	defaultColor: {
		type: String
	},
	lightColor: {
		type: String
	},
	lightIsOn: {
		type: Boolean
	},
	hotThreshold: {
		type: Number
	},
	coldThreshold: {
		type: Number
	},
	humidThreshold: {
		type: Number
	},
	dryThreshold: {
		type: Number
	},
	darkThreshold: {
		type: Number
	}
});

var Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;