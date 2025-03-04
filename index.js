console.log("Hello JS! :D");

//Might be a result of a Get-Request
const data = [
  { firstname: "John", lastname: "Doe", email: "John@example.com" },
  { firstname: "Mary", lastname: "Moe", email: "Mary@example.com" },
  { firstname: "July", lastname: "Doe", email: "July@example.com" },
  { firstname: "July", lastname: "Doe", email: "July@example.com" },
];

const showData = () => {
  if (!document.getElementById("dynamicTable")) {
    //Creating the Table
    const table = document.createElement("table"); //<table></table>
    table.id = "dynamicTable"; //<table id="dynamicTable"></table>
    table.classList.add("table", "table-striped"); //<table id="dynamicTable" class="table table-striped"> </table>

    //Creating Table Headline
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headerText = ["Firstname", "Lastname", "Email"];

    headerText.forEach((headertext) => {
      const th = document.createElement("th");
      th.textContent = headertext;

      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    //Creating Table body
    const tbody = document.createElement("tbody");

    data.forEach((person) => {
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      td1.textContent = person.firstname;
      tr.appendChild(td1);

      const td2 = document.createElement("td");
      td2.textContent = person.lastname;
      tr.appendChild(td2);

      const td3 = document.createElement("td");
      td3.textContent = person.email;
      tr.appendChild(td3);

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    const dataTableSection = document.getElementById("data-table");
    dataTableSection.appendChild(table);
  }else{
    console.log("Table is already present!")
  }
};

const hideTable = () => {
    console.log("Hide function has been triggered!");

    const table = document.getElementById("dynamicTable");

    if(table){
        table.remove();
    }
};
