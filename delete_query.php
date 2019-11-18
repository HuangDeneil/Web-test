
<?php header("Content-Type:text/html; charset=utf-8"); ?>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>訂單輸入</title>
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
.error {color: #FF0000;}
</style  style="width:100%">
</head>
<body>

<?php
    function _get($str)
    {
        $val = !empty($_POST["$str"]) ? $_POST[$str] : null;
        return $val;
    }
    
    $order_id=$order_from="";
    $source_name=$source_phone=$source_email="";
    $arrive_name=$arrive_phone=$arrive_email="";
    $address=$note="";
    $order_product="";
    $count_num=$order_product_price=0;
    
    $order_id=_get("order_id");

    $cmd ="perl get_sql.pl tmp.csv";
    $result=shell_exec ( $cmd );

    $cmd ='cat tmp.csv | grep $order_id > selected_order.csv';
    $result=shell_exec ( $cmd );
####################################################
# 
# Get product list from SQL
# 
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
    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
    } 
    $result = $mysqli -> query("SELECT * FROM product_list");

    if ($result->num_rows > 0) {
        // output data of each row
        $myfile = fopen("product_list_from_mysql.csv", "w") or die("Unable to open file!");
        $tmp_count=1;
        while($row = $result->fetch_assoc()) 
        {
            $txt = "".$row["product"]."\t".$row["product_id"]."\t".$row["product_detail"]."\t".$row["price"]."\t".$row["discount_price30"]."\t".$row["discount_price60"]."\n";
            fwrite($myfile, $txt);	
            ++$tmp_count;
        }
        fclose($myfile);
    } else {
        echo "0 results";
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
                elseif($input2 == "dicount30")
                {
                    if ($input == $product_id )
                    {
                        $price= floatval($str[4]);
                        return $price;
                    }
                }
                elseif($input2 == "dicount60")
                {
                    if ($input == $product_id )
                    {
                        $price= floatval($str[5]);
                        return $price;
                    }
                }
            }
            $count=$count+1;
        }
        fclose($myfile);
    }
    


    ####################
    # 
    # take order information
    # 
    function print_order($input )
    {
        $myfile = fopen("selected_order.csv", "r") or die("Unable to open file!");
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
                $str=explode( ",",  $tmp_text ) ;
                $product_id = $str[1];
                
                if ($input2 == "info" )
                {
                    
                    if ($input == $product_id )
                    {
                        $data = "$str[0]\t$str[1]\t$str[2]\t\$$str[3]";
                        return $data;
                    }
                }
            }
            $count=$count+1;
        }
        fclose($myfile);
    
        foreach ($_POST as $key => $value) 
        { 
            if ( preg_match ( "/order_product/", $key) )
            {
                #print "{$key} {$value}<br />";
                $product_order_info = search_products(_get($key),"info");
                
                echo "<tr>";
                echo "<th> $product_order_info  </th>";
                $product_price = search_products($value,"price");
                #var_dump($product_price);
            }
            elseif(preg_match ( "/count_num/", $key) )
            {
                #print "{$key} {$value}<br />";
                $product_order_count = floatval($value);
                $product_order_price= $product_order_count*$product_price;
                echo "<th> $product_order_count </th>";
                echo "<th> $product_order_price </th>";
                echo "</tr>";
            }
        }
    }
  /*
    function total_count()
    {
        $product_value = 1;
        $total_count=0;
        $product_order=0;
                
        foreach ($_POST as $key => $value) 
        {
            if ( preg_match( "/count_num/", $key) )
            {
                #print "{$key} {$value}<br />";
                $product_order = (floatval($value) );
                $total_count = $total_count + $product_order;
                $product_value = $product_value+1;
            }
        }
        echo $product_order;
    }

        
        $product_order = $total_count;
        $total_price=0;
        $product_order_price=0;

        #######################################
        # 呈現訂單
        if ( $product_order > 6 )
        {
            foreach ($_POST as $key => $value) 
            {
                if ( preg_match( "/order_product/", $key) )
                {
                    if ( $discount == "yes30" OR $discount == "auto30" )
                    {
                        $product_price = search_products($value,"dicount30");
                    }
                    elseif ( $discount == "yes60" OR $discount == "auto60" )
                    {
                        $product_price = search_products($value,"dicount60");
                    }
                    else{
                        $product_price = search_products($value,"price");
                    }
                }
                elseif(preg_match ( "/count_num/", $key) )
                {
                    $product_order_price = ( floatval($value) * $product_price );
                    $total_price = $total_price + $product_order_price;
                }
            }
            if ( $discount == "no" )
            {
            echo total_price();
            }
            elseif ( $discount == "auto" )
            {
                $discount_value=floatval(_get("discount_value"))/100;
                
                echo $total_price*$discount_value;
            }
            else
            {
                echo $total_price;
            }
        }
        else
        {
            echo total_price();
            #var_dump(total_order_num());
        }
    
    }
    /*
    $order_from="";
    $source_name=$source_phone=$source_email="";
    $arrive_name=$arrive_phone=$arrive_email="";
    $address=$note="";
    $order_product="";
    $count_num=$order_product_price=0;
    */
