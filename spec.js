// spec.js

describe('ADF Demo App', function() {

  const EC = protractor.ExpectedConditions

  var settingsURL = 'http://qaexercise.envalfresco.com/settings';
  var loginURL = 'http://qaexercise.envalfresco.com/login';
  var filesURL = 'http://qaexercise.envalfresco.com/files';
  var providerDropDown = element(by.id('adf-provider-selector'));
  var selectEcm = element(by.id('mat-option-1'));
  var applyButton = element(by.id('host-button'));
  var userName = element(by.id('username'));
  var password = element(by.id('password'));
  var loginButton = element(by.id('login-button'));
  var textUserName = 'guest@example.com';
  var textPassword = 'Password';
  var folderName = element(by.id('adf-folder-name-input'));
  var createFolderButton = element(by.id('adf-folder-create-button'));
  var txtNewFolder = 'rovillegas';
  var cancelCreateButton = element(by.id('adf-folder-cancel-button'));

  function setECM(provider, option, button) {
     browser.get(settingsURL);
     provider.click();
     option.click();
     button.click();
  }

  function loginPage(user, pass) {
    browser.get(loginURL);
    userName.sendKeys(user);
    password.sendKeys(pass);
    loginButton.click();
  }

    function createFolder () {
    folderName.sendKeys(txtNewFolder);
    createFolderButton.click();
  }

 it('Go to settings and set Provider to ECM', function() {

   setECM(providerDropDown, selectEcm, applyButton);
   browser.sleep(500);

  });

  it('Go to login and enter username and password', function() {

    loginPage(textUserName, textPassword);
    browser.sleep(500);
  
  });
  
  it('Go to Files', function() {

    browser.get(filesURL);
    browser.sleep(500);
  
  });

  it('Create Folder using the Github username', function() {

    $('button[data-automation-id=\'create-new-folder\']').click();
    browser.sleep(500);
    createFolder();
  
  });
  
  it('Recreate and validate the returned message and click Cancel', function() {

    $('button[data-automation-id=\'create-new-folder\']').click();
    browser.sleep(500);
    createFolder();
    expect ($('div[aria-live=\'assertive\']').getAttribute('innerText')).toEqual('There\'s already a folder with this name. Try a different name.');
    cancelCreateButton.click();
  
  });

  it('Click on the Actions Menu and delete the folder', function() {

    $('button[aria-label=\'Actions\']').click();
    browser.sleep(500);
    expect ($('button[aria-label=\'Delete\']'));
    $('button[aria-label=\'Delete\']').click();
    expect ($('div[aria-live=\'assertive\']').getAttribute('innerText')).toEqual('rovillegas deleted');
  
  });



});