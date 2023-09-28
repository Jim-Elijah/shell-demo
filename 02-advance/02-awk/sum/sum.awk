BEGIN{ sum=0; } { print $1; sum+=$1 } END{ print "sum: "; print sum}
