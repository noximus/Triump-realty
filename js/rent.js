
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

//FUNCTION CALCULATES MONTHLY PAYMENT, TOTAL OF MONTHLY PAYMENTS, AND AVERAGE MONTHLY PAYMENT
	var INT = replacePct(form.INT.value);
	var mi = INT / 1200;	
	var base = 1;
	var mbase = 1 + mi;
	var RENT = replaceChars(form.RENT.value);
	var RENT = replaceChar(RENT);
	var TERM = form.TERM.value;	
	var loanB = replaceChars(form.PPRICE.value);  //ORIGINAL VALUE OF PROPERTY
	var loanB = replaceChar(loanB);
	var DOWN = replacePct(form.DOWN.value);
	var loanA = loanB - (loanB * (DOWN/100));
	var PropTax = replacePct(form.PropTax.value);
	var AnApp = replacePct(form.AnApp.value);
	var YR=form.YR.value;			
	var TERM=form.TERM.value;
	
	if (RENT<="0" || RENT=="")
	{
		alert("Sorry, the Current Rent must be greater than zero.");
		form.RENT.value='$975';		
		form.RENT.focus();
		form.RENT.select();	
		init();
		return false;			
	}
	
	if (loanB<="0" || loanB=="")
	{
		alert("Sorry, the Purchase Price of Home must be greater than zero.");
		form.PPRICE.value='$175,000';		
		form.PPRICE.focus();
		form.PPRICE.select();	
		init();
		return false;			
	}
		
	
	if (YR<="0" || YR=="")
	{
		alert("Length of Loan Term must be greater than zero.");
		form.YR.value= '30';
		form.YR.focus();
		form.YR.select();	
		
		YR=form.YR.value;
	}	
	
	if (INT<="0" || INT=="")
	{
		alert("Sorry, the Interest Rate must be greater than zero.");
		form.INT.value='7.5%';
		form.INT.focus();
		form.INT.select();
		init();
		return false;
	}	
		
	if (TERM<="0" || TERM=="")
	{
		alert("Sorry, the Years must be greater than zero.");
		form.TERM.value='7';		
		form.TERM.focus();
		form.TERM.select();	
		init();
		return false;			
	}
	
	if ( checkForm(INT) && checkForm(loanB) && checkForm(TERM) && checkForm(DOWN) 
		&& checkForm(RENT) && checkForm(YR) && checkForm(AnApp) 
		&& checkForm(PropTax));
	

{
	for (i=0; i<form.YR.value * 12; i++)  
    base = base * mbase	
  }	

	var PI = floor(loanA * mi / ( 1 - (1/base)));  //MONTHLY PAYMENT BASED ON AMOUNT BORROWED
	var PropTax = PropTax / 120
	var PI2 = PI + ((PropTax * loanA)/12);  //MONTHLY PAYMENT PLUS OTHER RELATED EXPENSES
	var pi = floor(loanA * mi / ( 1 - (1/base)));	
	var TotalOwn = (parseInt(PI2 * TERM * 12));
	form.TotalOwn.value = formatCurrency(TotalOwn);
	var AvgOwn = parseInt(PI2);
	form.AvgOwn.value = formatCurrency(AvgOwn);

// CALCULATES TOTAL AND AVERAGE RENT PAYMENTS
 	var RENT1 = Math.pow(1.0017,(12*TERM));  
	var NEWRENT = (RENT1) + (RENT1 * RENT)/ 1.0017;
	var AvgRent = (parseInt((NEWRENT - RENT) / 2) + parseInt(RENT));		
	form.AvgRent.value = formatCurrency(AvgRent);	
	var TotalRent = AvgRent * TERM * 12;		
	form.TotalRent.value = formatCurrency(TotalRent);

//CALCULATES APPRECIATION OF PROPERTY
	var AnApp = AnApp / 1200	
	var IR = Math.pow(1 + AnApp,(12*form.TERM.value));
	var APP = (-pi + (IR * pi) + (IR * loanB)) / 1 + AnApp;
	var Apprec = parseInt(APP - loanB);
	form.Apprec.value = formatCurrency(Apprec);

