


  function insertdata(){
	  var name = $("#registrationName").val();
	  var dob = $("#registrationDob").val();
	  var email = $("#registrationEmail").val();
	  var mobile = $("#registrationMobile").val();
	   var enterpass = $("#registrationPassword").val();
		var cnfrmpass = $("#cpassword").val();
		var age = $("#registrationAge").html();
		var sex =  $("input[name='sex']:checked").val();
		var maritalStatus = $("input[name='status']:checked").val();
		
		 
    if (name == "" || name == null || name == undefined){
		 alert( "Please enter the name.");
		  $("#name").focus();
	}
	else if (dob == "" || dob == null || dob == undefined){
		 alert( "Please enter the date of birth.");
		  $("#dob").focus();
	}
		else if (email == "" || email == null || email == undefined){
		 alert( "Please enter the email address.");
		  $("#email").focus();
	}
	
	

	else if (mobile == "" || mobile == null || mobile == undefined){
		 alert( "Please enter the mobile number.");
		  $("#mobile").focus();
	}
	else if (enterpass == "" || enterpass == null || enterpass == undefined){
		 alert( "Please enter the password.");
		  $("#password").focus();
	}
	else if (cnfrmpass == "" || cnfrmpass == null || cnfrmpass == undefined){
		 alert( "Please enter the password again.");
		  $("#cpassword").focus();
	}
	else if (!$("#op1").prop("checked")& !$("#op2").prop("checked") & !$("#op3").prop("checked") ){
	      
	  alert( "please select atleast one checkbox");
    }
    else if (enterpass != cnfrmpass ){
	      
	  alert( "password does not match");
    }
	
	else
	{
		var checkboxvalues = [];
		$(".form-check-input").each(function(){
			if ($(this).is(":checked")) {
				checkboxvalues.push($(this).val());
			}
		});

		checkboxvalues = checkboxvalues.toString();
		


		var myObj = {name:name, dob:dob , checkboxvalues:checkboxvalues ,email:email,mobile:mobile,age:age,enterpass:enterpass,sex:sex,maritalStatus:maritalStatus};
		var userData = JSON.stringify(myObj);
		 $.ajax({
			url: 'BusinessLayer/registrationBL.php?function=insertFunc',
			type: 'post',
			 data:{userData:userData},
			 
			//  cache: false,
			//  processData: false,
			//  contentType: false,
			 
			success: function (response) {
				console.log(response);
				//RefreshTable(response);
				// if (response == "fail"){
				
				// alert ("This email id already exists.");
				//  }else {
				// alert ("You have signed up successfully.");
				//  window.location.replace("Login.php");
				// }
			},
			error: function (request, error) {
				console.log(arguments);
				 //alert(" Can't do because: " + error);
			}
			
			  });
			}
			//window.location.replace("Login.php");
		}
		$(document).ready(function(){

		var date_input=$('input[id="registrationDob"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'yyyy-mm-dd',
			container: container,
			todayHighlight: true,
			autoclose: true,
			endDate: new Date(new Date().setDate(new Date().getDate() - 6570)),
			startDate: new Date(new Date().setDate(new Date().getDate() - 21900)),
		})

// 		$('#dob').change(function () {
//     console.log($('#dob').val());
// });


	});
  
    
	
	function AgeCalculator()
	{
	var userDate = $("#registrationDob").val();
	
     var d = new Date();
	 
	var dateToString = userDate.toString();
	var split = dateToString.split("-");
	var yearInt = parseInt(split[0]);
	var currentYear = d.getFullYear();
	var currentYearInt = parseInt(currentYear.toString());
	var age =  currentYearInt - yearInt ;
	 document.getElementById("registrationAge").innerHTML = age ;
	
	}
	function AgeCalculator1()
	{
		let currentDate = new Date();
		document.getElementById("registrationAge").innerHTML = (parseInt(currentDate.getFullYear().toString())) - (parseInt($("#dob").val().toString().split("/")[0]));
		
	}
	
	
	 // $("#dob").datepicker({
      // format: 'yyyy/mm/dd',
      // autoclose:true,
     
      // minDate: "-3d"
	  // });
	   
	
	function ValidateEmail()
{
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if($("#registrationEmail").val().match(mailformat))
{

	$("#message").text ("valid").css("color", "green");
//alert("You have entered a valid email address!");    //The pop up alert for a valid email address
//document.form1.text1.focus();
//return true;
}
else
{
	$("#message").text ("Invalid").css("color", "red");
//alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
//document.form1.text1.focus();
//return false;
}
}

function clearAll()

{

   $("#registrationName").val("");
   $("#registrationDob").val("");
  $("#registrationEmail").val("");
 $("#registrationMobile").val("");
$("#registrationPassword").val("");
 $("#cpassword").val("");
$('input[type=checkbox]').prop('checked', false);
$("#male").prop('checked', true);
$("#single").prop('checked', true);

		
		


}
	
	 

		
		

		