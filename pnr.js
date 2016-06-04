// ==UserScript==
// @name       Postnr fix
// @namespace  https://github.com/swedex
// @version    0.1
// @changes    0.2: 
// @changes    0.1: first try
// @description  remove space from postnr
// @match      http://www.postnummerservice.se/*
// @auth		swedex
// @copyright no touchy feely
// ==/UserScript==

// in id= address_results
// str.replace(/\s/g,'')

textNodes = document.evaluate( 
"//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
var searchRE = new RegExp('^\d{3}\s\d{2}$','g');
var replace = ''; 

for (var i=0;i<textNodes.snapshotLength;i++) { 
	var node = textNodes.snapshotItem(i); 
	node.data = node.data.replace(searchRE, replace);
	}
