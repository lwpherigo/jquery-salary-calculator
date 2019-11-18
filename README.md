# Totally a JQuery Calc-u-l8er

For this project, I created a calculator that can intake an employees name, employee number, job title and salary, and then calculate a companies monthly expenses for paying their employees.

## Description

In this project there were a couple tricky problems I had to solve. 
1. The system needed to know how many employees there were so as employee information was entered, it was put into any array called companyEmployees.
2. The page then needs to take the information in the array and post it on the view. To do this I created a for loop to go through the array and using JQuery, made a table of the information given. 
3. After that it needed to take the salary information and calculate the amount of money that was spent paying employees monthly. For this I create a function that sets the monthlyTotal to zero, loops through the array to get the salary information and then divides it by 12.
4. If the monthly amount is more than twenty thousand there needs to be a red background that appears. To make this happen, I put a global monthlyMax variable and set it to 20000. I then put an if statement at the end of the render function that sets the background color to red if the monthlyTotal >= monthlyMax.