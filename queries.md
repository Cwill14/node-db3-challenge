# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    select p.ProductName, c.CategoryName 
    from Products as p 
    join Categories as c 
	    on p.CategoryID = c.CategoryID;


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    select o.OrderID, s.ShipperName from Orders as o join Shippers as s on o.ShipperID = s.ShipperID where o.OrderDate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    select p.ProductName, od.Quantity 
    from Products as p 
    join OrderDetails as od 
	    on p.ProductID = od.ProductID 
        where od.OrderID = '10251' 
    order by p.ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    select o.OrderID, cu.CustomerName, e.LastName 
    from Orders as o 
    join Customers as cu, 
    Employees as e 
        on o.CustomerID = cu.CustomerID 
        where o.EmployeeID = e.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 