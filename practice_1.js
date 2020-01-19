(function(){
	function sortElement(elements , callback){
		var elems = [];
		for(var i=0;i<elements.length;i++){
			//console.log(elements[i].innerHTML);			
			elems.push(elements[i]);
		}

		var sortedElement = elems.sort(callback);
		//console.log(sortedElement);
		return sortedElement;
	}
	function ascSortfunction(a,b){
		var aelem = a.firstChild.nodeValue ;
		var belem = b.firstChild.nodeValue;
		//console.log(aelem > belem);
		if(aelem > belem){
			return 1;
		}else if(aelem < belem){
		return -1;
		}
		return 0;
	}
	document.addEventListener('DOMContentLoaded',function(){
		var parentElement = document.querySelectorAll('#list_item li');
		var test = document.getElementById('list_item');
		var asc = document.getElementById('asc');
		asc.addEventListener('click',function(){
			var html = "";
			var sortedElement = sortElement(parentElement , ascSortfunction);
			for(var i=0;i<sortedElement.length;i++){
				html+=sortedElement[i].outerHTML;
			}
			console.log(html);
			test.innerHTML = html;
		},false)
	})
})();

var arr = ["pankaj","ajay",'rajesh',"sumit","kunal"];
arr.sort(function(a,b){
	if(a.toLowerCase() > b.toLowerCase()){
		return 1;
	}else if(a.toLowerCase()==b.toLowerCase()){
		return 0;
	}else{
	return -1
	}	
});
console.log(arr);