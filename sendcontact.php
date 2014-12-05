<?php
/* PRECONDITION:  the fields [name,  email]
 * from the corresponding contact.html form are passed into this script.
 * POSTCONDITION:  the fields are submitted via the SMTP server to the recipient.
 */
$recipient = "signup@gilbertgottfried.com";
$client = "From: " . $HTTP_POST_VARS['email'];

// Concatenate all the fields from the corresponding contact.html form.
$message = "email: " . $HTTP_POST_VARS['email'];

// PHP mail function using the SMTP server 
// first parameter is the recipient, second parameter is the subject, followed by the body message, followed by who the mail is FROM (sender/client email).
mail("$recipient", "Gilbert Gottfried Fan Club Sign Up", "$message", "$client") or die("Error sending e-mail :(  Please try again."); 

echo "<div align=\"left\">
  <p><strong><font color=\"#666666\" size=\"2\" face=\"Geneva, Arial, Helvetica, sans-serif\">Thank you for Signing Up. You will recieve a reply soon. 
    <br /></font></strong> </p>

</div>";
?>
