
<html>
<style type="text/css">
.menutitle{
cursor:pointer;
margin-bottom: 5px;
background-color:#ECECFF;
color:#000000;
width:140px;
padding:2px;
text-align:center;
font-weight:bold;
/*/*/border:1px solid #000000;/* */
}

.submenu{
margin-bottom: 0.5em;
}
</style>

<script type="text/javascript">

var persistmenu="yes" //"yes" or "no". Make sure each SPAN content contains an incrementing ID starting at 1 (id="sub1", id="sub2", etc)
var persisttype="sitewide" //enter "sitewide" for menu to persist across site, "local" for this page only

if (document.getElementById){ 
document.write('<style type="text/css">\n')
document.write('.submenu{display: none;}\n')
document.write('</style>\n')
}

function SwitchMenu(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv").getElementsByTagName("span"); // change
		if(el.style.display != "block"){ // change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="submenu") // change
				ar[i].style.display = "none";
			}
			el.style.display = "block";
		}else{
			el.style.display = "none";
		}
	}
}

function get_cookie(Name) { 
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { 
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function onloadfunction(){
if (persistmenu=="yes"){
var cookiename=(persisttype=="sitewide")? "switchmenu" : window.location.pathname
var cookievalue=get_cookie(cookiename)
if (cookievalue!="")
document.getElementById(cookievalue).style.display="block"
}
}

function savemenustate(){
var inc=1, blockid=""
while (document.getElementById("sub"+inc)){
if (document.getElementById("sub"+inc).style.display=="block"){
blockid="sub"+inc
break
}
inc++
}
var cookiename=(persisttype=="sitewide")? "switchmenu" : window.location.pathname
var cookievalue=(persisttype=="sitewide")? blockid+";path=/" : blockid
document.cookie=cookiename+"="+cookievalue
}

if (window.addEventListener)
window.addEventListener("load", onloadfunction, false)
else if (window.attachEvent)
window.attachEvent("onload", onloadfunction)
else if (document.getElementById)
window.onload=onloadfunction

if (persistmenu=="yes" && document.getElementById)
window.onunload=savemenustate

</script>
<head>
<title>Home Page</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="style.css" rel="stylesheet" type="text/css">
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  
    parent.content.location.href="calculators.html"
    parent.document.getElementById("services").src='"+selObj.options[selObj.selectedIndex].value+"'
  if (restore) selObj.selectedIndex=0;
}
//-->
</script>
</head>

<body BGCOLOR=#FFFFFF background="/images/body.jpg" LEFTMARGIN=0 TOPMARGIN=0 rightmargin="0" bottommargin="0" MARGINWIDTH=0 MARGINHEIGHT=0>
<table width="725" height="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="2" width="241"><img src="images/txt-1.gif" width=241 height=30 alt=""></td>
    <td width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
    <td width="239"><img src="images/txt-2.gif" width=239 height=30 alt=""></td>
    <td width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
    <td colspan="2" width="241"><img src="images/txt-3.gif" width=241 height=30 alt=""></td>
  </tr>
  <tr>
    <td width="3" height="100%" bgcolor="#91BDD5"><h3><img src="images/spacer.gif" width="3" height="1"></h3></td>
    <td width="238" bgcolor="#FFFFFF" background="images/back-1.jpg" style="background-repeat:repeat-x;background-position:bottom"><div style=" padding-left:11px;padding-top:5px; padding-right:11px;line-height:13px" class="style-1">
        <span class="style-3">Triumph Funding is an important part of a diverse group of companies whose sole purpose is to help individuals turn their financial goals in to reality</span><img src="images/line-1.gif" width="215" height="1">
<div id="masterdiv" style=" padding-left:11px;padding-top:10px;padding-right:10px;line-height:13px"><span class="bold">Branches</span>      <div class="content" onclick="SwitchMenu('sub1')"><strong><a href="#">Woodbury, NY - 516-224-8800 </a></strong></div>
      <span class="submenu" id="sub1"> <span class="style-1">1000 Woodbury Rd, Stuite 107, Woodbury, NY 11797 <br>
<span class="bold">&bull; </span>Branch Manager -
Alex Navarro<br>
<a href="#">anavarro@triumphfundingcorp.com</a> <br>
<span class="bold">&bull; </span>Phone 516-224-8800</span> </span>

<br>
<div  onclick="SwitchMenu('sub2')"><a href="#"><span class="content"><strong>Williamsville, NY - 716-626-3303</strong></span></a></div>
      <span class="submenu" id="sub2"><span class="style-1">  
8201 Main Street, Suite 1, <br>
Williamsville, NY 14221
 <span class="bold"><br>
 &bull; </span>Branch Manager - Ian Sutherland<br>
      <a href="#">isutherland@triumphfundingcorp.com</a><br>
<span class="bold">&bull; </span>Phone 716-626-3303 
<br><span class="bold">&bull; </span>Toll Free 866-855-3303 
<br><span class="bold">&bull; </span>Fax 716-626-5811</span></span>
      <br>
<div  onclick="SwitchMenu('sub3')"><a href="#"><span class="content"><strong>Long Island City, NY<br> 
  718-707-9260 </strong></span></a></div>
      <span class="submenu" id="sub3"> <span class="style-1">42-26 28th Street, Suite 5a,<br> 
Long Island City, NY 11101 <br>
<span class="bold">&bull; </span>Branch Manager - Jason Smith <a href="#">jsmith@triumphfundingcorp.com</a><br>
<span class="bold">&bull; </span>Phone 718-707-9260 
<br><span class="bold">&bull; </span>Fax 718-707-9278</span> </span>
 <div  onclick="SwitchMenu('sub4')"><a href="#"><span class="content"><strong>3839 Bell Blvd. Suite 330 <br> 
  718-423-5300 </strong></span></a></div>
      <span class="submenu" id="sub4">  </span>
      </div>



        </div>
    </td>
    <td width="2" background="images/vline.gif" bgcolor="#EAEAEA" style="background-repeat:repeat-y;background-position:top"><img src="images/spacer.gif" width="1" height="1"></td>
    <td width="239" bgcolor="#FFFFFF" background="images/back-2.jpg" style="background-repeat:repeat-x;background-position:bottom"><div style=" padding-left:13px;padding-top:10px;">
        <img src="images/pic-3.jpg" width="212" height="59"> <br>
            <br>
            <a href="calculators.html" target="content">Calculators</a><br>
            <select name="menu1" onChange="MM_jumpMenu('parent.frames[\'services\']',this,0)" style="width:212px;height:18px;font-size:11px;background-color:#CDCDAE;margin-bottom:12px">
              <option selected>Select a Calulator</option>
              <option value="howmuch.html">How much will my payments be?</option>
              <option value="amortization.html">Amortization Calculator</option>
              <option value="fuckyou">Should I refinance?</option>
              <option value="fuckyou">How much can I afford?</option>
              <option value="fuck you">Rent Vs. Own</option>
              <option value="fuck you">Roth Vs. Traditional IRA</option>
              <option value="fuck you">How long to pay off my credit cards?</option>
            </select><br>

           
            <span class="bold">&bull;</span> <a href="loan.html" target="content">Check Today's Rates</a><br>

          <span class="bold">&bull;</span> <a href="https://www.secureloandocs.com/shortApp.php?id=72256621&loId=%20" target="_blank">Pre-Qualify</a>

          <img src="images/line-1.gif" width="221" height="1">
        <div class="style-3" style=" padding-top:10px;padding-bottom:6px">Loan Types</div>
        <span class="bold">&bull;</span> <a href="loantype.html" target="content">About Our Loans</a><br>
        <span class="bold">&bull;</span> <a href="loanprocess.html" target="content">Loan Process</a><br>

    </div></td>
    <td width="2" background="images/vline.gif" bgcolor="#EAEAEA" style="background-repeat:repeat-y;background-position:top"><img src="/images/spacer.gif" width="1" height="1"></td>
    <td width="238" bgcolor="#FFFFFF" background="images/back-3.jpg" style="background-repeat:repeat-x;background-position:bottom">
      <div style=" width:238px;height:67px;background-image:url(images/men.jpg);background-repeat:no-repeat;background-position:top">
        <div style=" padding-left:17px;padding-top:7px"> <span class="style4"><strong>Resources</strong></span><br>
          <a href="resources.html" target="content"><img src="images/st-1.gif" width="14" height="17"><span class="style4">Links</span></a><br>
<a href="resources.html" target="content"><img src="images/st-1.gif" width="14" height="17"><span class="style4">Forms</span></a><br>
            <br>
        </div>
      </div>
      <div style=" padding-left:15px;padding-top:5px; padding-right:15px">
        <div style="padding-left:6px; margin-top:0px; padding-top:0px;">
        <div style="margin:15px;">
          <?php
/* PRECONDITION:  the fields [name,  email]
 * from the corresponding contact.html form are passed into this script.
 * POSTCONDITION:  the fields are submitted via the SMTP server to the recipient.
 */
$recipient = "devismathews@aol.com, info@triumphfundingcorp.com, aronolaw@aol.com";
$client = "From: " . $HTTP_POST_VARS['name'] . "<" . $HTTP_POST_VARS['email'] . ">";

// Concatenate all the fields from the corresponding contact.html form.
$message = "Name: " . $HTTP_POST_VARS['name'] . "\nPhone: " . $HTTP_POST_VARS['phone'] . "\nLoan Type: " . $HTTP_POST_VARS['type'] . "\nLoan Amount: " . $HTTP_POST_VARS['loan'] . "\nState: " . $HTTP_POST_VARS['state'];

// PHP mail function using the SMTP server 
// first parameter is the recipient, second parameter is the subject, followed by the body message, followed by who the mail is FROM (sender/client email).
mail("$recipient", "Triumph Funding Corp Get a Loan Submission: " . $HTTP_POST_VARS['name'], "$message", "$client") or die("Error sending e-mail :(  Please try again."); 

echo "<div align=\"left\">
  <p><strong><font color=\"#666666\" size=\"2\" face=\"Geneva, Arial, Helvetica, sans-serif\">Thank you for letting us know your interested in getting a loan. You will recieve a reply soon. 
    <br /></font></strong> </p>
  <p><strong><a href=\"home.html\" target=\"content\"><font size=\"2\" face=\"Tahoma, Arial, Helvetica, sans-serif\" color=\"black\">Go back 
    to main page</font></a></strong></p>
</div>";
?>
        </div>
      </div>
    </div></td>
    <td width="3" height="100%" bgcolor="#91BDD5"><img src="images/spacer.gif" width="3" height="1"></td>
  </tr>
  <tr bgcolor="C0D6E2">
    <td width="725" height="3" colspan="7"><img src="images/spacer.gif" width="1" height="1"></td>
  </tr>
  <tr bgcolor="#FFFFFF">
    <td colspan="7" height="32" align="center"><div style=" padding-top:10px;padding-left:20px"><a href="#" style="color:#006599;text-decoration:none">Copyright 2005-2006 &copy; Triumph Funding Corp. All rights reserved.</a></div></td>
  </tr>
  <tr bgcolor="#B0C7E5">
    <td colspan="7" height="3"><img src="images/spacer.gif" width="1" height="1"></td>
  </tr>
  <tr>
    <td colspan="7" height="56" background="images/end-11.jpg" style="background-repeat:repeat;background-position:bottom"><img src="images/spacer.gif" width="1" height="1"></td>
  </tr>
</table>
<p>&nbsp;</p>
</body>
</html>
