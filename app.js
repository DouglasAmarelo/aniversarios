// Variáveis
var $body = document.querySelector('body');
var $peopleLists = document.querySelectorAll('#birthdays_content .uiList');
var peopleInfo = [];
var $peopleInfoBoxTemplate = `<textarea name="people-info" id="people-info"></textarea>`;
$body.insertAdjacentHTML('afterbegin', $peopleInfoBoxTemplate);

// Passando por todas as litas
$peopleLists.forEach($list => {
	var $people = $list.querySelectorAll('li a');

	// passando por cada pessoa encontrada em cada lista
	$people.forEach(person => {
			var personData = person.getAttribute('data-tooltip-content');
			var personNameAndBirthday = personData && personData.split(/\s?[()]/g);
			var personImage = personData && person.querySelector('img');

			peopleInfo.push({
					name: personNameAndBirthday[0],
					birthday: personNameAndBirthday[1],
					image: personImage.getAttribute('src'),
			});
	});
});

var $peopleInfoBox = document.querySelector('#people-info');
$peopleInfoBox.value = '';

peopleInfo.map(personInfo => $peopleInfoBox.value += `${JSON.stringify(personInfo)} ,`);

$peopleInfoBox.select();
document.execCommand('copy');

alert('Informações copiadas');
