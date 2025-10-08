
const addUser = () => {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const messageBox = document.getElementById('messageBox');
  const outputContainer = document.getElementById('outputContainer');

  // Resetting the message box before each add
  messageBox.style.display = "none";
  messageBox.textContent = "";
  messageBox.className = "message";
  
  if (!name || !profession || !age) {
    // Showing error message
    messageBox.textContent = "Error :Please Make sure All the field before adding in an emplyee";
    messageBox.classList.add("error");
    messageBox.style.display = "block";
    return;
  }

  // Create a new entry div
  const entry = document.createElement('div');
  entry.classList.add('entry');

  const info = document.createElement('div');
  info.classList.add('info');
  
  info.innerHTML = `
    <p> ${name}</p>
    <p> ${profession}</p>
    <p> ${age}</p>
  `;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add('delete-btn');

  deleteBtn.onclick = function() {
    outputContainer.removeChild(entry);
  }

  entry.appendChild(info);
  entry.appendChild(deleteBtn);

  outputContainer.appendChild(entry);

  //Showing success message if all the fields have data
  messageBox.textContent = "Success : Message Added";
  messageBox.classList.add("success");
  messageBox.style.display = "block";

  // Clear input fields after adding
  document.getElementById('infoForm').reset();
}




