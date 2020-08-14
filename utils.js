function gel(id) {
  return document.getElementById(id);
}

function gelc(classname) {
  return document.getElementsByClassName(classname);
}

function crel(type) {
  return document.createElement(type);
}

function doc(container, element) {
  container.appendChild(element);
}

function maximize(element) {
  element.style.left = '0';
  element.style.top = '0';
  element.style.width = '100%';
  element.style.height = '100%';
}

function minimize(element) {
  element.style.left = '50%';
  element.style.top = '50%';
  element.style.width = '0';
  element.style.height = '0';
}

function hideView(backView) {
  minimize(backView);
  setTimeout(() => { backView.remove(); }, 200);
}

function appAlert(title, text) {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  backView.setAttribute('tabindex', '0');
  backView.addEventListener('keypress', e => {
    if (e.keyCode === 27) {
      hideView(backView);
    }
  });

  const alertPanel = crel('div');
  alertPanel.className = 'alertPanel';

  const alertTitle = crel('div');
  alertTitle.className = 'alertTitle';
  alertTitle.textContent = title;

  const alertText = crel('div');
  alertText.className = 'alertText';
  alertText.textContent = text;

  const okAlertButton = crel('div');
  okAlertButton.className = 'okAlertButton';
  okAlertButton.textContent = 'OK';
  okAlertButton.addEventListener('click', () => {
    hideView(backView);
  });

  doc(alertPanel, alertTitle);
  doc(alertPanel, alertText);
  doc(alertPanel, okAlertButton);
  doc(backView, alertPanel);
  maximize(backView);
}

function appConfirm(callBack, args, title, text) {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  backView.setAttribute('tabindex', '0');
  backView.addEventListener('keypress', e => {
    if (e.keyCode === 27) {
      hideView(backView);
    }
  });

  const alertPanel = crel('div');
  alertPanel.className = 'alertPanel';

  const alertTitle = crel('div');
  alertTitle.className = 'alertTitle';
  alertTitle.textContent = title;

  const alertText = crel('div');
  alertText.className = 'alertText';
  alertText.textContent = text;

  const confirmButtons = crel('div');
  confirmButtons.className = 'confirmButtons';

  const yesButton = crel('div');
  yesButton.className = 'okAlertButton';
  yesButton.textContent = 'Yes';
  yesButton.addEventListener('click', () => {
    callBack(args);
    hideView(backView);
  });

  const noButton = crel('div');
  noButton.className = 'okAlertButton';
  noButton.textContent = 'No';
  noButton.addEventListener('click', () => {
    hideView(backView);
  });

  const okAlertButton = crel('div');
  okAlertButton.className = 'okAlertButton';
  okAlertButton.textContent = 'YES';
  okAlertButton.addEventListener('click', () => {
    callBack(args);
    hideView(backView);
  });

  doc(confirmButtons, yesButton);
  doc(confirmButtons, noButton);

  doc(alertPanel, alertTitle);
  doc(alertPanel, alertText);
  doc(alertPanel, confirmButtons);
  doc(backView, alertPanel);
  maximize(backView);
}

export {
  gel, gelc, crel, doc, maximize, minimize, appAlert, appConfirm,
};
