<?php
include 'connection.php'; 
$operations = $_GET["function"];     
if ($operations == "readfunc")
{ 
  echo json_encode(ReadTransactions());
    
    }
    else if($operations == "insertFunc")
    {
    
   

$FormDat = $_POST['transactionData'];
        
$decoded = json_decode($FormDat, true);
$date = date("Y/m/d");
$namedb = $decoded['name'];
$amountdb = $decoded['amount'];
$categorydb = $decoded['category'];
$datedb = $decoded['date'];
 
$insertsql = "INSERT INTO transactions (name,Amount,category,Date,created_by,created_on,updated_by,updated_on)
VALUES ('$namedb' ,$amountdb,'$categorydb','$datedb','$createdBy','$date','$updatedBy','$date')";

 
 if ($conn->query($insertsql) === TRUE) {
  // echo "New record created successfully";
  echo json_encode(ReadTransactions());
  } else {
	echo "Error: " . $insertsql . "<br>" . $conn->error;
  }

      }
      else if($operations == "updatefunc")
      {


        $updateDat = $_POST['updatedData'];
        
        $decodedUpdateData = json_decode($updateDat, true);
        $date = date("Y/m/d");
        $updateId = $decodedUpdateData['id'];
        $updateName = $decodedUpdateData['name'];
        $updateAmount = $decodedUpdateData['amount'];
        $updateCategory = $decodedUpdateData['category'];
        $updatedate = $decodedUpdateData['date'];
        
         
        $updatesql = "UPDATE transactions SET name ='$updateName',Amount = $updateAmount,category='$updateCategory',Date ='$updatedate', updated_on = '$date' WHERE id=$updateId ";
        
        
         
         if ($conn->query($updatesql) === TRUE) {
          // echo "New record created successfully";
          echo json_encode(ReadTransactions());
          } else {
          echo "Error: " . $updatesql . "<br>" . $conn->error;
          }
        


      }

      else if($operations == "deletefunc")
      {

        $deleteDat = $_POST['deleteData'];


        $deletesql = "DELETE FROM transactions WHERE id=$deleteDat";
   
        if ($conn->query($deletesql) === TRUE) {
          // echo "New record created successfully";
          echo json_encode(ReadTransactions());
          } else {
          echo "Error: " . $deletesql . "<br>" . $conn->error;
          }

      }
      
 
  function ReadTransactions()
  {
        global $conn;
        $return_arr = Array();
     $sql = "SELECT * FROM transactions
     ORDER BY id DESC;";
     $result = $conn->query($sql);
          
            while($row = mysqli_fetch_array($result) ){
                $id = $row['id'];
                $name = $row['Name'];
                $amount = $row['amount'];
                $category = $row['category'];
                $Date_s = $row['Date'];
                $createdby = $row['created_by'];
                $createdon = $row['created_on'];
                $updatedby = $row['updated_by'];
                $updatedon = $row['updated_on'];
            
                $return_arr[] = array("id" => $id,
                                "name" => $name,
                                "Amount" => $amount,
                                "category" => $category,
                                "Date" => $Date_s,
                                "created_by" => $createdby,
                                "created_on" => $createdon,
                                "updated_by" =>  $updatedby,
                                "updated_on" =>  $updatedon);
    
                            
                            
                            
                            
    
            }
               return $return_arr;
      }
  
$conn->close();
    ?>






 