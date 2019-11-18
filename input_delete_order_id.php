
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

<div id="logo" class="container">
  <a href="index.html" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:120%">Home</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統<span>Loacl web system</span><h1 >Order deletion</h1></h1>
</div>



<!--- Table region  --->
<div id="wrapper" class="container">
    <form name="table_value" method="POST" action="delete_query.php">
    <p><span class="error">* require value</span><p>
    <table>
        <tr>
            <td>輸入刪除訂單編號 : <input type="text" name="order_id" rows="2" cols="30"></td>
            <td><p><input type='submit' value='送出'> <input type='reset' value='清除'></p></td>
        </tr>
    </table>
    <svg height="7" width="1200"><line x1="0" y1="0" x2="1300" y2="0" style="stroke:rgb(0,150,255);stroke-width:2" /></svg>

</div>
</body>
</html>






