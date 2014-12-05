
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

if ((form.CA.value) >= (form.RA.value)){
	alert("Target Age must be greater than Current Age!");
	form.RA.focus();
	form.RA.select();
	return false;
}

	var IR = replacePct(form.IR.value) / 1200;
	var BB = replaceChars(form.BB.value);
	var BB = replaceChar(BB);
	var MS = replaceChars(form.MS.value);
	var MS = replaceChar(MS);	
	if (checkForm(form.CA.value) && checkForm(IR) && checkForm(BB) && checkForm(MS) && checkForm(form.RA.value));
	
	if (IR==0)
	{
		var Million=1000000;
		var C = eval(form.CA.value);
		var R = eval(form.RA.value);			
	
		if (BB >= Million)
		{
			form.MA.value = C;			
			form.MI.value = formatCurrency(0);			
		}
		else
		{
			var OP = (((Million - BB) / MS ) / 12 ) + C;
			var MI = (Million - BB) / ((R - C) * 12);	 
			form.MA.value = parseInt(OP);			
			form.MI.value = formatCurrency(MI);	
		}
		return false;
	}
		
	var YR = form.RA.value - form.CA.value;
	var C = eval(form.CA.value);
	var YR1 = YR * 12;
	var MS = MS - (2*MS);
	var x = Math.pow(1 + IR,YR1);
	var OP = (Math.log((-1000000 * IR + MS) / (MS - IR * BB)) / Math.log(1 + IR));
	var MI = parseInt((IR * (-1000000 + x * BB)) / (-1 + x))* -1;


if (MI <= 0){
	
	//alert("With that kind of initial investment, no monthly investment is needed to reach your goal!")
	form.MI.value = 0
	form.MA.value = parseInt(C + (OP / 12));
	return false;
}
	form.MI.value = formatCurrency(MI);
	form.MA.value = parseInt(C + (OP / 12));
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
		document.temps.BB.value='$5,000';

	if 	(!IsMoney(document.temps.MS.value) || document.temps.MS.value.length ==0)
		document.temps.MS.value='$200';

	if 	(!IsPct(document.temps.IR.value) || document.temps.IR.value.length ==0)
		document.temps.IR.value='12%';
		
	if 	(!IsNumber(document.temps.CA.value) || document.temps.CA.value.length ==0)
		document.temps.CA.value='40';		
		
	if 	(!IsNumber(document.temps.RA.value) || document.temps.RA.value.length ==0)
		document.temps.RA.value='65';									
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

