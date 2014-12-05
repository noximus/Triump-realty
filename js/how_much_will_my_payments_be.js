
function printable()
{
	document.temps.submit();
	
}

function floor(number)
{
  return Math.floor(number*Math.pow(10,2))/Math.pow(10,2);
}

function computeForm(form){
	basicedit();

	var m=form.YR.value*12;
	if (m< 70)
	{			
		alert ("Term in Years must be at least " + Math.round(70/12));
		form.YR.value='30';	
	}
	else
	if (form.YR.value > 30)
	{
		alert ("Term in Years must not be greater than " + 30);			
		form.YR.value='30';		
	}		
		
	if (replacePct(form.IR.value) > 20 )
	{
		alert ("Interest Rate must not be greater than " + 20 + " percent");			
		form.IR.value=addPct('20');				
	}
	else
	if (replacePct(form.IR.value) < 1 )
	{
		alert ("Interest Rate must be greater than " + 1 + " percent");
		form.IR.value=addPct('1');				
	}		
		
	var IR = replacePct(form.IR.value);
	var mi = IR / 1200;	
	var base = 1;
	var mbase = 1 + mi;
	var loanA = replaceChars(form.LA.value);
	var loanA = replaceChar(loanA);
	if ( checkForm(IR) && checkForm(loanA) && checkForm(form.YR.value));
{
	for (i=0; i<form.YR.value * 12; i++)  
    base = base * mbase	
  }	
  
	form.PI.value = formatCurrency(floor(loanA * mi / ( 1 - (1/base))));    
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
	if 	(!IsMoney(document.temps.LA.value) || document.temps.LA.value.length ==0)
		document.temps.LA.value='$125,000';

	if 	(!IsPct(document.temps.IR.value) || document.temps.IR.value.length ==0)
		document.temps.IR.value='7.5%';
		
	if 	(!IsNumber(document.temps.YR.value) || document.temps.YR.value.length ==0)
		document.temps.YR.value='30';				
}	

function IsMoney(val)
	{
		var number="0123456789$,.";

		for (var i=0;i<val.length;i++)
		{
			if (number.indexOf(val.charAt(i)) == -1)
			{
				alert('Please enter a positive value.');
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
	if ((toCheck.substring(j,j+1) < "0") && (toCheck.substring(j,j+1) != ".") || (toCheck.substring(j,j+1) > "9")) {
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

