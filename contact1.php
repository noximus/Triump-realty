
<html>
<head>
<title>Home Page</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="style.css" rel="stylesheet" type="text/css">
</head>

<body BGCOLOR=#FFFFFF LEFTMARGIN=0 TOPMARGIN=0 MARGINWIDTH=0 MARGINHEIGHT=0 rightmargin="0" bottommargin="0">
<table width="725" height="100%"  border="0" cellspacing="0" cellpadding="0">
  <TR>
    <TD colspan="2" width="180"><IMG SRC="images/txt-15.gif" WIDTH=180 HEIGHT=30 ALT=""></TD>
    <TD width="2"><IMG SRC="images/spacer.gif" WIDTH=2 HEIGHT=30 ALT=""></TD>
    <TD width="300"><IMG SRC="images/txt-16.gif" WIDTH=300 HEIGHT=30 ALT=""></TD>
    <TD width="2"><IMG SRC="images/spacer.gif" WIDTH=2 HEIGHT=30 ALT=""></TD>
    <TD colspan="2" width="241"><IMG SRC="images/txt-17.gif" WIDTH=241 HEIGHT=30 ALT=""></TD>
  </TR>
  <tr>
    <td width="3" height="100%" bgcolor="#91BFD6"><img src="images/spacer.gif" width="3" height="1"></td>
    <td width="238" bgcolor="#FFFFFF" background="images/back-1.jpg" style="background-repeat:repeat-x;background-position:bottom">
      <div style=" line-height:14px;padding-top:10px;padding-left:10px;" class="style-1"><span class="bold">Triumph Funding Corp.</span><br>
          <br>
  1000 Woodbury Rd Suite 107<br>
  Woodbury, NY 11797<br>
  Freephone: <br>
  1 866 389 8700<br>
  Telephone: <br>
  1 516 224 8800<br>
  FAX: <br>
  1 800 456 3698 </div>    </td>
    <td width="2" background="images/vline.gif" bgcolor="#EAEAEA" style="background-repeat:repeat-y;background-position:top"><img src="images/spacer.gif" width="2" height="1"></td>
    <td width="321" background="images/back-2.jpg" bgcolor="#FFFFFF" style="background-repeat:repeat-x;background-position:bottom">    <?php
/* PRECONDITION:  the fields [name,  email]
 * from the corresponding contact.html form are passed into this script.
 * POSTCONDITION:  the fields are submitted via the SMTP server to the recipient.
 */
$recipient = "henry@nycprint.com \r\n";
$recipient .= "Cc: henry@nycprint.com \r\n";
$recipient .= "Cc: henry@nycprint.com";
$client = "From: " . $HTTP_POST_VARS['name'] . "<" . $HTTP_POST_VARS['eMail'] . ">";

// Concatenate all the fields from the corresponding contact.html form.
$message = "Name: " . $HTTP_POST_VARS['name'] . "\nPhone Number: ". $HTTP_POST_VARS['phone'] ."\nFax Number: ". $HTTP_POST_VARS['fax'] ."\nE-mail: " . $HTTP_POST_VARS['eMail']."\nComments: ". $HTTP_POST_VARS['comments'];

// PHP mail function using the SMTP server 
// first parameter is the recipient, second parameter is the subject, followed by the body message, followed by who the mail is FROM (sender/client email).
mail("$recipient", "Triumph Funding Corp Contact Submission: " . $HTTP_POST_VARS['name'], "$message", "$client") or die("Error sending e-mail!  Please try again."); 

echo "<div align=\"center\">
  <p><strong>Thank you for contacting us. You will recieve a reply soon. 
    </strong> </p>
  <p><strong><a href=\"contact.php\" target=\"content\">Go back 
    </a></strong></p>
</div>";
?></td>
    <td width="2" background="images/vline.gif" bgcolor="#EAEAEA" style="background-repeat:repeat-y;background-position:top"><img src="images/spacer.gif" width="2" height="1"></td>
    <td width="156" bgcolor="#FFFFFF" background="images/back-3.jpg" style="background-repeat:repeat-x;background-position:bottom">
      <div style=" padding-left:10px;padding-top:10px;line-height:14px"> <strong class="bold">Support center:</strong><br>
          <a href="#">cupport@company.com</a><br>
          <br>
          <span class="bold">Sales questions:</span><br>
          <a href="#">sales@company.com</a><br>
          <br>
          <span class="bold">Web questions:</span><br>
          <a href="#">web@company.com</a><br>
          <br>
          <span class="bold">User guide:</span><br>
    <a href="#">user-g@company.com</a> </div></td>
    <td width="3" height="100%" bgcolor="#8FBCD9"><img src="images/spacer.gif" width="3" height="1"></td>
  </tr>
  <tr bgcolor="#B0C7E5">
    <td width="725" height="2" colspan="7"><img src="images/spacer.gif" width="8" height="3"></td>
  </tr>
  <tr bgcolor="#FFFFFF">
    <td colspan="7" width="725" height="32" align="center"><div style=" padding-top:10px;padding-left:20px"><a href="#" style="color:#006599;text-decoration:none">Copyright 2005-2006 &copy; Triumph Funding Corp. All rights reserved.</a></div></td>
  </tr>
  <tr bgcolor="#B0C7E5">
    <td colspan="7" width="725" height="3"><img src="images/spacer.gif" width="1" height="1"></td>
  </tr>
  <tr>
    <td colspan="7" width="725" height="56" background="images/end-11.jpg" style="background-repeat:repeat;background-position:bottom"><img src="images/spacer.gif" width="1" height="1"></td>
  </tr>
</table>
</body>
</html>
