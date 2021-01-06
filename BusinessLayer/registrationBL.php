<?php
include 'connection.php'; 
$operations = $_GET["function"]; 
if ($operations == "insertFunc")
{ 

    $FormDat = $_POST['userData'];
        
    $decoded = json_decode($FormDat, true);
    $date = date("Y/m/d");
    $namedb = $decoded['name'];
    $DOBdb = $decoded['dob'];
    $checkboxvaluesdb = $decoded['checkboxvalues'];
    $emaildb = $decoded['email'];
    $mobiledb = $decoded['mobile'];
    $agedb = $decoded['age'];
    $passworddb = $decoded['enterpass'];
    $sexdb = $decoded['sex'];
    $maritaldb = $decoded['maritalStatus'];

    $email_validationSql = "SELECT * FROM users where email = '$emaildb' ";
    //if ($conn->query($email_validationSql) === TRUE) {
      $emaildb_result = $conn->query($email_validationSql);
     
    //  } else {
    //    echo "Error: " . $email_validationSql . "<br>" . $conn->error;
    //  }
   

   


    if( $emaildb_result->num_rows > 0){


echo  "fail";
    }else {

     
    $insertsql= "INSERT INTO users (Name,d_o_b,age,sex,email,mobile,password,module,marital_status,created_by,created_on,updated_by,updated_on)
    VALUES ('$namedb' ,'$DOBdb','$agedb','$sexdb','$emaildb',$mobiledb,'$passworddb','$checkboxvaluesdb','$maritaldb','$createdBy','$date','$updatedBy','$date')";
    
     
     if ($conn->query($insertsql) === TRUE) {
       echo "New record created successfully";
      //echo json_encode(ReadTransactions());
      } else {
        echo "Error: " . $insertsql . "<br>" . $conn->error;
      }
    


}
}
else if ($operations == "readfunc")
{ 
  echo json_encode(ReadTransactions());
    
    }
    
  function ReadTransactions()
  {
        global $conn;
        $return_arr = Array();
     $sql = "SELECT * FROM users where id = 2";
     $result = $conn->query($sql);
          
            if($row = mysqli_fetch_array($result) ){
                $id = $row['id'];
                $name = $row['Name'];
                $dob = $row['d_o_b'];
                $age = $row['age'];
                $sex = $row['sex'];
                $email = $row['email'];
                $mobile = $row['mobile'];
                $module = $row['module'];
                $maritalstatus= $row['marital_Status'];
                $pword = $row['password'];
                $createdby = $row['created_by'];
                $createdon = $row['created_on'];
                $updatedby = $row['updated_by'];
                $updatedon = $row['updated_on'];
            
                $return_arr[] = array("id" => $id,
                                "name" => $name,
                                "dob" => $dob,
                                "age" => $age,
                                "sex" => $sex,
                                "email" => $email,
                                "mobile" => $mobile,
                                "password" => $pword,
                                "module" => $module,
                                "maritalstatus" => $maritalstatus,
                                "created_by" => $createdby,
                                "created_on" => $createdon,
                                "updated_by" =>  $updatedby,
                                "updated_on" =>  $updatedon);
    
                            
                            
                            
                            
    
            }
               return $return_arr;
      }
  

    
  
$conn->close();
    ?> 