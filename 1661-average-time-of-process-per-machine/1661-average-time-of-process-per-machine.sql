SELECT
    a.machine_id,
    ROUND(AVG(b.timestamp       - a.timestamp      ), 3) AS processing_time
FROM Activity AS a
JOIN Activity AS b
    ON a.machine_id = b.machine_id
    AND a.process_id = b.process_id
Where
a.activity_type = 'start'
  AND b.activity_type = 'end'
GRoup by  a.machine_id