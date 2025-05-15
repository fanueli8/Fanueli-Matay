let completedTasks = 1;

function updateProgress() {
  const totalTasks = 5;
  const percent = (completedTasks / totalTasks) * 100;
  document.getElementById("progress").innerText = `${completedTasks}/5 completed`;
  document.getElementById("progress-bar-fill").style.width = percent + "%";
}

function completeTask(taskId) {
  if (completedTasks < taskId + 1) {
    completedTasks++;
    updateProgress();
    alert("Task completed!");
  } else {
    alert("Already completed!");
  }
}

// Sidebar menu functionality
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    alert("Switched to: " + item.textContent);
  });
});
