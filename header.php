<?php
session_start();
?>
<html>
<head>
<style>
 
.fa-cog {
  color:white;
} 
/* .icon-cog {
  color:white;
} */
</style>
</head>
<body>
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
            <button data-toggle="tooltip" title="Edit Profile" onclick = "location.href = 'editRegistrationPage.php';" class="btn"><i class="fa fa-user fa-3x" style="color:white;"></i></button>
             <button data-toggle="tooltip" title="Log out" onclick = "logout()" class="btn"><i class="fa fa-sign-out fa-3x" style="color:white;"></i></button>
        
          </form>
        </div>
      </nav>
    <br>
    </body>
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
    </html>