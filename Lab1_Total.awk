#!/user/bin/awk -f

BEGIN {
    FS = ","
};


{OFS = "\t"};


BEGIN{ print "The total ranking is in the last column" }

{print $7 "\t " $6 "\t" $5 "\t" $4 "\t"   $8 + $9 +$10 + $11+ $12 +$13 + $14+$15+$16+$17+$18+$19+$20+$21+$22+$23+$24+$25+$26+$27+$28+$29+$30+$31+$32 }
