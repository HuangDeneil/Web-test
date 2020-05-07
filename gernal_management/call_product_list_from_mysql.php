<?php header("Content-Type:text/html; charset=utf-8"); ?>

<html>
<head>
<title>php mysql testing</title>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Open+Sans+Condensed:300,700" rel="stylesheet" />
<link href="../default.css" rel="stylesheet" type="text/css" media="all" />
<link href="../fonts.css" rel="stylesheet" type="text/css" media="all" />
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

<!--- 
######################################################################
###################*####*#####***#####*****######*****################
###################*####*###*#####*########*#####*####*###############
###################******##*********###*****#####*#####*##############
###################*####*###*#########*####**####*###*################
###################*####*####*****######***##*###****#################
######################################################################
--->
<body>
<div id="logo" class="container">
  <a href="../index.html" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:200%">Back</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統<span>Loacl web system</span><h1>Product list</h1></br></h1>
</div>

<!--- Table region  --->



<div id="wrapper" class="container">
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
        $result = $mysqli->query("SELECT * FROM product_list");

        if ($result->num_rows > 0) {
            // output data of each row

            echo "<table id=\"mt\" style=\"width:100%\" border=\"1\" cellpadding=\"5\">";
            echo "<thead>";
            echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">產品名稱</td>";
            echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">產品編號</td>";
            echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">產品細節</td>";
            echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">單價</td>";
            echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">折抵$30</td>";
            echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:150%\">折抵$60</td>";
            echo "</thead>";

            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $row["product"]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $row["product_id"]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\">" . $row["product_detail"]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\"> \$" . $row["price"]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\"> \$" . $row["discount_price30"]. "</td>";
                echo "<td style=\"font-family:微軟正黑體;text-transform:initial;font-size:100%\"> \$" . $row["discount_price60"]. "</td>";
                echo "</tr>";

            }
            
            echo "</table>";
           # fclose($myfile);
        } else {
            echo "0 results";
        }

        $mysqli->close();
      ?>
</div>
</body>
</html>
