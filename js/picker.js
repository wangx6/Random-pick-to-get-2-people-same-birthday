/**
 * This module tells you how many people you will have to ask
 * utill you have to people that have the same birthday
 * @author Xin Wang <wangx6@gmail.com>
 */
(function( window ) {
	'use strict';

	var Sample = function() {
	    this.arr = [];
	    this.dom = document.getElementById('sample-picker');
	    this.dom.style['font-size'] = '23px';
	    this.init();
	};

	Sample.prototype.init = function() {
	    var no = 365, i = 1;
	    for( i = no; i--;) {
	        this.arr.push(i);
	    }
	};

	Sample.prototype.pick = function(  ) {
	    var ss = {},
	        ln = this.arr.length,
	        i = 0,
	        ranPick;

	    for( ; i < ln; i++ ) {
	        ranPick = Math.floor((Math.random() * this.arr.length) + 0);
	        if(!ss[this.arr[ranPick]]) {
	            ss[this.arr[ranPick]] = 1;  
	        } else {
	        	this.dom.innerHTML = [
	        		'Day of the year is: ' + this.arr[ranPick],
	        		'<br>',
	        		'Number of people aksed is: ' + i,
	        		'<br>',
	        	].join('');
	            break;
	        }
	    }
	};
	var start = new Sample();
	start.pick();
	
})(window);
