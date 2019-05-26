#!/bin/bash
# export environment variables in a file
printenv | grep -v “no_proxy” >> /etc/environment
cron -f

