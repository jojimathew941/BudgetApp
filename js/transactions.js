$(document).ready(function(){
	
	
	$.ajax(
		{
        url: 'BusinessLayer/Transaction.php?function=readfunc',
		type: 'get',
        dataType: 'JSON',
        success: function(response){
			if(response.length == 2){
				document.getElementById("budgetamount").innerHTML = response[0];
				document.getElementById("totalamount").innerHTML = response[1] ;
				
	
		$("#budgetamount").css("background-color", "green");
	
			
			}else{
				
			availableBudgetColorchange(response);
	
			RefreshTable(response);
			}
			
			},		
		error: function (request, error) {
			console.log(arguments);
			alert(" Can't do because: " + error);
		}
		
		  });

			
			  });
			  

  


  function insertData()
  {

	
	  var name = $("#name").val();
	  var amount = $("#amount").val();
	  var date = $("#date").val();
	  var category = $("#category").val();
    if (name == "" || name == null || name == undefined){
		 alert( "Please enter your name.");
	}
	else if (date == "" || date == null || date == undefined){
		 alert( "Please enter the Date.");
	}
		else if (amount == "" || amount == null || amount == undefined){
		 alert( "Please enter the amount.");
	}
	
	else {
		var myObj = {name:name, amount:amount , date:date ,category:category};
		var transactionData = JSON.stringify(myObj);
		 $.ajax({
			url: 'BusinessLayer/Transaction.php?function=insertFunc',
			type: 'post',
			 data:{transactionData:transactionData},
			 dataType: 'JSON',
			 
			//  cache: false,
			//  processData: false,
			//  contentType: false,
			 
			success: function (response) {
				  if (response === "fail"){

				 	alert("No budget available");
				  }
				  else{
				RefreshTable(response);
				 alert ("Transaction created successfully");
				 availableBudgetColorchange(response);
				 }
				
			},
			error: function (request, error) {
				console.log(arguments);
				 //alert(" Can't do because: " + error);
			}
			
			  });
			  $("#myModal").modal('hide');
	}

	
}	
		
	function showInModal(id)
	{
		$("#edit").show();

		$("#submit").hide();
		 //var id = $("#edit"+id).closest("tr")[0].children[0].innerText;
		 var name = $("#edit"+id).closest("tr")[0].children[0].innerText;
		 var amount = $("#edit"+id).closest("tr")[0].children[1].innerText;

		 var category = $("#edit"+id).closest("tr")[0].children[2].innerText;
		 var date = $("#edit"+id).closest("tr")[0].children[3].innerText;

		 $("#transactionId").val(id);
		 $("#name").val(name);
		 $("#amount").val(amount);
		 $("#category").val(category);
		 $("#date").val(date);

	}

	function Edit()
	{
		
		$("#transactionId").val();
		  $("#name").val();
		  $("#amount").val();
		  $("#category").val();
		  $("#date").val();

		  
	var myObj = {id:$("#transactionId").val() ,name: $("#name").val(), amount: $("#amount").val() ,category: $("#category").val(),date:$("#date").val()};
	var updatedData = JSON.stringify(myObj);
	$.ajax({
		url: 'BusinessLayer/Transaction.php?function=updatefunc',
		type: 'post',
		 data:{updatedData:updatedData},
		 dataType: 'JSON',
        //  cache: false,
        //  processData: false,
        //  contentType: false,
        
        success: function (response) {
			if (response === "fail"){

				alert("No budget available");
			 }
			 else{
			
			RefreshTable(response);
			alert("Transaction updated successfully");
			availableBudgetColorchange(response);
			 }
		},
		error: function (request, error) {
			console.log(arguments);
 			//alert(" Can't do because: " + error);
		}
		
		  });
		  $("#myModal").modal('hide');
    
	}
 

			 
        
    
  


	function deleteData(id)

	{
	
		

		$.ajax({
			url: 'BusinessLayer/Transaction.php?function=deletefunc',
			type: 'post',
			 data:{deleteData:id},
			 dataType: 'JSON',
			//  cache: false,
			//  processData: false,
			//  contentType: false,
			
			success: function (response) {
				RefreshTable(response);
				alert("Transaction deleted successfully");
				availableBudgetColorchange(response);

			},
			error: function (request, error) {
				console.log(arguments);
				 //alert(" Can't do because: " + error);
			}
			
			  });
	}


function clearAll()

{

   $("#name").val("");
   $("#amount").val("");
  $("#date").val("");
 
		
		


}

function RefreshTable(response)
{
	var len = response.length;
	var TableData = "";
			for(var i=0; i<len; i++)
			{
                var id = response[i].id;
                var name = response[i].name;
                var amount = response[i].Amount;
				var category = response[i].category;
				var Date = response[i].Date;

				var createdby = response[i].created_by;
				var createdon = response[i].created_on;
				var updatedby = response[i].updated_by;
				var updatedon = response[i].updated_on;

                var tr_str = "<tr class = 'item'>" +
                  //  "<td style='text-align:center'>" + id + "</td>" +
                    "<td  align='center'>" + name + "</td>" +
                    "<td  align='center'>" + amount + "</td>" +
					"<td  align='center'>" + category + "</td>" +
					"<td  align='center'>" + Date + "</td>" +
					
					// "<td align='center'>" + createdby + "</td>" +
					// "<td align='center'>" + createdon + "</td>" +
					// "<td align='center'>" + updatedby + "</td>" +
					// "<td align='center'>" + updatedon + "</td>" +
					"<td align='center'><a href='#' data-toggle='modal' data-target='#myModal' id='edit"+id+"' onclick ='showInModal("+id+")'><i class='fa fa-pencil' style='font-size:36px;'  aria-hidden='true'></i></a><a href='#' id='delete"+id+"'  onclick ='deleteData("+id+")' ><i class='fa fa-trash' style='font-size:36px;padding-left:25px;' aria-hidden='true'></i></a></td>"+
 
					"</tr>";
					TableData= TableData + tr_str;
			}
			
				$("#userTable tbody").html(TableData );
			
}

function hidebuttonFunction()
{
	clearAll();
	$("#submit").show();
	$("#edit").hide();


}

function availableBudgetColorchange(response){

	var availableAmount = response[0].budgetAvailableAmount;
	var fullAmount= response[0].budgetAmount;
	document.getElementById("budgetamount").innerHTML = availableAmount;
	document.getElementById("totalamount").innerHTML = fullAmount;
	var percentage = (availableAmount/fullAmount)*100;
	if(percentage <=10){
		$("#budgetamount").css("background-color", "red");
	}
	else if (percentage > 10 && percentage <=50){
		$("#budgetamount").css("background-color", "yellow");
	}
	else if (percentage > 50){
		$("#budgetamount").css("background-color", "green");
	}
}



