#!/bin/env bash

#git remote add web git@github.com:HuangDeneil/Web-test.git
#git pull web master

#;;;

#retval=$?
#if [ $retval -eq 0 ]; then
#    echo "<h1>service started by script</h1>"
#else
#    echo "<h1>not able to start service </h1>"
#fi



# A slicker error handling routine

# I put a variable in my scripts named PROGNAME which
# holds the name of the program being run.  You can get this
# value from the first item on the command line ($0).

PROGNAME=$(basename $0)

error_exit()
{

#	----------------------------------------------------------------
#	Function for exit due to fatal program error
#		Accepts 1 argument:
#			string containing descriptive error message
#	----------------------------------------------------------------


	echo "<p>${PROGNAME}: ${1:-"Unknown Error"}</p>" 1>&2
	exit 1
}

# Example call of the error_exit function.  Note the inclusion
# of the LINENO environment variable.  It contains the current
# line number.

echo "<p>$LINENO Example of error with line number and message</p>"
echo "<p>$LINENO: An error has occurred.</p>"
error_exit "<p>$LINENO: An error has occurred.</p>"