#0 訂單編號		#1 訂單日期		#2 訂購方式		
#3 訂購人姓名	#4 訂購人電話	#5 訂購人信箱
#6 收件人姓名	#7 收件人電話	#8 收件人信箱	#9 寄送地址
#10 取貨方式	#11 到貨時間	#12 產品編號	#13 總數量	#14 商品總價小計	#15 折扣後總計	
#16 物流費用	#17 應收款		#18 收款情形	#19 備註	#20 discount

$myfile = fopen("selected_order.csv", "r") or die("Unable to open file!");
    $data="";
    $price=0;
    while( !feof($myfile) ) 
    {
        $price=0;
        $tmp_text = fgets($myfile);
            
        if ($tmp_text == "") {}
        else
        {
            $str=explode( ",",  $tmp_text ) ;
            $product_id = $str[1];
            
            $order_from=$str[3];
            $source_name=$str[4];
            $source_phone=$str[5];
            $source_email=$str[6];
            $arrive_name=$str[7];
            $arrive_phone=$str[8];
            $arrive_email=$str[9];
            $address=$str[10];
            $note=$str[11];
            $order_product=$str[13];
            
            if ($str[13] == "info" )
            {
                    
                if ($input == $product_id )
                {
                        $data = "$str[0]\t$str[1]\t$str[2]\t\$$str[3]";
                        return $data;
                }
            }
        }
        $count=$count+1;
    }
fclose($myfile);

?>

<div id="logo" class="container">
  <a href="index.html" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:120%">Home</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統<span>Loacl web system</span><h1 >Order deletion</h1></h1>
</div>

<div id="wrapper" class="container">
<form name="table_value" method="POST" action="">
<table>
    <tr>
        <td>貨號: <?php echo "$order_id"; ?><input type="hidden" name="order_id" value ="<?php echo $order_id; ?>" ></td>
	    <td>訂貨方式: <?php echo "$order_from   "; ?> </td> 
   	    <td> 
            <input id="order_form" type="hidden" name="order_from" value ="<?php echo $order_from; ?>" >
            <input id="discount_value" type="hidden" name="discount_value" value ="<?php  ?>" >
        </td>
    </tr>
</table>

<input type="hidden" name="date" value ="<?php echo $date; ?>" >

<table>
    <tr>
        <td>定貨人: <?php echo "$source_name" ; ?><input id="source_name" type="hidden" name="source_name" value ="<?php echo $source_name; ?>" ></td>
        <td>電話: <?php echo "$source_phone" ; ?><input id="source_phone" type="hidden" name="source_phone" value ="<?php echo $source_phone; ?>" ></td>
        <td>信箱: <?php echo "$source_email" ; ?><input type="hidden" name="source_email" value ="<?php echo $source_email; ?>" ></td>
    </tr>
    <tr>
        <td>收貨人: <?php echo "$arrive_name" ; ?><input id="arrive_name" type="hidden" name="arrive_name" value ="<?php echo $arrive_name; ?>" ></td>
        <td>電話: <?php echo "$arrive_phone" ; ?><input id="arrive_phone" type="hidden" name="arrive_phone" value ="<?php echo $arrive_phone; ?>" ></td>
        <td>信箱: <?php echo "$arrive_email" ; ?><input type="hidden" name="arrive_email" value ="<?php echo $arrive_email; ?>" ></td>
      </tr>
</table>
<table>
    <tr>
        <td>地址: <?php echo "$address" ; ?><input id="address" type="hidden" name="address" value ="<?php echo $address; ?>" ></td>
    </tr>
    <tr>
        <td>備註: <?php echo "$note" ; ?><input type="hidden" name="note"  value ="<?php echo $note; ?>" ></td>
    </tr>
</table>
<table  style="width:100%">
    <tr>
        <th>合計 : <?php echo total_price() ; ?><input type="hidden" name="total_price" value ="<?php echo total_price(); ?>" ></th>
        <td></td>
        <th>銷售稅 : --</th>
        <th></th>
        <th>折扣後總計 : <?php discount("total"); ?><input type="hidden" name="discount" value ="<?php echo discount("total"); ?>" ></th>
        <td></td>
    </tr>
</table>

</br>

    <table  style="width:100%" style="width:100%" border="1" cellpadding="5">
      <tr>
        <th>產品    &   產品編號    &   內容物   &   單價</th>
        <th>數目</th>
        <th>總價</th>
      </tr>
      <tr>
        <?php   print_order(); ?>
      </tr>
    </table>
    <input type="hidden" name="orders" value ="<?php echo order(); ?>" >
    <input type="hidden" name="total_count" value ="<?php echo total_count(); ?>" >
    </br></br>
    <input type='submit' value='確認訂單並送出'> 
    
    </form>
</div>

</body>
</html>










