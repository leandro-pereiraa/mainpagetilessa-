sap.ui.define([
	'./BaseController'
], function(Controller) {
	"use strict";

	return Controller.extend("openBusiness.controller.Dashboard", {

        onInit : function() {

		},

		navToInternos(){
			let url = `https://login.microsoftonline.com/bbb2caa3-06db-42eb-8a17-58d6c6e9029c/saml2?SAMLRequest=jZLLbtswEEV%2FRWDWFB9SZYmQDbg1ihpIWyN2s%2BiOIimHgDR0NVTd%2FH0VOYWzSZoteS5w7szU6zE%2BwJ37NTqMyRrRDdEH%2BBQAx94Nezf89sb9uLtdkocYT6gY0zqHFk7VY6qNCSNETANY12uwqQk9Q913knl7Ytrg%2F2iS7IYQgwndRw%2FWw3FJxgFU0OhRge4dqmjUfv31VsmUq%2BYCofpyOOzo7vv%2BQJLNZO5BP2lfJbtw9JD23gwBQxsDdB7crNc0jTRaZ5QXtqG5dA0ttVjQD6UtTOEqLitz6UCS7WZJ9rIo9WL6oGXuSpqLQlAtipa2WgtrW1ks2mpCEUe3BYwa4pJILnPKBc3EQUglC5Uv0kyWP0ly7wacTac6JPnTd4BvVz49z%2BcZVoDy7YD%2Bt8RrIr8MZprL%2BXxOz1kahiOTnAvGczZBDszNlc5eoTnj1RNt0R9vyKqeTNRce1i98zZq9iJTf5vUt5td6Lx5TD6Hodfx9WYiFfOLt7SdUTUCnpzxrXeWsFXNXl7y6i8%3D&RelayState=arc51eb19&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=XrhdB4U33j7x9rJGqkKHjFUvfpbge3aYksjNG%2Fi3VnHWS8Wj12YEefOMJoUyA6lgDno8cbY1iaI1ULzeEXk3msDLksALEuyXSHte3r%2BrniZwbmUySq6HkJtF27H%2Beqnh9RcQGeohHcrpc4dL%2FH9c3LJnTUXPRiWxJ8SRyVoonqukxs6ANCmr7ucGA3nI%2BzpYRm1RtzVdUlsoDfmvJWEjQ%2BuT9rkHim3qT%2ByavP4%2FYcWspp7sv49LnQmz7lxstfA5%2FCgK0q4ls634tZEpq9MXK%2BBOeDEpQsNZdMArfhhsFSPNXVvwl7bIxfv4bQ9NyXCHh2TZdn%2BSxRFnZO%2BSk6EG%2FA%3D%3D`
			window.open(url, "_self");
		},

		navToExternos(){
			let url = "https://zilor-qas.launchpad.cfapps.us10.hana.ondemand.com/site?siteId=fb27f702-6534-4eab-9a6a-d4266a7aa5fe#Shell-home"
			window.open(url, "_self");
		}
	});
});