/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"festinantelesson1/creaproject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
