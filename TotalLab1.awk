#!/usr/bin/awk -f
BEGIN { FS = "," }
{
   for ( i = 8; i <= NF; i++) {
            total += $i
  }
} 

