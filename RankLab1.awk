#!/usr/bin/awk -f
BEGIN {
    FS = ",";
    rank = 0;
}
{

    
    if (current_car_total != $5){
        rank++
    }
    

    printf("%d,%d,%d,%s,%s,%d \n", rank,$1, $2, $3, $4, $5)
    current_car_total = $5
}