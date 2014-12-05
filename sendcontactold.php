<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Triumph Funding Corp</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<style type="text/css">
<!--
.submenu {margin-bottom: 0.5em;
}
-->
</style>
<link href="/style.css" rel="stylesheet" type="text/css" />
</head>
<body BGCOLOR=#FFFFFF LEFTMARGIN=0 TOPMARGIN=0 MARGINWIDTH=0 MARGINHEIGHT=0 rightmargin="0" bottommargin="0">
<table width="725" height="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="3"><img src="images/txt-13.gif" width="725" height="30" alt="" /></td>
  </tr>
  <tr>
    <td width="2" height="100%" bgcolor="#7483C4"><img src="images/spacer.gif" width="2" height="1" /></td>
    <td valign="top" background="images/back-1.jpg" bgcolor="#FFFFFF" style="background-repeat:repeat-x;background-position:bottom"><table width="721px" height="100%"  border="0" cellpadding="5" cellspacing="0">
        <tr>
          <td><?php
/* PRECONDITION:  the fields [name,  email]
 * from the corresponding contact.html form are passed into this script.
 * POSTCONDITION:  the fields are submitted via the SMTP server to the recipient.
 */
$recipient = $HTTP_POST_VARS['recipient'];
$client = "From: " . $HTTP_POST_VARS['name'] . "<" . $HTTP_POST_VARS['email'] . ">";

// Concatenate all the fields from the corresponding contact.html form.
$message = "Name: " . $HTTP_POST_VARS['name'] . "\nE-mail: " . $HTTP_POST_VARS['comment'];

// PHP mail function using the SMTP server 
// first parameter is the recipient, second parameter is the subject, followed by the body message, followed by who the mail is FROM (sender/client email).
mail("$recipient", "Triumph Funding Corp Contact Submission: " . $HTTP_POST_VARS['name'], "$message", "$client") or die("Error sending e-mail :(  Please try again."); 

echo "<div align=\"left\">
  <p><strong><font color=\"#666666\" size=\"2\" face=\"Geneva, Arial, Helvetica, sans-serif\">Thank you for contacting us. You will recieve a reply soon. 
    <br /></font></strong> </p>
  <p><strong><a href=\"contact.php\" target=\"content\"><font size=\"2\" face=\"Tahoma, Arial, Helvetica, sans-serif\" color=\"black\">Go back 
    to main page</font></a></strong></p>
</div>";
?>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p></td>
        </tr>
    </table></td>
    <td width="2" height="100%" rowspan="1" bgcolor="#7483C4"><img src="images/spacer.gif" width="2" height="1" /></td>
  </tr>
  <tr bgcolor="#B0C7E5">
    <td height="3" colspan="5"><img src="images/spacer.gif" width="8" height="2" /></td>
  </tr>
  <tr>
    <td colspan="3" height="32" bgcolor="#FFFFE6" align="center"><div style=" padding-top:10px;padding-left:20px"><a href="#" style="color:#006599;text-decoration:none">Copyright 2005-2006 &copy; Triumph Funding Corp. All rights reserved.</a></div></td>
  </tr>
  <tr bgcolor="#B0C7E5">
    <td colspan="3" height="3"><img src="images/spacer.gif" width="1" height="1" /></td>
  </tr>
  <tr>
    <td colspan="3" height="56" background="images/end-11.jpg" style="background-repeat:repeat;background-position:bottom"><img src="images/spacer.gif" width="1" height="1" /></td>
  </tr>
</table>
</body>
</html>
