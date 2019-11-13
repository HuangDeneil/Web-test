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
  <a href="index.html" class="button" style="font-family:微軟正黑體;text-transform:initial;font-size:150%">Home</a>
  <h1 style="font-family:微軟正黑體;text-transform:initial;font-size:300%">訂單整理系統更新<span>Loacl web update system</span><h1></h1></br></h1>
</div>



<div id="wrapper" class="container" >
<?php 

    $cmd ="update.sh";
    $result=shell_exec ( $cmd );
    echo "$result"


?>

</div>
</body>
</html>
