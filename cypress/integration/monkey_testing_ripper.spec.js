describe('Los estudiantes under monkeys', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);

        randomEvent(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

// Funcion para generar texto al azar de 20 caracteres
function getRandomText() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;

    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            // setTimeout(randomClick, 1000, monkeysLeft);
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }
}

// Hacer click en un link al azar
function randomLinkClick() {
  console.log('Link al azar.');
  cy.get('a').then($links => {
      if($links.length > 0) {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            console.log(randomLink);
            cy.wrap(randomLink).click({force: true});
            cy.wait(1000);
        }
      }
      else {
          cy.visit('https://losestudiantes.co');
      }
  });
}

// Llenar un campo con texto al azar
function randomTextField() {
  console.log('Texto al azar.');
  cy.get('input').then($inputs => {
      if($inputs.length > 0) {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if(!Cypress.dom.isHidden(randomInput) && (randomInput.type == '' || randomInput.type == 'text')) {
            console.log(randomInput);
            cy.wrap(randomInput).clear({force: true})
            cy.wrap(randomInput).type(getRandomText(), {force: true});
            cy.wait(1000);
        }
      }
  });
}

// Seleccionar un combo al azar
function randomCombo() {
  console.log('Combo al azar.');
  cy.get('select').then($selects => {
      console.log($selects);
      if($selects.length > 0) {
        var randomSelect = $selects.get(getRandomInt(0, $selects.length));
        console.log(randomSelect);
        if(!Cypress.dom.isHidden(randomSelect)) {
            console.log(randomSelect);
            cy.wrap(randomSelect).find('option').then(option => {
                // console.log(option[0].value);
                cy.wrap(randomSelect).select(option[0].value);
            });
            cy.wait(1000);
        }
      }
  });
}

// Hacer click en un botón al azar
function randomButton() {
  console.log('Botón al azar.');
  cy.get('button').then($buttons => {
      if($buttons.length > 0) {
        var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            console.log(randomButton);
            cy.wrap(randomButton).click();
            cy.wait(1000);
        }
      }
  });

  cy.get('[type="button"]').then($lbuttons => {
      if($lbuttons.length > 0) {
        var randomLButton = $lbuttons.get(getRandomInt(0, $lbuttons.length));
        if(!Cypress.dom.isHidden(randomLButton)) {
            console.log(randomLButton);
            cy.wrap(randomLButton).click();
            cy.wait(1000);
        }
      }
  });
}

function randomEvent(monkeysLeft) {
  var monkeysLeft = monkeysLeft;
  var events = ['link', 'input', 'combo', 'button'];

  if(monkeysLeft > 0) {
      var event = events[getRandomInt(0, events.length)];
      switch(event) {
          case 'link':
              randomLinkClick();
              monkeysLeft = monkeysLeft - 1;
              break;
          case 'input':
              monkeysLeft = monkeysLeft - 1;
              randomTextField()
              break;
          case 'combo':
              monkeysLeft = monkeysLeft - 1;
              randomCombo()
              break;
          case 'button':
              monkeysLeft = monkeysLeft - 1;
              randomButton()
              break;
          default:
              monkeysLeft = monkeysLeft - 1;
              randomLinkClick();
      }

      cy.wait(1000);
      randomEvent(monkeysLeft);
  }
}
