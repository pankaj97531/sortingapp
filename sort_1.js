(function() {
	
	function sortElements( elements, callback ) {
		var elems = [];
		for( var i = 0; i < elements.length; ++i ) {
			var el = elements[i];
			elems.push( el );
		}
		var sorted = elems.sort( callback );
		return sorted;	
	}
	
	function sortAscending( a, b ) {
		//console.log(a.firstChild.nodeValue);
		var aValue = parseInt( a.firstChild.nodeValue, 10 );
		var bValue = parseInt( b.firstChild.nodeValue, 10 );
		return aValue - bValue;	
	}
	
	function sortDescending( a, b ) {
		var aValue = parseInt( a.firstChild.nodeValue, 10 );
		var bValue = parseInt( b.firstChild.nodeValue, 10 );
		return bValue - aValue  ;	
	}		
	
	document.addEventListener( "DOMContentLoaded", function() {
		var elements = document.querySelectorAll( "#myUL li" ),
			test = document.querySelector( "#myUL" ),
			asc = document.querySelector( "#asc" ),
			desc = document.querySelector( "#desc" );
		    
		    
		    asc.addEventListener( "click", function() {
			//	console.log('asc');
			    var sortedElements = sortElements( elements, sortAscending );
			    var html = "";
			    for( var i = 0; i < sortedElements.length; ++i ) {
				    html += sortedElements[i].outerHTML;
			    }
				//console.log(html);
			    test.innerHTML = html;
			    
		    }, false);
		    
		    desc.addEventListener( "click", function() {
			//	console.log('desc');
			    var sortedElements = sortElements( elements, sortDescending );
			    var html = "";
			    for( var i = 0; i < sortedElements.length; ++i ) {
				    html += sortedElements[i].outerHTML;
			    }
			    test.innerHTML = html;
			    
		    }, false);
		
		
		
	});
	
})();