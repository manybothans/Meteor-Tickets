Package.blaze.UI.registerHelper('dateText', function(date) {
	return moment(new Date(date)).format("MMM D, YYYY, h:mm:ss A");
});