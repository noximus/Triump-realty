
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
	
	var YR = form.RA.value - form.CA.value;
	var p = 1/12;
	var q = replacePct(form.IR.value);
	
	if (q==0)	
	{
		alert("Sorry, the Interest Rate must be greater than zero.");	
		form.IR.value='12%';
		form.IR.focus();	
		form.IR.select();			
		q = replacePct(form.IR.value);		
	}
	
	var q = (q/100) + 1;	
	var r = Math.pow(q,p);	
	var m = replacePct(form.MTR.value) / 3;	
	var m2 = replacePct(form.MTR.value) / 1.2;
	var m = m  / 1000 + 1;
	var m2 = m2 / 1000 + 1;
	var n = YR * 12;
	var BB = replaceChars(form.BB.value);
	var BB = replaceChar(BB);
	var BBproj = BB * Math.pow(q,YR);
	var a = replaceChars(form.MS.value);
	var a = replaceChar(a); 	
	if (a > 3001) {
		alert ("Maximum contribution is $3000")	
		var a = 3000
		document.temps.MS.value = "$3,000";
	}
	var a = a / 12;
	var part1 = (r-1);
	var part2 = Math.pow(r,n);
	if (checkForm(form.RA.value) && checkForm(q) && checkForm(BB) && checkForm(a) 
		&& checkForm(form.CA.value) && checkForm(m));
		
	var RI = parseInt(a * r * (part2 - 1) / part1 + BBproj);
	document.temps.RI.value = formatCurrency(RI); 
	var mtr2 = Math.pow(m,YR);
	var mtr3 = Math.pow(m2,YR);	
	document.temps.TS.value = formatCurrency(parseInt(RI / mtr2));
	document.temps.TS1.value = formatCurrency(parseInt(RI / mtr3));	
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
	if 	(!IsMoney(document.temps.BB.value) || document.temps.BB.value.length ==0)
		document.temps.BB.value='$1,000';
		
	if 	(!IsPct(document.temps.IR.value) || document.temps.IR.value.length ==0)
		document.temps.IR.value='12%';		

	if 	(!IsMoney(document.temps.MS.value) || document.temps.MS.value.length ==0)
		document.temps.MS.value='$2,000';

	if 	(!IsNumber(document.temps.CA.value) || document.temps.CA.value.length ==0)
		document.temps.CA.value='40';	
		
	if 	(!IsNumber(document.temps.RA.value) || document.temps.RA.value.length ==0)
		document.temps.RA.value='65';		
	
	if 	(!IsPct(document.temps.MTR.value) || document.temps.MTR.value.length ==0)
		document.temps.MTR.value='28%';			
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


