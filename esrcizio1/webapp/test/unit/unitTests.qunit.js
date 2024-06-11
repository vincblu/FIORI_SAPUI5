/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"festinantelesson1/esrcizio1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
