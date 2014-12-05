function computeForm(form){
        basicedit();

        pass=1;
        ir = replacePct(document.form.ir.value);
        str=replaceChars(document.form.p.value);
        str = replaceChar(str);
        p = replaceChars(document.form.p.value);
        p = replaceChar(p);
        if (str > 10000000){
                alert ("loan amount must be less than 10000000   ");
                pass = 0;
        }
        if (str < 1000){
                alert ("loan amount must be greater than 1000   ");
                pass = 0;
                }
        str=replacePct(document.form.ir.value);
        if (str > 20){
                alert ("interest rate must not be greater than 20 percent  ");
                document.form.ir.value = 20;
                pass = 0;
        }
        if (str < 1 ){
                alert ("interest rate must be greater than 1 percent   ");
                document.form.ir.value = 1;
                pass = 0;
        }
        str=document.form.y.value;
        if (str > 360){
                alert ("number of payments cannot exceed 360")
                pass = 0;
        }
        if (str < 70){
                alert ("number of payments must exceed 70")
                pass = 0;
}

        document.form.y.value=parseInt(str);

        if (checkForm(p) && checkForm(ir)
                && checkForm(document.form.y.value) && (pass==1)) {
        amortize(document.form); }
}
    function amortize(form) {
         var top="<div align='center'>";
             top=top+"<table border='0' cellpadding='1' width='340'><tr>";
         with (Math) {
         var yr=parseFloat(form.ir.value);
         var tm=parseInt(form.y.value);
                 var amt=parseFloat(p);
         var amt1=amt;
                 var amtd = formatCurrency(amt);
         var mr=yr/1200;
         var r=yr/12;
         var mr1=pow((parseFloat(1)+parseFloat(mr)),tm);

                 var tempAmortStr = "<html><head><title>Amortization Schedule Results</title><link rel='stylesheet' href='/includes/css/global.css' type='text/css' /></head>";
                 tempAmortStr += "\n<body style='font-family: Tahoma,arial;font-size:12px;margin-left:2px;margin-right:2px;'>";


               tempAmortStr += "\n<div id='containerInstructions'>";
               tempAmortStr += "Triumph Funding Corp 1 866 389 8700<br><span id='span_1'>Results:</span>";
               tempAmortStr += "<span id='span_2' align='right'><a id='a_printPage' href='javascript:window.print();'>print this page</a></span>";
               tempAmortStr += "</div><div style='clear:both'></div>";
               tempAmortStr += "\n<div align='center'>";
         		tempAmortStr += "\n<table width='335' border='1' bordercolor='#114c8e' cellpadding='5' cellspacing='0' style='font-family: Tahoma,arial;font-size:12px;'>";
				   tempAmortStr += "\n<tr><td bgcolor='#114c8e' align='center'><b><font color='white'>Payment Number</font></b></td>";
               tempAmortStr += "<td bgcolor='#114c8e' align='center'><b><font color='white'>Payment Amount</font></b></td><td bgcolor='#114c8e' align='center'><b><font color='white'>Interest Amount</font></b></td>";
               tempAmortStr += "<td bgcolor='#114c8e' align='center'><b><font color='white'>Principle Reduction</font></b></td><td bgcolor='#114c8e'><b><font color='white'>Balance Due</font></b></td></tr>";
               for (var j=1; j<=tm; j++)
               {
                                 m2=""+j;
                                 int1=amt1*(r/100);
                 p=(mr1*amt*mr)/(mr1-1);
                 q=(amt1+int1)-p;
                                 amt1=p-int1;
                        if(q<1) { q="0.00";}

                                 p2=""+p;
                                 pos=p2.indexOf(".");
                                        if(pos != "-1") {p2=p2.substring(0,pos+3);
                                 } else
                                         { p2 = p2 + ".00";}

                                 int2=""+int1;pos=int2.indexOf(".");
                                        if(pos != "-1") {int2=int2.substring(0,pos+3);
                                 }else
                                        { int2=int2+".00";}

                 amt2=""+amt1;pos=amt2.indexOf(".");
                                        if(pos != "-1"){amt2=amt2.substring(0,pos+3);
                                 }else
                                        { amt2=amt2+".00";}
                 q2=""+q;pos=q2.indexOf(".");

                                        if(pos != "-1") {q2=q2.substring(0,pos+3);
                                 } else
                                         {q2=q2+".00";}
                                        p2 = formatCurrency(p2);
                                        int2 = formatCurrency(int2);
                                        amt2 = formatCurrency(amt2);
                                        q2 = formatCurrency(q2);
                 tempAmortStr += "\n<tr><td bgcolor='#ffffff'>"+m2+"</td>";
                 tempAmortStr += "<td bgcolor='#ffffff' align='center'>"+p2+"</td>";
                 tempAmortStr += "<td bgcolor='#ffffff' align='center'>"+int2+"</td>";
                 tempAmortStr += "<td bgcolor='#ffffff' align='center'>"+amt2+"</td>";
                 tempAmortStr += "<td bgcolor='#ffffff' align='center'>"+q2+"</td></tr>\n";
                                 amt1=q;
               }

				 tempAmortStr += "\n<tr><td colspan='5'>"+tm+" months to pay off " + amtd +" at " + yr + "%<br />Some rounding of values may have occured.</td></tr>";
         		 tempAmortStr +="</table><br /></div></body></html>";
                 newWindow=window.open("","","height=500,width=380,scrollbars")
                 newWindow.document.write(tempAmortStr);
                 newWindow.document.close();
                  return false;
                        }
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
                        cents = Math.floor((num*100+0.5)%100);
                        num = Math.floor(num).toString();
                        if(cents < 10) cents = "0" + cents;
                        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
                        num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
                        return ('$' + num + '.' + cents);

}
}


function basicedit()
{
        if      (!IsMoney(document.form.p.value) || document.form.p.value.length ==0)
                document.form.p.value='$125,000';

        if      (!IsNumber(document.form.y.value) || document.form.y.value.length ==0)
                document.form.y.value='360';

        if      (!IsPct(document.form.ir.value) || document.form.ir.value.length ==0)
                document.form.ir.value='7.5%';
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
    if ((toCheck.substring(j,j+1) < "0") && (toCheck.substring(j,j+1) !=".") || (toCheck.substring(j,j+1) > "9"))
      isNum = false;{
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

