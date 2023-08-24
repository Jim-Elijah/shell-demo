#!/bin/bash

awk '{print "filename:" FILENAME " argc:" ARGC " lineNo:" NR " columns:" NF " lineContent:"$0}' ./1.txt
