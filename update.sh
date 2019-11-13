#!/bin/env bash

git remote add web git@github.com:HuangDeneil/Web-test.git
git pull web master

retval=$?
if [ $retval -eq 0 ]; then
    echo "service $i  started by script"
else
    echo "not able to start service $i"
fi





