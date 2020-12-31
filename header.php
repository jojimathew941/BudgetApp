<?php
session_start();
?>

 <nav class="navbar navbar-expand-sm bg-dark navbar-dark navbot">
        <!-- Brand/logo -->
        <a class="navbar-brand" href="budget.php">Budget</a>
        
        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="transactions.php">Transactions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="newCalculator.php">Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
        </ul>
       <div class = "collapse navbar-collapse justify-content-end">
        
       <?php   
       echo "<p style ='color:white;padding-top:21px;padding-right:16px'>Welcome ". strtoupper($_SESSION['name']). "</P> ";
       ?>
           <!-- <a><i class="fa fa-sign-out fa-3x" aria-hidden="true"></i></a> 
             -->
             <button onclick = "logout()" class="btn"><i class="fa fa-sign-out fa-3x"></i></button>
        
          </form>
        </div>
      </nav>
    <br>
    <script>
    function logout(){
      $.ajax({
        url: 'BusinessLayer/loginBL.php?function=logoutfunc',
		type: 'get',
        
        success: function(response){
            alert(response);
            window.location.replace("Login.php");
			},		
		error: function (request, error) {
			console.log(arguments);
			alert(" Can't do because: " + error);
        }
        
        
		
		  });

    }
    
    
    </script>