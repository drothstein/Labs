.mode csv
.headers on
.output extract1.csv

select dense_rank() over(order by total desc) as ranking,
cars_total.car_id, total, year, make, model
from cars_total inner join cars on cars.car_id = cars_total.car_id;
.output