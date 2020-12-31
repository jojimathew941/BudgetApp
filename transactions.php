<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="js/transactions.js"></script>

  
<link rel = "stylesheet" href = "css/transactions.css">
 
<title>TRANSACTIONS</title>





</head>

<body>
   <?php include 'header.php';?>
   <div class="container-fluid table-responsive">
  <div class = "row">

   <div class="col"> <h1>TRANSACTIONS</h1></div>
	<div class="col"></div>
	<div class="col"></div>
	<div class="col"></div>
	<div class="col"></div>
	 <div class="col align-self-end"><h1> <button type="button" class="btn btn-dark "data-toggle="modal"data-target="#myModal" onclick = "hidebuttonFunction()">ADD</button></div>
   
    </div>
	<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">TRANSACTIONS</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="container modal-body">
       <form id = "form">
	   
	   
	   
                    <div class = "row justify-content-center modalpad">
                      <div class = "col-sm-3"> <label for="name">Name</label> </div>
                        
                      <div class = "col-sm-7">   <input  id = "name" class = "form-control"type="text" name="name" id="name" />  </div>
                    </div>
					
                    <div class = "row justify-content-center modalpad">
                       <div class = "col-sm-3"> <label for="amount">Amount</label> </div>
                        
                        <div class = "col-sm-7"> <input  id = "amount" class = "form-control"type="number" name="number" id="number" /> </div>
                    </div>
					
                        <div class = "row justify-content-center modalpad">
                         <div class = "col-sm-3"> <label for="date">Date</label> </div>
                        
                          <div class = "col-sm-7"><input  id = "date" class = "form-control" type="date" name="phone" id="date" /> </div>
                          <input type="hidden" id="transactionId" name="transactionId" />
                    </div>
					
					 <div class = "row justify-content-center modalpad">
					
                       <div class = "col-sm-3">  <label for="category">category</label> </div>
                        
                        <div class = "col-sm-7">  <select  id = "category" class = "form-control" id="category" name="category">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select></div>
                  </div>  
                    
                        
                     
             </form>
                
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button id = "submit" type="button" class="btn btn-dark" onclick="insertData()">Submit</button>
		 <button id ="clear" type="button" class="btn btn-danger"  onclick="clearAll()">Clear</button>
     <button id ="edit" type="button" class="btn btn-success"  onclick="Edit()">Update</button>
      </div>

    </div>
  </div>
</div>

 
 
 
  <div class = "row">
  
  <table class="table table-bordered" id = "userTable">
 
  
  
    <thead class="thead-dark">
      <tr>
       <!-- <th data-visible="false" style="text-align:center;">ID</th>  -->
        <th style="text-align:center">NAME</th>
        <th style="text-align:center">AMOUNT</th>
		<th style="text-align:center">CATEGORY</th>
    <th style="text-align:center">DATE</th>

		<!-- <th>Created_by</th>
		<th>Created_on</th>
    <th>Updated_by</th>
    <th>Updated_on</th> -->
    <th style="text-align:center">Actions</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  </div>
  </div>




<?php include 'footer.php';?>




</body>
</html>