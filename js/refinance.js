
function printable()
{
	document.temps.submit();
	
}

function jumpBox(list) {
   location.href = list.options(list.selectedIndex).value
}
   
function computeForm(form) {    
    var pmt1 = replaceChars(form.payment.value);
	var pmt1 = replaceChar(pmt1);	
	var prin1 = replaceChars(form.principal.value);
	var prin1 = replaceChar(prin1);	
	var nper = form.nper2.value;
	var i2 = parseFloat(form.intRate2.value);
	var i2 = replacePct(i2);	
	

	if (i2 > 20 )
	{
		alert ("Interest Rate must not be greater than " + 20 + " percent");
		form.intRate2.value=addPct('20');		
		i2 = parseFloat(form.intRate2.value);
		i2 = replacePct(i2);					
	}		
	else
	if (i2 < 1 )
	{
		alert ("Interest Rate must be greater than " + 1 + " percent");		
		form.intRate2.value=addPct('1');	
		i2 = parseFloat(form.intRate2.value);
		i2 = replacePct(i2);			
	}	

	var m=form.nper2.value*12;
	if (m< 70)
	{			
		alert ("Number of years must be at least " + Math.round(70/12));
		form.nper2.value='30';
		nper = form.nper2.value;			
	}
	else
	if (form.nper2.value > 30)
	{
		alert ("Number of years must not be greater than " + 30);			
		form.nper2.value='30';
		nper = form.nper2.value;			
	}

	if ( checkForm(prin1) && checkForm(pmt1)
		 && checkForm(nper) && checkForm(i2))  {
	var prin1 = parseFloat(prin1);
	var pmt1 = parseFloat(pmt1);
	prin2 = prin1
	var intPort1 = 0;
    var prinPort1 = 0;
    var accumInt1 = 0;
    var accumPrin1 = 0;	    	
       	if (i2 > 1.0) {
        	i2 = i2 / 100          
       	}
       	var i2  = i2  / 12;
    	var count1 = 0;
	    while(prin1 > 0) {
        	intPort1 = prin1
			prinPort1 = pmt1 - intPort1;
        	prin1 = prin1 - prinPort1;
        	accumPrin1 = accumPrin1 + prinPort1;       
        	count1 = count1 + 1;
        	if (count1 > 600) { break; } else { continue; }
       }  
    	var pow = 1;
    	for (var j = 0; j < nper *12; j++)
        pow = pow * (1 + i2);
    	var fpayment2 = (prin2 * pow * i2) / (pow - 1);
    	form.payment2.value = formatCurrency(parseInt(fpayment2,10)); 
   		var fmoSave = pmt1 - fpayment2;
   		moSave = parseInt(fmoSave,10);
		if (moSave <= "0"){ 
		alert("You might consider keeping your current loan");		
		form.moSave.value = "0";		
		return false;}
		form.moSave.value = formatCurrency(moSave);	  
		var ftotInt2 = (fpayment2 * nper *12) - prin2;   
   }
}
function clearForm(form)
{
    form.principal.value = "";
    form.payment.value = "";   
    form.intRate2.value = "";
    form.nper2.value = "";
    form.closingCost.value = "";
    form.payment2.value = "";
    form.moSave.value = ""; 
	var i2 = "";    
}

function replaceChar(entry) {
	out = "$"; 
	add = ""; 
	temp = "" + entry;
	while (temp.indexOf(out)>-1) {
		pos= temp.indexOf(out);
		temp = "" + (temp.substring(0, pos) + add + 
		temp.substring((pos + out.length), temp.length));
	}
	return temp;
}

function replacePct(entry) {
	out = "%"; 
	add = ""; 
	temp = "" + entry;
	while (temp.indexOf(out)>-1) {
		pos= temp.indexOf(out);
		temp = "" + (temp.substring(0, pos) + add + 
		temp.substring((pos + out.length), temp.length));
	}
	return temp;
}	
	
function replaceChars(entry) {
	out = ","; 
	add = ""; 
	temp = "" + entry;
	while (temp.indexOf(out)>-1) {
		pos= temp.indexOf(out);
		temp = "" + (temp.substring(0, pos) + add + 
		temp.substring((pos + out.length), temp.length));
	}
	return temp;
}

function formatCurrency(num) {			
			num=replaceChar(num);
			num=replaceChars(num);
		if ( checkForm(num));
{
			num = num.toString().replace(/$|,/g,'');
			if(isNaN(num)) num = "0";
			num = Math.floor(num).toString();
		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) 
			num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
			 
	return ('$' + num );	
}
}

function basicedit()
{			
	if 	(!IsMoney(document.temps.principal.value) || document.temps.principal.value.length ==0)
		document.temps.principal.value='$125,000';
		
	if 	(!IsMoney(document.temps.payment.value) || document.temps.payment.value.length ==0)
		document.temps.payment.value='$961';		

	if 	(!IsPct(document.temps.intRate2.value) || document.temps.intRate2.value.length ==0)
		document.temps.intRate2.value='7.5%';
		
	if 	(!IsNumber(document.temps.nper2.value) || document.temps.nper2.value.length ==0)
		document.temps.nper2.value='30';		
}	


function IsMoney(val)
	{
		var number="0123456789$,.";

		for (var i=0;i<val.length;i++)
		{
			if (number.indexOf(val.charAt(i)) == -1)
			{
				return false;
			}
		}
		return true;
	}

function IsNumber(val)
	{
		var number="0123456789.";

		for (var i=0;i<val.length;i++)
		{
			if (number.indexOf(val.charAt(i)) == -1)
			{
				return false;
			}
		}
		return true;
	}
	
function IsPct(val)
	{
		var number="0123456789.%,";

		for (var i=0;i<val.length;i++)
		{
			if (number.indexOf(val.charAt(i)) == -1)
			{
				return false;
			}
		}
		return true;
	}
	
function addPct(pct) {
			pct=replacePct(pct);
			pct=parseFloat(pct);		
		if (checkForm(pct));
	{
			return (pct + '%');
		}
}

function checkForm(toCheck) {
  isNum = true;
  for (j = 0; j < toCheck.length; j++) {
    if ( (toCheck.substring(j,j+1) < "0") && (toCheck.substring(j,j+1) != ".") || (toCheck.substring(j,j+1) > "9")
		 && (toCheck.substring(j,j+1) != ".")) {
      isNum = false;
      }
    }
  if ((isNum == false) || (toCheck.length == 0) || (toCheck == null)) {
  	alert("Please enter only numerical data in all fields.");
	return false;
  }
  else {
  	return true;
  }
}
