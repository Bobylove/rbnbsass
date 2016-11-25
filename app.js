$(document).ready(function(){
	"use strict";

	var me = {
		btn: $('button'),

		init: function() {
			me.listener();

		},
		listener: function() {
			$('.btnShow').click(me.clickBtn) 
		},
		clickBtn: function() {
			$('.menuHide').show();

		}

	}
	me.init();

});