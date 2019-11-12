
<?php header("Content-Type:text/html; charset=utf-8"); ?>

<html>
<head>
<title>php mysql testing</title>
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
  border: 10px solid ##dddddd ;
  text-align: center;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>



<div id="logo" class="container">
<a href="general_table.php" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:150%">Back</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統<span>Loacl web system</span><h1>Product list</h1></br></h1>
</div>


    <?php
        
        
        
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
            while($row = $result->fetch_assoc()) {
                $txt = "".$row["product"]."\t".$row["product_id"]."\t".$row["product_detail"]."\t".$row["price"]."\t".$row["discount_price30"]."\t".$row["discount_price60"]."\n";
                fwrite($myfile, $txt);	
                ++$tmp_count;
            }
            fclose($myfile);
        } else {
            echo "0 results";
        }
        
        $result = $mysqli->query("SELECT * FROM gernal_table");/*
        #$result = $mysqli->query("SELECT * FROM product_list");
        if ($result->num_rows > 0) {
            // output data of each row
            $myfile = fopen("gernal_list_from_mysql.csv", "w") or die("Unable to open file!");
            
            (訂單編號,訂單日期,訂購方式,
            訂購人姓名,訂購人電話,訂購人信箱,
            收件人姓名,收件人電話,收件人信箱,
            寄送地址,取貨方式,到貨時間,產品編號,總數量,
            商品總價小計,物流費用,應收款,收款情形,備註) 
            
            
            while($row = $result->fetch_assoc()) {
                $txt = ("".$row["訂單編號"].",".$row["訂單日期"].",".$row["訂購方式"].",".$row["訂購人姓名"].",".$row["訂購人電話"].",".$row["訂購人信箱"].",".$row["收件人姓名"].",".$row["收件人電話"].",".$row["收件人信箱"].",".$row["寄送地址"].",".$row["取貨方式"].",".$row["到貨時間"].",".$row["產品編號"].",".$row["總數量"].",".$row["商品總價小計"].",".$row["折扣後總計"].",".$row["物流費用"].",".$row["應收款"].",".$row["收款情形"].",".$row["備註"]."\n");
                fwrite($myfile, $txt);
            }
            
            echo "</table>";
           fclose($myfile);
        } else {
            echo "0 results";
        }
        */
        $mysqli->close();
        
        #$cmd ="perl get_sql.pl tmp.csv";
        #$result=shell_exec ( $cmd );
        
        #$cmd ="perl gernal_table_process.pl tmp.csv product_list_from_mysql.csv";
        #$result=shell_exec ( $cmd );
        
        #shell_exec( "rm tmp.csv" );
        
        #$myfile = fopen("gernal_table_reorganized.csv", "R") or die("Unable to open file!");
        
        
        #fclose($myfile);
        
        #echo "<p>$result</p>";

      ?>
<!--- Table region  --->
<div id="wrapper" class="container">
<form name="table_value" method="POST" action=""></br>

<p>請填寫日期區間</p>
<table style="width:80%" border="1" >
<td>起始日期</td>
<td>終止日期</td>
</table>
<table style="width:80%" border="1" >
  <thead>
    <td><input type="number" name="year_in" min="2019" max="2050">年
    <input type="number" name="month_in" min="1" max="12">月
    <input type="number" name="day_in" min="1" max="31">日</td>
    <td><input type="number" name="year_in" min="2019" max="2050">年
    <input type="number" name="month_in" min="1" max="12">月
    <input type="number" name="day_in" min="1" max="31">日</td>
  </thead>
</table>


<input type='submit' value='送出'> <input type='reset' value='清除'>
</div>
</body>
</html>


