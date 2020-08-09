function copy(element) {
  let range = document.createRange();
  range.selectNodeContents(element);
  let selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  let originalText = element.innerText
  element.innerText = "Copied!";
  selection.removeAllRanges();
  setTimeout(reset, 2500);
  function reset() {
    element.innerText = originalText
    }
}
