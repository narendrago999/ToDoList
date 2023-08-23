export {};
var tasks: string[] = [];
var taskName = document.getElementById("taskName") as HTMLInputElement;
var checkdiv = document.getElementById("item-add") as HTMLDivElement;

var c = 1;
function addTask() {
    console.log(tasks);
    var appendtask = document.createElement("div") as HTMLDivElement;
    appendtask.className = "list";
  var taskNameVaue:string = taskName.value;
  var f:number = 0;
  for (let i:number = 0; i <= tasks.length; i++) {
    if (tasks[i] == taskNameVaue.trim()) {
      f = 1;
      break;
    }
  }
  if (f == 1) {
    alert("task name already exist");
  } else {
    appendtask.innerHTML = `<span class="checkbox" id="checkbox">
        <input type="checkbox" id= ${"checked" + c} name=${
      "optionbox" + c
    }  onchange="checkValue(this.id,this.name,this.class)" class="checkbox">
        </span>
        <span class="task-added">
        <p class="tt" >${taskNameVaue}</p>
        </span>
        <span class="status">
        <select  id="${"optionbox" + c}" name= ${
      "checked" + c
    } onchange="selectValue(this.id,this.name)">
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        </select>
        </span>
        <span class="remove-task">
        <button onclick="removeTask(this)">X</button>
        </span>`;
    tasks.push(taskNameVaue);
    checkdiv.appendChild(appendtask);
    c += 1;
  }
}
taskName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enterButton")?.click();
  }
});

function removeTask(task: HTMLButtonElement) {
//   if (task.parentElement?.parentElement != null)
const taskDel = task.parentElement?.parentElement as HTMLDivElement
const textp = taskDel.querySelector(".tt") as HTMLParagraphElement
console.log(textp);

const textValue = textp.textContent || textp.innerText
console.log(textValue);

for (let i:number = 0; i <= tasks.length; i++) {
    if (tasks[i] == textValue) {
        tasks.splice(tasks.indexOf(textValue))
        break;
    }
}
task.parentElement?.parentElement?.remove();
}

function selectValue(id: string, name: string) {
  const optionbox = document.getElementById(id) as HTMLSelectElement;
  const checkbox = document.getElementById(name) as HTMLInputElement;
  const parent = optionbox.parentElement?.parentElement as HTMLDivElement;

  const p = parent.querySelector(".tt") as HTMLParagraphElement;

  const optionboxValue = optionbox.value;

  if (optionboxValue == "Completed") {
    checkbox.checked = true;

    p.style.textDecoration = "line-through";
  } else {
    checkbox.checked = false;
    p.style.textDecoration = "none";
  }
}

function checkValue(id: string, name: string) {
  var optionbox = document.getElementById(name) as HTMLSelectElement;
  var checkbox = document.getElementById(id) as HTMLInputElement;
  const parent = optionbox.parentElement?.parentElement as HTMLDivElement;

  const p = parent.querySelector(".tt") as HTMLParagraphElement;
  if (checkbox.checked == true) {
    optionbox.value = "Completed";
    p.style.textDecoration = "line-through";
  } else {
    optionbox.value = "To Do";
    p.style.textDecoration = "none";
  }
}
function searchTask(id) {
  const search = document.getElementById(id) as HTMLInputElement;
  var searchValue: string = search.value;
  const out = document.getElementById("item-add") as HTMLDivElement;
  const allDiv = out.querySelectorAll("div");
  console.log(allDiv.length);

  for (let i = 0; i <= allDiv.length; i++) {
    console.log(allDiv[i]);

    var taskElement = allDiv[i].querySelector(".tt") as HTMLParagraphElement;
    // console.log(taskElement);

    var taskElementValue = taskElement.textContent || taskElement.innerText;
    if (taskElementValue.indexOf(searchValue) > -1) {
      allDiv[i].style.display = "";
    } else {
      allDiv[i].style.display = "none";
    }
  }
}
