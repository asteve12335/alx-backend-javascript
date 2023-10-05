// main.ts

// step 1: Define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// step 2: Create 2 students and an array
const student1: Student = {
    firstName: "Anock",
    lastName: "Steve",
    age: 25,
    location: "New York"
};

const student2: Student = {
    firstName: "Benjamin",
    lastName: "Toad",
    age: 23,
    location: "Chicago"
};

const studentsList: Student[] = [student1, student2]

// step 3: Render table and append rows
function renderTable() {
    const table = document.createElement("table");
    table.innerHTML = "<tr><th>First Name</th><th>Location</th></tr>";

    studentsList.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    document.body.appendChild(table);
}

// step 4: Call the renderTable function to display the table
renderTable();