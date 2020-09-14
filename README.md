## This is the PHP base web service for product database and order output
---
#### basis LAMP (Linux Apache MySQL PHP/perl)

<br>

### basic environmnet
Program | version
-|-
PHP    | 7.3.20-1
perl   | 5.26
MySQL  | 15.1
Ubuntu | 18.04.1
Apache | 2.4.29

<br>

# Installation :

(1) cloning this repo : 

```bash
$ git clone git@github.com:HuangDeneil/Web-test.git
```

(2) mvove the folder into `/var/www/html/`

```bash
sudo mv Web-test /var/www/html/
```


(3) Change the folder holder (Main folder(Web-test) & gernal_management,gernal_management,order_input,order_list,perl)

```bash
hudeneil in ubuntu-web at /var/www/html/
$ ls -hal
total 12K
drwxrwxr-x  3 hudeneil hudeneil 4.0K Sep 14 08:07 .
drwxrwxr-x  7 hudeneil hudeneil 4.0K Sep 14 07:58 ..
drwxrwxr-x 11 hudeneil hudeneil 4.0K Sep 14 08:08 Web-test

```

```bash

$ sudo chown www-data:www-data Web-test

$ ls -hal
total 12K
drwxrwxr-x  3 hudeneil hudeneil 4.0K Sep 14 08:07 .
drwxrwxr-x  7 hudeneil hudeneil 4.0K Sep 14 07:58 ..
drwxrwxr-x 11 www-data www-data 4.0K Sep 14 08:08 Web-test


```


## Folder structure

```bash

hudeneil in ubuntu-web at /var/www/html/
08:26:36 $ tree 
.
└── Web-test
    ├── default.css
    ├── fonts
    │   ├── FontAwesome.otf
    │   ├── fontawesome-social-webfont.eot
    │   ├── fontawesome-social-webfont.svg
    │   ├── fontawesome-social-webfont.ttf
    │   ├── fontawesome-social-webfont.woff
    │   ├── fontawesome-webfont.eot
    │   ├── fontawesome-webfont.svg
    │   ├── fontawesome-webfont.ttf
    │   └── fontawesome-webfont.woff
    ├── fonts.css
    ├── gernal_management
    │   ├── call_product_list_from_mysql.php
    │   ├── delete_query.php
    │   ├── deletion_upload.php
    │   ├── general_table.html
    │   ├── get_gernal_table.php
    │   ├── get_parial_gernal_table.php
    │   ├── input_delete_order_id.php
    │   └── manage.html
    ├── images
    │   ├── bg01.png
    │   ├── pic01.jpg
    │   ├── pic02.jpg
    │   ├── pic03.jpg
    │   ├── pic04.jpg
    │   ├── pic05.jpg
    │   └── pic06.jpg
    ├── index.html
    ├── javascript
    │   └── jquery-1.8.3.js
    ├── order_input
    │   ├── order_process.php
    │   ├── query.php
    │   └── upload.php
    ├── order_list
    ├── perl
    │   ├── gernal_table_process.pl
    │   ├── get_date_info.pl
    │   ├── get_order_id_and_deleted.pl
    │   └── get_sql.pl
    └── README.md

8 directories, 36 files

```






