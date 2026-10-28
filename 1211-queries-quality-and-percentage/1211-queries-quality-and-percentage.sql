SELECT query_name,
	ROUND(AVG(CAST(rating  as decimal)  / position),2) as quality,
	ROUND(SUM(CASE WHEN rating <3 THEN 1.0 else 0 END)/ COUNT(*) * 100.0,2) as poor_query_percentage 

FROM Queries
GROUP BY query_name
