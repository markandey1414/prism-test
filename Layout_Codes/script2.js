document.getElementById('applyStylesBtn').addEventListener('click', applyStyles);

function applyStyles() {
  var content = document.getElementById('content');
  var fontFamily = document.getElementById('fontFamily').value;
  var fontSize = document.getElementById('fontSize').value + 'px';
  var bold = document.getElementById('boldCheckbox').checked ? 'bold' : 'normal';
  var italic = document.getElementById('italicCheckbox').checked ? 'italic' : 'normal';
  var underline = document.getElementById('underlineCheckbox').checked ? 'underline' : 'none';
  var textColor = document.getElementById('textColor').value;
  var bgColor = document.getElementById('bgColor').value;

  content.style.fontFamily = fontFamily;
  content.style.fontSize = fontSize;
  content.style.fontWeight = bold;
  content.style.fontStyle = italic;
  content.style.textDecoration = underline;
  content.style.color = textColor;
  content.style.backgroundColor = bgColor;
}