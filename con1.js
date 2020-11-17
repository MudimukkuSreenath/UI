function fun1()
{
	//fullname check
	if(document.f1.n1.value=="")
	{
		alert('Please enter Name');
		return false;
	}
	//userid check
	if(document.f1.n2.value=="")
	{
		alert('pleace Phone Number');
		return false;
	}
	//password check
	if(document.f1.n3.value=="")
	{
		alert('Please Email address');
		return false;
	}
	//confirm password check
	if(document.f1.n4.value=="")
	{
		alert('Please enter comments');
		return false;
	}
	//password & re password check
	
	else
	{
		alert('OK');
		return true;
	}
}