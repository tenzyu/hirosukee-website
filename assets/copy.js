function copy(element) {
  let range = document.createRange();
  range.selectNodeContents(element);
  let selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
}
