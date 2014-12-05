var gerrflag=false;

function printable()
{
	document.temps.submit();
	
}

function floor(number)
{
  return Math.floor(number*Math.pow(10,2))/Math.pow(10,2);
}

function prefillForm(form){
	var mi = replacePct(form.IR.value) / 1200;
	var loanA = replaceChars(form.LA.value);
	var loanA = replaceChar(loanA);
	var MIR = loanA * mi + 1;
	var base = 1;
	var mbase = 1 + mi;
	var x = replaceChars(form.MP.value);
	var x = replaceChar(x);

	if (x < MIR){		
		form.MP.value=formatCurrency(MIR+1);
	}
}

function computeForm(form){

	basicedit();

	var IR = replacePct(form.IR.value);
	if (IR <="0" || IR=="")
	{
		alert("Sorry, the Interest Rate must be greater than zero.");
		form.IR.value='17.5%';					
	}	
	else
		if (IR > 99)
		{
		alert("Sorry, the Interest rate cannot exceed 99%.");
		form.IR.value='17.5%';					
		}	
	
	
	var mi = replacePct(form.IR.value) / 1200;
	var loanA = replaceChars(form.LA.value);
	var loanA = replaceChar(loanA);
	var MIR = loanA * mi + 1;
	var base = 1;
	var mbase = 1 + mi;
	var x = replaceChars(form.MP.value);
	var x = replaceChar(x);
	var YR =eval(form.YR.value);

	if (loanA<="0" || loanA=="")
	{
		alert("Sorry, the Current Balance must be greater than zero.");
		form.LA.value='$4,500';					
	}
		
	if (x < MIR){	
		alert("Your monthly payment must be greater than the accruing interest!")	
		var loanA = 0;	
		form.IR.value='17.5%';			
	}
	
	if (YR<="0" || YR=="")
	{
		alert("Sorry, the Pay Off Goal must be greater than zero.");
		form.YR.value='24';				
	}
		
	
	if ( checkForm(replacePct(form.IR.value)) && checkForm(loanA) && checkForm(form.YR.value)
		 && checkForm(x));
	var OP = (Math.log((x) / (x - mi * loanA)) / Math.log(1 + mi));		
{
	for (i=0; i<form.YR.value; i++){ 
   			base = base * mbase;}
	}
	form.PI.value = formatCurrency(floor(loanA * mi / ( 1 - (1/base))));
	form.PO.value = parseInt(OP)+1;
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
		document.temps.LA.value='$4,500';

	if 	(!IsMoney(document.temps.MP.value) || document.temps.MP.value.length ==0)
		document.temps.MP.value='$100';

	if 	(!IsPct(document.temps.IR.value) || document.temps.IR.value.length ==0)
		document.temps.IR.value='17.5%';
		
	if 	(!IsNumber(document.temps.YR.value) || document.temps.YR.value.length ==0)
		document.temps.YR.value='24';							
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

