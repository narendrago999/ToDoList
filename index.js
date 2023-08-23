"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tasks = [];
var taskName = document.getElementById("taskName");
var checkdiv = document.getElementById("item-add");
var c = 1;
function addTask() {
    console.log(tasks);
    var appendtask = document.createElement("div");
    appendtask.className = "list";
    var taskNameVaue = taskName.value;
    var f = 0;
    for (var i = 0; i <= tasks.length; i++) {
        if (tasks[i] == taskNameVaue.trim()) {
            f = 1;
            break;
        }
    }
    if (f == 1) {
        alert("task name already exist");
    }
    else {
        appendtask.innerHTML = "<span class=\"checkbox\" id=\"checkbox\">\n        <input type=\"checkbox\" id= ".concat("checked" + c, " name=").concat("optionbox" + c, "  onchange=\"checkValue(this.id,this.name,this.class)\" class=\"checkbox\">\n        </span>\n        <span class=\"task-added\">\n        <p class=\"tt\" >").concat(taskNameVaue, "</p>\n        </span>\n        <span class=\"status\">\n        <select  id=\"").concat("optionbox" + c, "\" name= ").concat("checked" + c, " onchange=\"selectValue(this.id,this.name)\">\n        <option value=\"To Do\">To Do</option>\n        <option value=\"In Progress\">In Progress</option>\n        <option value=\"Completed\">Completed</option>\n        </select>\n        </span>\n        <span class=\"remove-task\">\n        <button onclick=\"removeTask(this)\">X</button>\n        </span>");
        tasks.push(taskNameVaue);
        checkdiv.appendChild(appendtask);
        c += 1;
    }
}
taskName.addEventListener("keypress", function (event) {
    var _a;
    if (event.key === "Enter") {
        event.preventDefault();
        (_a = document.getElementById("enterButton")) === null || _a === void 0 ? void 0 : _a.click();
    }
});
function removeTask(task) {
    var _a, _b, _c;
    //   if (task.parentElement?.parentElement != null)
    var taskDel = (_a = task.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    var textp = taskDel.querySelector(".tt");
    console.log(textp);
    var textValue = textp.textContent || textp.innerText;
    console.log(textValue);
    for (var i = 0; i <= tasks.length; i++) {
        if (tasks[i] == textValue) {
            tasks.splice(tasks.indexOf(textValue));
            break;
        }
    }
    (_c = (_b = task.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
}
function selectValue(id, name) {
    var _a;
    var optionbox = document.getElementById(id);
    var checkbox = document.getElementById(name);
    var parent = (_a = optionbox.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    var p = parent.querySelector(".tt");
    var optionboxValue = optionbox.value;
    if (optionboxValue == "Completed") {
        checkbox.checked = true;
        p.style.textDecoration = "line-through";
    }
    else {
        checkbox.checked = false;
        p.style.textDecoration = "none";
    }
}
function checkValue(id, name) {
    var _a;
    var optionbox = document.getElementById(name);
    var checkbox = document.getElementById(id);
    var parent = (_a = optionbox.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    var p = parent.querySelector(".tt");
    if (checkbox.checked == true) {
        optionbox.value = "Completed";
        p.style.textDecoration = "line-through";
    }
    else {
        optionbox.value = "To Do";
        p.style.textDecoration = "none";
    }
}
function searchTask(id) {
    var search = document.getElementById(id);
    var searchValue = search.value;
    var out = document.getElementById("item-add");
    var allDiv = out.querySelectorAll("div");
    console.log(allDiv.length);
    for (var i = 0; i <= allDiv.length; i++) {
        console.log(allDiv[i]);
        var taskElement = allDiv[i].querySelector(".tt");
        // console.log(taskElement);
        var taskElementValue = taskElement.textContent || taskElement.innerText;
        if (taskElementValue.indexOf(searchValue) > -1) {
            allDiv[i].style.display = "";
        }
        else {
            allDiv[i].style.display = "none";
        }
    }
}
