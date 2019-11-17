console.log('js');

const companyEmployees = [];
let monthlyTotal = 0;
const monthlyMax = 20000;

$(document).ready(init);

function init() {
    enable();
}

function enable() {
    $('.js-submit').on('click', submitEmployee);
    $('.js-employeeInfo').on('click', '.js-delete-btn', deleteEmployee);
}

function submitEmployee(event) {
    event.preventDefault();

    const employeeObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        empNumber: $('#empNumber').val(),
        jobTitle: $('#jobTitle').val(),
        salary: parseInt($('#salary').val()),
    };

    // const employeeObject = {};
    // const valueArray = $('#employeeForm').serializeArray();
    // for(let item of valueArray) {
    //      employeeObject[item.name] = item.value;   
    // };

    addToSpreadsheet(employeeObject);
    resetInputs();
}

function addToSpreadsheet(employee) {
    companyEmployees.push(employee);
    render();
}

function resetInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
}

function render() {
    $('.js-employeeInfo').empty();
    monthlyExpenses();
    

    for(let i = 0; i < companyEmployees.length; i++) {
        const employee = companyEmployees[i];

        $('.js-employeeInfo').append(`
            <tr data-id="${i}">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.empNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.salary}</td>
                <td><button class="js-delete-btn">Delete</button></td>
            </tr>
        `);
    }

    if(monthlyTotal < monthlyMax) {
        $('.js-totalMonthly').text(`Monthly Total: $${monthlyTotal}`);
    } else if(monthlyTotal >= monthlyMax) {
        $('.js-totalMonthly').text(`Monthly Total: $${monthlyTotal}`).css('background-color', 'rgb(221, 61, 61)');
    } 
}

function monthlyExpenses() {
    monthlyTotal = 0;
    for(let entry of companyEmployees) {
        monthlyTotal += (entry.salary / 12).toFixed(2);
    }
}

function deleteEmployee() {
    const id = $(this).parent().data('id');
    companyEmployees.splice(id, 1);
    render();
}