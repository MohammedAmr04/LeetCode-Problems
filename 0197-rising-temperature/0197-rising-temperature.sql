SELECT Today.id
FROM Weather as Today
JOIN Weather as Yes 
on DATEDIFF(day,Yes.recordDate,Today.recordDate)=1
WHERE today.temperature > Yes.temperature;