//CALCULATES TOTAL PROPERTY TAXES PAID
	TotalPTax = parseInt(((Apprec / 2) + parseInt(loanB))/100 * TERM);
	form.TotalPTax.value = formatCurrency(TotalPTax);

//CALCULATES TOTAL INTEREST PAID
	var IRV = Math.pow(1+mi,(12*form.TERM.value));  
	var RemPrin = (pi + (IRV * -pi) + ((mi * IRV) * loanA)) / mi;  //CALCULATES REMAINING PRINCIPLE	
	var TotalInt = parseInt(TotalOwn - (loanA-RemPrin));
	form.TotalInt.value = formatCurrency(TotalInt);

//CALCULATES TOTAL TAX SAVINGS
	var TotalTaxS = parseInt((parseInt(TotalInt) + parseInt(TotalPTax)) * .28);
	form.TotalTaxS.value = formatCurrency(TotalTaxS);

// CALCULATES INVESTMENT SAVINGS	
	var down = loanB * (DOWN/100);	
	var invest = Math.pow(1.00833,(12*form.TERM.value));
	var Saving = parseInt((invest*down) / 1.00833);
	form.Saving.value = formatCurrency(Saving);

//CALCULATES TOTAL COSTS
	var OwnTotal = parseInt(TotalOwn) - parseInt(TotalTaxS)
	 - (parseInt(APP) - parseInt(RemPrin) - parseInt(down)) + parseInt(APP * .05);
		if (OwnTotal <= 0) {
			OwnTotal = "0"
			form.OwnTotal.value = "0"
			alert ("Congratulations! If your home is appreciating at that rate-you're making money! ")
			}
	form.OwnTotal.value = formatCurrency(OwnTotal);
	var RentTotal = TotalRent - Saving;
		if (RentTotal <= 0) {			
			RentTotal = "0"
			form.RentTotal.value = "0"
			alert ("If you've got that much for a down payment-you'll probably make more on your investments");
			}
	form.RentTotal.value = formatCurrency(RentTotal);
	
}


function basicedit()
{
	if 	(!IsMoney(document.temps.RENT.value) || document.temps.RENT.value.length ==0)
		document.temps.RENT.value='$975';

	if 	(!IsMoney(document.temps.PPRICE.value) || document.temps.PPRICE.value.length ==0)
		document.temps.PPRICE.value='$175,000';

	if 	(!IsPct(document.temps.YR.value) || document.temps.YR.value.length ==0)
		document.temps.YR.value='30';
		
	if 	(!IsPct(document.temps.INT.value) || document.temps.INT.value.length ==0)
		document.temps.INT.value='7.5%';		
		
	if 	(!IsNumber(document.temps.TERM.value) || document.temps.TERM.value.length==0)
		document.temps.TERM.value='7';	
		
	if 	(!IsPct(document.temps.DOWN.value) || document.temps.DOWN.value.length==0)
		document.temps.DOWN.value='10%';			
		
	if 	(!IsPct(document.temps.PropTax.value) || document.temps.PropTax.value.length==0)
		document.temps.PropTax.value='1%';	
		
	if 	(!IsPct(document.temps.AnApp.value) || document.temps.AnApp.value.length==0)
		document.temps.AnApp.value='2%';				
}	
	
function init()
{
		var space="";
		var dollarsign="$";
		document.temps.TotalOwn.value = space;				
		document.temps.AvgOwn.value = space;	
		document.temps.AvgRent.value = space;			
		document.temps.TotalRent.value = space;	
		document.temps.Apprec.value = space;		
		document.temps.TotalPTax.value = space;	
		document.temps.TotalInt.value = space;		
		document.temps.TotalTaxS.value = space;	
		document.temps.Saving.value = space;
		document.temps.OwnTotal.value = dollarsign;	
		document.temps.RentTotal.value = dollarsign;
		return false;
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


