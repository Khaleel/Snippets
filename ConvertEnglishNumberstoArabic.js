
/******************

// CHANGE CURRENCY 
// - Find all prices
// - and replace them with Arabic
// - United Arab Emirates
// - AED Dirham

******************/

if(jQuery('.sss-arabic').length){
	
	// VARS
	 var en_currency	= "AED";
	 var ar_currency	= "درهم";
	 var st_currency	= "span.price";

	// ARRAY
	 var en = ['0','1','2','3','4','5','6','7','8','9'];
	 var ar = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];

	// GO FOR IT
	jQuery(st_currency).text(function(i, val) {

	 return val.replace(en_currency, ar_currency).replace(/\d/g, function(m) {
	 	return ar[en.indexOf(m)];
	 });

	});

}



	
