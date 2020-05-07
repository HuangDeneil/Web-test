<?php header("Content-Type:text/html; charset=utf-8"); ?>

<html>
<head>
<title>訂單輸入 order input</title>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Open+Sans+Condensed:300,700" rel="stylesheet" />
<link href="../default.css" rel="stylesheet" type="text/css" media="all" />
<link href="../fonts.css" rel="stylesheet" type="text/css" media="all" />

<script src="../javascript/jquery-1.8.3.js"></script>

<script>
  var tag = 1;

  $(function(){
    $("#add").click(function(){
        var text = document.getElementById("products").value;
        $('#mt tbody').append("<tr><td><select name='order_product"+tag+"'>"+text+"</select></td><td><input type=\"text\" name=\"count_num"+tag+"\" ></td></tr>");
      tag++;
    });

    $("#del").click(function(){
        $("#mt tbody tr:last").remove();
        tag= tag-1;
    });
  })
</script>


<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #000000;
}

td, th {
  border: 1px solid ##dddddd ;
  text-align: left;
  padding: 2px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.error {color: #FF0000;}
</style  style="width:100%">

</head>




<?php
   
   /*
   ##############################################################
   #################### 從MySQL中讀取產品資訊 #####################
   ##############################################################
   */
  $servername = "localhost";
  $username = "hudeneil";
  $password = "78369906";
  $dbname = "the_db";
  $mysqli = new mysqli("$servername", "$username", "$password", "$dbname");
        
  /* check connection */
  if (mysqli_connect_errno()) {
      printf("Connect failed: %s\n", mysqli_connect_error());
      exit();
  }
    
  /* change character set to utf8 */
  if (!$mysqli->set_charset("utf8")) 
  {
      printf("Error loading character set utf8: %s\n", $mysqli->error);
  } 
  $result = $mysqli -> query("SELECT * FROM product_list");


   /*
   #####################################################################################################
   #################### 將取產品資訊寫入暫存資料夾中的 "product_list_from_mysql.csv" ######################
   #####################################################################################################
   */
  if ($result->num_rows > 0) 
  {
      // output data of each row
      $myfile = fopen("../temp/product_list_from_mysql.csv", "w") or die("Unable to open file!");
      $tmp_count=1;
      while($row = $result->fetch_assoc()) 
      {
          $txt = "".$row["product"]."\t".$row["product_id"]."\t".$row["product_detail"]."\t".$row["price"]."\t".$row["discount_price30"]."\t".$row["discount_price60"]."\n";
          fwrite($myfile, $txt);	
          ++$tmp_count;
      }
      fclose($myfile);
  } 
  else 
  {
      echo "0 results";
  }

  $mysqli->close();
  
  function get($str){
    $val = !empty($str) ? $str : null;
    return $val;
  }

   /*
   #########################################################################################################
   #################### 讀取 產品資訊 from 暫存資料夾中的 "product_list_from_mysql.csv"  ######################
   #########################################################################################################
   */
  function show_products()
  {
      $show = "<option value=\"\">請選擇商品</option>";
      $count=1;
      $myfile = fopen("../temp/product_list_from_mysql.csv", "r") or die("Unable to open file!");
      
      while( !feof($myfile) ) 
      {
          $tmp_text = fgets($myfile);
          if ($tmp_text == "") {}
          else
          {
              $str=explode( "\t",  $tmp_text ) ;
              $product_id = $str[1];
              $text = "$count. \t$str[0]\t$str[1]\t$str[2]\t\$$str[3]";
              $show = $show."<option value=\"$product_id\">$text</option>";
              #echo "<option value=\"$product_id\">$text</option>";
              ++$count;
          }
      }
      echo $show;
      fclose($myfile);
  }
?>


<!--- 
<?php
  echo "<select name='order_product'>";
  show_products() ;
  echo "</select>";
?>
--->


<!--- 
#######################################################################
###################*####*#####***#####*****######*****################
###################*####*###*#####*########*#####*####*###############
###################******##*********###*****#####*#####*##############
###################*####*###*#########*####**####*###*################
###################*####*####*****######***##*###****#################
#######################################################################
--->

<body>
<div id="logo" class="container">
  <a href="../index.html" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:120%">Back</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統<span>Loacl web system</span><h1 >Order process</h1></h1>
</div>


<?php
   /*
   ########################################################
   #################### 表格資訊填寫  ######################
   ########################################################
   */
  ?>

  
<!--- Table region  --->
<div id="wrapper" class="container">
  <form name="table_value" method="POST" action="query.php">
  <p><span class="error">* require value</span><p>
  <table>
    <tr>
      <td>訂單編號(本欄未填寫則自動生成) : <input type="text" name="order_id" rows="2" cols="30"></td>
      <td>訂購方式 : <select name="order_from">
        <option value=""></option>
        <option value="現場">現場</option>
        <option value="仲介">仲介</option>
        <option value="團購">團購</option>
        <option value="網路">網路</option>
      <select>  <span class="error">* </span>
      <p>
      <select name="discount">
        <option value="no">無折扣</option>
        <option value="yes30">折扣$30</option>
        <option value="auto30">自動折扣$30(總數>6項 折扣$30)</option>
        <option value="yes60">有折扣$60</option>
        <option value="auto60">自動折扣$60(總數>6項 折扣$60)</option>
        <option value="auto">自訂</option>
      <select><input type="number" name="discount_value" min="1" max="100">%	ex:85折 = 85%
    </p></td>
    </tr>
  </table>
  <svg height="7" width="1200"><line x1="0" y1="0" x2="1300" y2="0" style="stroke:rgb(0,150,255);stroke-width:2" /></svg>
    <table>
      <tr>
        <td>定貨人:</td>
        <td><input type="text" name="source_name" rows="2" cols="30"><span class="error">* </span></td>
        <td>電話:</td>
        <td><input type="text" name="source_phone" rows="2" cols="50"><span class="error">* </span></td>
        <td>e-mail:</td>
        <td><input type="text" name="source_email" rows="2" cols="50"></td>
      </tr>
      <tr>
        <td>收貨人:</td>
        <td><input type="text" name="arrive_name" rows="2" cols="30"><span class="error">* </span></td>
        <td>電話:</td>
        <td><input type="text" name="arrive_phone" rows="2" cols="50"><span class="error">* </span></td>
        <td>e-mail:</td>
        <td><input type="text" name="arrive_email" rows="2" cols="50"></td>
      </tr>
    </table>
    <table>
      <tr>
        <td>收貨人地址:</td>
        <td><textarea type="text" name="address" rows="2" cols="100"></textarea><span class="error">* </span>
         </td>
      </tr>
      <tr>
        <td>備註:</td>
        <td><p><textarea type="text" name="note" rows="4" cols="100"></textarea></p></td>
      </tr>
    </table>
    </br>
    <p><input type='submit' value='送出訂單'> <input type='reset' value='清除'></p>
    </br>
    
    <table id="mt" style="width:100%" border="1" cellpadding="5">
      <thead>
        <th>產品    &   產品編號    &   內容物   &   單價</th>
        <th>數目</th>
      </thead>
      <tbody>
          <th>
            <?php  
              echo "<select name=\"order_product\">";
              show_products();
              echo "</select>"; 
            ?>
            <span class="error">* </span>
          </th>
          <th><input type="text" name="count_num" ><span class="error">* </span></th>
      </tbody>
    </table>
    
    <input type="hidden" id="products" name="hidden_objects" value='<?php  show_products(); ?> '>
    

  <p><?php  #check_error(checking_value()) ?></p>
   </form>
   <button id="add">增加欄位</button>
   <button id="del">刪除欄位</button>
</div>
</body>
</html>


