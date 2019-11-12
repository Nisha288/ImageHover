sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ImageHoverApp.ImageHoverApp.controller.View1", {
		onInit: function () {
            	this.attachPopoverOnMouseover(this.byId("image0"),
				this.byId("popover"));
		},
		attachPopoverOnMouseover: function (targetControl, popover) {
			targetControl.addEventDelegate({
				onmouseover: this._showPopover.bind(this, targetControl, popover),
				onmouseout: this._clearPopover.bind(this, popover)
			}, this);
		},

		_showPopover: function (targetControl, popover) {
			this._timeId = setTimeout(() => popover.openBy(targetControl), 500);
		},

		_clearPopover: function (popover) {
			clearTimeout(this._timeId) || popover.close();
		}
	});
});