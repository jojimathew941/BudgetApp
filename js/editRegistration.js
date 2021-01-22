$(document).ready(function(){
	
	
	$.ajax(
        {
        url: 'BusinessLayer/registrationBL.php?function=readfunc',
		type: 'get',
        dataType: 'JSON',
        success: function(response){
            readData(response);
			},		
		error: function (request, error) {
			console.log(arguments);
			alert(" Can't do because: " + error);
		}
		
		  });
			  

        
    });
    
    function readData(response)
    {
                //var id = response[i].id;                                                 
                var name = response[0].name;
                var dob = response[0].dob;
				var age = response[0].age;
                 var email = response[0].email;
                 var mobile = response[0].mobile;
                 var password = response[0].password;
                 var sex = response[0].sex;
                 var maritalstatus = response[0].maritalstatus;
                 var module = response[0].module;

				// var createdby = response[i].created_by;
				// var createdon = response[i].created_on;
				// var updatedby = response[i].updated_by;
                // var updatedon = response[i].updated_on;
                
                $("#registrationName").val(name);
                $("#registrationDob").val(dob);
               $("#registrationAge").html(age);
               $("#registrationEmail").val(email);
               $("#registrationMobile").val(mobile);
               $("#registrationPassword").val(password);
               $("#cpassword").val(password);

               if(sex=="male"){
                $("#male").prop('checked', true);

               }
               else{
                $("#female").prop('checked', true);
               }

               
               if(maritalstatus=="single"){
                $("#single").prop('checked', true);

               }
               else{
                $("#married").prop('checked', true);
               }


               if (module.length < 11){

            if(module == "budget"){
                $('#op1').prop('checked', true);

            }else if (module =="calculator"){

                $('#op2').prop('checked', true);
            }else if (module == "option3"){
                $('#op3').prop('checked', true);
            }

        }else{
                
               
               var array = module.split(',');
               var i;
for (i = 0; i < array.length; i++) {
  if(array[i] == "budget"){
    $('#op1').prop('checked', true);
  }else if (array[i] == "calculator"){
    $('#op2').prop('checked', true);
  }else if (array[i] == "option3"){
    $('#op3').prop('checked', true);
  }

}
             

            }    
              

        }
              
            
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
                  url: 'BusinessLayer/registrationBL.php?function=editFunc',
                  type: 'post',
                   data:{userData:userData},
                   
                  //  cache: false,
                  //  processData: false,
                  //  contentType: false,
                   
                  success: function (response) {
                      console.log(response);
                     
                  },
                  error: function () {
                      console.log(arguments);
                       //alert(" Can't do because: " + error);
                  }
                  
                    });
                  }
                  //window.location.replace("Login.php");
              }

              function DeleteData(){
                alert("Are you sure that you want to permanently delete your account?" );
                $.ajax({
                  url: 'BusinessLayer/registrationBL.php?function=deleteFunc',
                  type: 'post',
                   
                   
                  //  cache: false,
                  //  processData: false,
                  //  contentType: false,
                   
                  success: function () { 
                    alert(response);
                   window.location.replace("Login.php");
            setTimeout("preventBack()", 0);
            window.onunload=function(){null};
                  },
                  error: function () {
                      console.log(arguments);
                       //alert(" Can't do because: " + error);
                  }
                  
                    });

              }