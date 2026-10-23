/* Write your T-SQL query statement below */
select * 
from cinema
where cinema.description != 'boring' and cinema.id%2 !=0 
ORDER by rating DESC