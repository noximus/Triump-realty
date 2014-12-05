// VALIDATION FUNCTIONS FOR THE JOB SUBMISSION FORM: jobsubmit.php
function validateinfo() 
{
	if (document.contact.fName.value == "")
	{
		alert("Please enter your First Name.\n");
		document.contact.fName.focus();
		return false;
	}
	
	if (!nameIsGood(document.contact.fName))
	{
		alert("Please enter a valid First Name.  It should not have numbers or extended characters.\n");
		document.contact.fName.focus();
		return false;
	}
	
	if (document.contact.lName.value == "")
	{
		alert("Please enter your Last Name.\n");
		document.contact.fName.focus();
		return false;
	}

	if (!nameIsGood(document.contact.lName))
	{
		alert("Please enter a valid Last Name.  It should not have numbers or extended characters.\n");
		document.contact.lName.focus();
		return false;
	}

				
	if(!numberCheck(document.contact.phone))
		return false;

	if(!emailCheck(document.contact.eMail))
		return false;


	
	if (document.contact.comments.value == "")
		document.contact.comments.value = "NA";
}

function isNumber(txtField)
{
	var num_pattern = /^\d+$/;
	if (txtField) 
	{
		var num_pattern_result;
		num_pattern_result = txtField.search(num_pattern);
		if(num_pattern_result < 0)
			return false;
		else
			return true;
	}
	else
		return false;
}

function numberCheck(num)
{
	if (num.value) 
	{
		var phone_pattern = /(\(?\d{3}\)?)?(-| )?\d{3}(-| )?\d{4}/;
		var pattern_result;
		pattern_result = num.value.search(phone_pattern);
		if(pattern_result < 0)
		{
			if(num.name == "primaryPhone")
			{
				alert("The Primary Phone number that you've entered does not seem to be valid, please enter a valid one, including the area code, such as 212-123-4567.\n");
				num.focus();
				return false;
			}
			else if(num.name == "secondaryPhone")
			{
				alert("The Secondary Phone number that you've entered does not seem to be valid, please enter a valid one, including the area code, such as 212-123-4567.\n");
				num.focus();
				return false;
			}
			else
			{
				alert("The Fax number that you've entered does not seem to be valid, please enter a valid one, including the area code, such as 212-123-4567.\n");
				num.focus();
				return false;			
			}
		}
		else
			return true;
	}
	else
	{ // we ask for at least the primary phone
			if(num.name == "primaryPhone")
			{
				alert("Please enter your Primary Phone number, including the area code, such as 212-123-4567.\n");
				num.focus();
				return false;
			}
			else
				return true;
	}
}

function emailCheck(mailaddress)
{
	if(mailaddress.value)
	{
		var email_pattern = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/;
		var email_pattern_result;
		email_pattern_result = mailaddress.value.search(email_pattern);
		if(email_pattern_result < 0)
		{
			alert("Your Email Address does not appear to be valid.  Please re-enter in the correct format: such as someone@something.com\n");
			mailaddress.focus();
			return false;
		}
		else 
			return true;
	}
	else
	{
		alert("Please enter your Email Address.\n");
		mailaddress.focus();
		return false;
	}
}	

function nameIsGood(textfield)
{
	if(textfield.value != "")
	{
		var name_pattern = /^[A-Za-z ]+$/;
		var name_pattern_result;
		name_pattern_result = textfield.value.search(name_pattern);
	
		if(name_pattern_result < 0)
			return false;
		else 
			return true;
	}
	else
		return false;
}