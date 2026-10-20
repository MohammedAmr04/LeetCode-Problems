/* Write your T-SQL query statement below */
WITH WeatherData AS (
    SELECT *,
           LAG(temperature) OVER (
               ORDER BY recordDate
           ) AS PrevTemper,
           LAG(recordDate) OVER (
               ORDER BY recordDate
           ) AS PrevDate
    FROM Weather
)
select id 
from WeatherData
WHERE temperature > PrevTemper AND DATEDIFF( day , PrevDate,recordDate) = 1;
