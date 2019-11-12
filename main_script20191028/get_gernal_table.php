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
  <a href="index.html" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:150%">Back</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統<span>Loacl web system</span><h1>Gernal Table</h1></br></h1>
</div>

<!--- Table region  --->



<div id="wrapper" class="container" >
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
      
        
        
        
        
        $result = $mysqli->query("SELECT * FROM gernal_table");
        #$result = $mysqli->query("SELECT * FROM product_list");
        if ($result->num_rows > 0) {
            // output data of each row
            $myfile = fopen("gernal_list_from_mysql.csv", "w") or die("Unable to open file!");
            /*
            (訂單編號,訂單日期,訂購方式,
            訂購人姓名,訂購人電話,訂購人信箱,
            收件人姓名,收件人電話,收件人信箱,
            寄送地址,取貨方式,到貨時間,產品編號,總數量,
            商品總價小計,物流費用,應收款,收款情形,備註) 
            */
            
            while($row = $result->fetch_assoc()) {
                $txt = ("".$row["訂單編號"].",".$row["訂單日期"].",".$row["訂購方式"].",".$row["訂購人姓名"].",".$row["訂購人電話"].",".$row["訂購人信箱"].",".$row["收件人姓名"].",".$row["收件人電話"].",".$row["收件人信箱"].",".$row["寄送地址"].",".$row["取貨方式"].",".$row["到貨時間"].",".$row["產品編號"].",".$row["總數量"].",".$row["商品總價小計"].",".$row["折扣後總計"].",".$row["折扣後總計"].",".$row["物流費用"].",".$row["應收款"].",".$row["收款情形"].",".$row["備註"]."\n");
                fwrite($myfile, $txt);
            }
            
            echo "</table>";
           fclose($myfile);
        } else {
            echo "0 results";
        }

        
        
        $cmd ="perl gernal_table_process.pl gernal_list_from_mysql.csv product_list_from_mysql.csv";
        $result=shell_exec ( $cmd );
        
        echo "<p>$result</p>";
      
        $count=1;
        $myfile = fopen("gernal_table_reorganized.csv", "r") or die("Unable to open file!");
        echo "<table id=\"mt\" style=\"width:100%\" border=\"1\" cellpadding=\"5\">";
        echo "<thead>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">訂單編號</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">訂購方式</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">訂購人姓名</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">訂購人電話</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">收件人姓名</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">收件人電話</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">寄送地址</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">產品編號</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">總數量</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">商品總價小計</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">備註</td>";
        echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">銷貨單</td>";
        echo "</thead>";
        while( !feof($myfile) ) 
        {
            $tmp_text = fgets($myfile);
            if ($tmp_text == "") {}
            else
            {
                $str=explode( ",",  $tmp_text ) ;
                $id = $str[0];
                
                echo "<tr>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:80%\">" . $str[0]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $str[2]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $str[3]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:70%\">" . $str[4]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $str[6]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:70%\">" . $str[7]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:50%\">" . $str[9]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:80%\">" . $str[12]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $str[13]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $str[14]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:50%\">" . $str[20]. "</td>";
                echo "<td><a href='order_list/$id.html' class='button' >view</a></td>";
                echo "</tr>";
                #echo "<option value=\"$product_id\">$text</option>";
                ++$count;
                $sql = "INSERT IGNORE INTO `gernal_table`
                (訂單編號,訂單日期,訂購方式,
                訂購人姓名,訂購人電話,訂購人信箱,
                收件人姓名,收件人電話,收件人信箱,
                寄送地址,取貨方式,到貨時間,產品編號,總數量,
                商品總價小計,折扣後總計,物流費用,應收款,收款情形,備註,discount)
                VALUES ('$str[0]', '$str[1]', '$str[2]',
                '$str[3]', '$str[4]', '$str[5]',
                '$str[6]', '$str[7]', '$str[8]',
                '$str[9]','$str[10]', '$str[11]', '$str[12]', '$str[13]',
                '$str[14]', '$str[15]', '$str[16]', '$str[17]', '$str[18]', '$str[19]', '$str[20]')";
                $result = $mysqli->query($sql);

            }
        }
        
        fclose($myfile);
        $mysqli->close();
      
      
      
      ?>



</div>
</body>
</html>


