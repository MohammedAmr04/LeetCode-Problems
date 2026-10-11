/* Write your T-SQL query statement below */
SELECT 
	Visits.customer_id,
	count(customer_id) as count_no_trans

FROM Visits
left Join Transactions
ON Visits.visit_id = Transactions.visit_id
Group by Visits.customer_id,transaction_id
having Transactions.transaction_id is null