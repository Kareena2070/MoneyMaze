function loginUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (name && age && email) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';

        document.querySelector('.hi-text').style.display = 'block';
        document.querySelector('.star').style.display = 'block';
        document.querySelector('.start-line').style.display = 'block';
        document.querySelector('.finance-btn').style.display = 'inline-block';
    } else {
        alert('Please fill all fields!');
    }
}
function loginUser() {
    let age = document.getElementById("age").value;

    if (age === "" || isNaN(age)) {
        alert("Please enter a valid age.");
        return;
    }

    age = parseInt(age);

    if (age <= 12) {
        window.location.href = "1.1.html";  // Redirect to 1.1.html for kids under 12
    } else {
        window.location.href = "game1.html";  // Redirect to game1.html for older kids
    }
}

// function showFinanceInfo() {
//     const info = `Finance is the management of money, including activities like earning, saving, investing, and spending wisely.

// Types of Finance:
// 1. Personal Finance - Managing individual budgets and savings.
// 2. Corporate Finance - Managing company finances.
// 3. Public Finance - Government revenue and expenditures.

// 💡 Remember, good financial habits start young!`;
//     alert(info);
// }

// Hide main content initially
document.getElementById('main-content').style.display = 'none';