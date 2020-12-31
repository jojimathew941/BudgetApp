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
               var array = module.split(',');
               var module1 = array[0];
               var module2 = array[1];

                
               if(module1 =="budget" && module2 == "calculator"){
                $('#op1').prop('checked', true);
                $('#op2').prop('checked', true);

               }
              
}
