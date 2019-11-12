<?php header("Content-Type:text/html; charset=utf-8"); ?>
<html>
<head>
<title>訂單上傳</title>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Open+Sans+Condensed:300,700" rel="stylesheet" />
<link href="default.css" rel="stylesheet" type="text/css" media="all" />
<link href="fonts.css" rel="stylesheet" type="text/css" media="all" />
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
</style  style="width:100%">
</head>

<body>

<div id="logo" class="container">
  <a style="font-family:微軟正黑體;text-transform:initial;font-size:120%" href="order_process.php" class="button">下個訂單next order</a>
  <a style="font-family:微軟正黑體;text-transform:initial;font-size:120%" href="index.html" class="button">回首頁 Homepage</a>
  <h1><span></span></h1>
</div>

<div id="wrapper" class="container">
<?php
    function _get($str)
    {
        $val = !empty($_POST["$str"]) ? $_POST[$str] : null;
        return $val;
    }
    /*
    foreach ($_POST as $key => $value) 
    {
        print "{$key} : {$value}</br>";
    }
    */

    /* MySQL uploading */
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "the_db";
    $mysqli = new mysqli("$servername", "$username", "", "$dbname");
          
    /* check connection */
    if ( mysqli_connect_errno() ) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
      
    /* change character set to utf8 */
    if (!$mysqli -> set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
    } 
    

    /*
    order_id : D20191023013743
    order_from : 現場
    date : 20191023

    source_name : 謝佳琳
    source_phone : 0975306192
    source_email : hudeneil@gmail.com

    arrive_name : 邱慧滿
    arrive_phone : 0921472322
    arrive_email : hudeneil@gmail.com

    address : 新北市新店區黎明路98號11樓(管理員代收）
    note :
    total_price : 7430
    discount : 7130
    orders : 208894x1 209902x2 202503x3 208802x4
    */
    $order_id=_get("order_id");
    $order_from=_get("order_from");
    $date=_get("date");

    $source_name=_get("source_name");
    $source_phone=_get("source_phone");
    $source_email=_get("source_email");
    
    $arrive_name=_get("arrive_name");
    $arrive_phone=_get("arrive_phone");
    $arrive_email=_get("arrive_email");
    
    $address=_get("address");
    $note=_get("note");    
    $total_price=_get("total_price");
    $discount=_get("discount");
    $orders=_get("orders");
    $total_count=_get("total_count");
    
    $sql = "INSERT IGNORE INTO `gernal_table` 
    (訂單編號,訂單日期,訂購方式,
    訂購人姓名,訂購人電話,訂購人信箱,
    收件人姓名,收件人電話,收件人信箱,
    寄送地址,取貨方式,到貨時間,產品編號,總數量,
    商品總價小計,折扣後總計,物流費用,應收款,收款情形,備註) 
    VALUES ('$order_id', '$date', '$order_from', 
    '$source_name', '$source_phone', '$source_email', 
    '$arrive_name', '$arrive_phone', '$arrive_email', '$address', 
    '', '', '$orders', '$total_count',
    '$total_price', '$discount', '', '', '', '$note')";

#echo "$sql </br>";
/*   
    "INSERT IGNORE INTO `gernal_table` 
    
    VALUES ('', '', '')";
*/

    if ($mysqli -> query( $sql ) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $mysqli->error;
    }
  
    $mysqli->close();

    function search_products ( $input, $input2 )
    {
        $myfile = fopen("product_list_from_mysql.csv", "r") or die("Unable to open file!");
        $count=1;
        $data="";
        $price=0;
        while( !feof($myfile) ) 
        {
            $price=0;
            $tmp_text = fgets($myfile);
            if ($tmp_text == "") {}
            else
            {
                $str=explode( "\t",  $tmp_text ) ;
                $product_id = $str[1];
                
                if ($input2 == "info" ){
                    
                    if ($input == $product_id )
                    {
                        $data = "$str[0]\t$str[1]\t$str[2]\t\$$str[3]";
                        return $data;
                    }
                
                }
                elseif($input2 == "price")
                {
                    if ($input == $product_id )
                    {
                        $price= floatval($str[3]);
                        return $price;
                    }
                }
                elseif($input2 == "dicount")
                {
                    if ($input == $product_id )
                    {
                        $price= floatval($str[4]);
                        return $price;
                    }
                }
            }
            $count=$count+1;
        }
        fclose($myfile);
    
    }


?>

<?php 

$myfile = fopen("./tmp.csv", "w") or die("Unable to open file!");


$output= "$order_id,$date,$order_from,$source_name,$source_phone,$source_email,$arrive_name,$arrive_phone,$arrive_email,$address,,,$orders,$total_count,$total_price,,,,$note";

            /*
            訂單編號,訂單日期,訂購方式,
            訂購人姓名,訂購人電話,訂購人信箱,
            收件人姓名,收件人電話,收件人信箱,
            寄送地址,取貨方式,到貨時間,產品編號,總數量,
            商品總價小計,物流費用,應收款,收款情形,備註
             */

fwrite($myfile, $output);	
fclose($myfile);

$cmd ="perl gernal_table_process.pl tmp.csv product_list_from_mysql.csv";
$result=shell_exec ( $cmd );

?>


</body>
</html>
<td><a href=<?php echo "\"order_list/$order_id.html\"" ?> class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:120%" > 銷貨單 </a></td>
</div>




</body>
</html>
