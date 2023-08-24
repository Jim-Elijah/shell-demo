#!/bin/bash

awk 'BEGIN{ sum=0; } { print $1; sum+=$1 } END{ print "sum: "; print sum }' ./1.txt
# cat ./1.txt | awk 'BEGIN{ sum=0; } { print $1; sum+=$1 } END{ print "sum: "; print sum }'
