/* 
1. Collect dropdown options: 
- Navigate to https://the-internet.herokuapp.com/dropdown
- In the Dev Tool console write script to collect dropdown options into list
- Check that ‘Option 1’ is in the list and print out result (true/false) 
*/
let options = Array.from(dropdown.options).map(option => option.textContent);
let isOptionPresent = options.includes('Option 1');
console.log(isOptionPresent);


/*
2. Fill the form:
- Navigate to https://www.techlistic.com/p/selenium-practice-form.html
- Write JS script to fill form with values from the following json via Dev Tool console
data = {
	firstname: 'Ana', 
  	lastname: 'Pooh', 
    gender: 'Female', 
 	yearsOfExpirience: 7, 
    profession: ['Automation Tester', 'Manual Tester'], 
    tools: ['Selenium Webdriver', 'Selenium IDE'],
    continent: 'Antartica' 
}
*/

const data = {
    firstname: 'Ana',
    lastname: 'Pooh',
    gender: 'Female',
    yearsOfExperience: 7,
    profession: ['Automation Tester', 'Manual Tester'],
    tools: ['Selenium Webdriver', 'Selenium IDE'],
    continent: 'Antartica'
  };

  $('[name="firstname"]').value = data.firstname;
  $('[name="lastname"]').value = data.lastname;
  $(`[value= ${data.gender}]`).click();
  $$('[name="exp"]')[data.yearsOfExperience - 1].click()
  data.profession.forEach(profession => $(`input[value="${profession}"]`).click());
  data.tools.forEach(tool => $(`input[value="${tool}"]`).click());
  $('[name=continents]').value = data.continent;
