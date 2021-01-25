
  function userData() 
  {
  	 var emailid = $("#emailID").val();
	  var password = $("#password").val();

  if (emailid == "" ||emailid == null || emailid == undefined)
    {
		$.Toast('Please enter the email address', {'duration': 3000, 'class': 'alert', 'position':'top','align':'center'});
		  $("#emailID").focus();
	}
	else if (password == "" || password == null || password == undefined)
	{
		$.Toast('Please enter the password', {'duration': 3000, 'class': 'alert', 'position':'top','align':'center'});
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
					$.Toast('email id is incorrect', {'duration': 3000, 'class': 'alert', 'position':'top','align':'center'});
					$("#emailID").val("");
					$("#password").val("");
				}else if(response == "passwordfalse"){
					$.Toast('Password is incorrect', {'duration': 1000, 'class': 'alert', 'position':'top','align':'center'});
					$("#emailID").val("");
					$("#password").val("");
				}
				else{
					//$.Toast(response, {'duration': 1000, 'class': 'success', 'position':'top','align':'center'});
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




	
 