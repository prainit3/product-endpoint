# Project Layout

Individual elements in the project were broken up into as many separate components as needed, so that their functions may be used interchangably elsewhere.

# Weaknesses/Bugs

Code layout is potentially not set up for invalid parameters. There is currently no logic to avoid adding duplicate products.

# Extensions/Enhancements/Maintenance

Other than having full implementations of CRUD functions, the API could have additional parameters and features like validation. For example, preventing a price from having a negative cost. You could also do more advanced conversions, like having a list of locations in a form, and converting it into a location_id for the database. On a grander scale, you could implement a full API route for customers that would factor in things like recent orders, regional availability, etc.

# Missing Content

Since I used a json-server for this, the routing would be handled with the Angular RouterModule. I did not implement the express routing for this example.
One improvement I would make to the sample code would be to send messages to a part of the database, rather than in the console.

# Example SQL Statements

example Get request:
SELECT * FROM Products
WHERE Price <= 5
ORWHERE Size = 'S';

example Add request:
INSERT INTO Products (name, cost, size, location_id, available)
VALUES ('Ice Cream', '1.95', 'S', '22', true);

example Delete request:
DELETE FROM Products
WHERE id = '3'