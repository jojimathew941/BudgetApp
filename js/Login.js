
  function userData() 
  {
  	 var emailid = $("#emailID").val();
	  var password = $("#password").val();

  if (emailid == "" ||emailid == null || emailid == undefined)
    {
		 alert( "Please enter your email address.");
		  $("#emailID").focus();
	}
	else if (password == "" || password == null || password == undefined)
	{
		 alert( "Please enter your password.");
		  $("#password").focus();
	}
  else 
    {
		var myObj = {emailid:emailid, password:password};
		var userData = JSON.stringify(myObj);
		 $.ajax({
			url: 'BusinessLayer/loginBL.php?function=function',
			type: 'post',
			 data:{userData:userData},
			 
			//  cache: false,
			//  processData: false,
			//  contentType: false,
			 
			success: function (response) {
				if(response == "emailfalse"){
					alert("Email id  is incorrect");
					$("#emailID").val("");
					$("#password").val("");
				}else if(response == "passwordfalse"){
					alert("Password  is incorrect");
					$("#emailID").val("");
					$("#password").val("");
				}
				else{
				 alert (response);
				 window.location.replace("budget.php");
				}
			},
			error: function (request, error) {
				console.log(arguments);
				 //alert(" Can't do because: " + error);
			}
			
			  });
			  
	}
	}




	
 