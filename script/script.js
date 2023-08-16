function updateResultLink(url) {
  let a = document.getElementById("result-link");
  a.href = url;
  a.innerText = url;
}

function getInputValueAndUpdateResult() {
  let schema = document.getElementById("input-schema").value;
  let path = document.getElementById("input-path").value;
  let queryParams = document.getElementById("input-query-param").value;

  updateResultLink(`${schema}://${path}?${queryParams}`);
}

function onInputChanged(e) {
  getInputValueAndUpdateResult();
}

function registerInputChange() {
  document
    .getElementById("input-schema")
    .onkeyup = onInputChanged;
  document
    .getElementById("input-path")
    .onkeyup = onInputChanged;
  document
    .getElementById("input-query-param")
    .onkeyup = onInputChanged;
}

getInputValueAndUpdateResult();
registerInputChange();
