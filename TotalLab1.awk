#!/usr/bin/awk -f
BEGIN { 
FS = ",";
}

{
   total = 0;
   for ( i = 8; i <= NF; i++) {
            total += $i;
  }
   printf("%d,%d,%s,%s,%d\n", $7, $4, $5, $6, total);
}