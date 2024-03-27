const fontFamilySelect = document.getElementById('fontFamily');
const fontStyleIcons = document.querySelectorAll('.fontStyleIcon');
const contentDiv = document.getElementById('content');

// Array of commonly available font families
const fontFamilies = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Verdana, sans-serif",
  "Georgia, serif",
  "Times New Roman, serif",
  "Courier New, monospace",
  "Arial Black, sans-serif",
  "Comic Sans MS, cursive",
  // Add more fonts as needed
];

// Populate the font family dropdown
fontFamilies.forEach(fontFamily => {
  const option = document.createElement('option');
  option.textContent = fontFamily;
  option.value = fontFamily;
  fontFamilySelect.appendChild(option);
});

fontStyleIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const selectedStyle = this.getAttribute('data-style');
    applyFontStyle(selectedStyle);
  });
});

function applyFontStyle(style) {
  if (style === 'bold') {
    contentDiv.style.fontWeight = contentDiv.style.fontWeight === 'bold' ? 'normal' : 'bold';
  } else if (style === 'italic') {
    contentDiv.style.fontStyle = contentDiv.style.fontStyle === 'italic' ? 'normal' : 'italic';
  } else if (style === 'underline') {
    contentDiv.style.textDecoration = contentDiv.style.textDecoration === 'underline' ? 'none' : 'underline';
  }
}