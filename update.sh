#!/bin/env bash

#git remote add web git@github.com:HuangDeneil/Web-test.git
#git pull web master

;;;

retval=$?
if [ $retval -eq 0 ]; then
    echo "<h1>service started by script</h1>"
else
    echo "<h1>not able to start service </h1>"
fi





