//Created variables and used querySelector to link it to my HMTL IDs that I select.
window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list_elements = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); //When implemented it stops it from refreshing page when submitting form

    const task = input.value;

    //Added validation so the user has to input a task and if not they will be alerted to do so
    if (!task) {
      alert("Add your personal task");
      return;
    }

    const taskJava = document.createElement("div"); //created the element div to the page
    taskJava.classList.add("task"); //gives the div a class of task

    const task_content = document.createElement("div");
    task_content.classList.add("content");

    taskJava.appendChild(task_content);

    const task_input = document.createElement("input"); //created the element input to the page
    task_input.classList.add("text"); //gives the input a class of text
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly"); //Makes the input unable to be eddited unless you press the edit butto

    task_content.appendChild(task_input);

    const task_actions = document.createElement("div"); //created the element div to the page
    task_actions.classList.add("actions"); //gives the div a class of actions

    const task_edit = document.createElement("button"); //created the element div to the page
    task_edit.classList.add("edit"); //gives the div a class of edit
    task_edit.innerHTML = "Edit";

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete"); //gives the div a class of delete
    task_delete.innerHTML = "Delete";

    task_actions.appendChild(task_edit);
    task_actions.appendChild(task_delete);

    taskJava.appendChild(task_actions);

    list_elements.appendChild(taskJava);

    input.value = "";

    //Adds event handler to the document with addEventListener for when the user clicks the button
    task_edit.addEventListener("click", (e) => {
      if (task_edit.innerText.toLowerCase() == "edit") {
        task_edit.innerText = "Save"; //Swaps to save once you press the edit button
        task_input.removeAttribute("readonly");
        task_input.focus();
      } else {
        task_edit.innerText = "Edit";
        task_input.setAttribute("readonly", "readonly");
      }
    });

    task_delete.addEventListener("click", (e) => {
      list_elements.removeChild(taskJava); //deletes the task from the page
    });
  });
});
