const container = document.querySelector('.container');
const flexDirectionSelect = document.getElementById('flex-direction');
const justifyContentSelect = document.getElementById('justify-content');
const alignItemsSelect = document.getElementById('align-items');

// Initialize with default values
applyStyles();

// Event listeners for select elements
flexDirectionSelect.addEventListener('change', applyStyles);
justifyContentSelect.addEventListener('change', applyStyles);
alignItemsSelect.addEventListener('change', applyStyles);

function applyStyles() {
  container.style.flexDirection = flexDirectionSelect.value;
  container.style.justifyContent = justifyContentSelect.value;
  container.style.alignItems = alignItemsSelect.value;
}