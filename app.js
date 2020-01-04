var $body = document.querySelector('body');
var $people = [...document.querySelectorAll('#birthdays_content .uiList li a')];
var $peopleInfoBox;

var peopleInfo = $people.map(person => {
	const dataContent = person.getAttribute('data-tooltip-content');

	if (!dataContent) return null;

	const personData  = dataContent.split(/\s?[()]/g);
	const personImage = person.querySelector('img');
	const [ name, birthday ] = personData;

	return {
		name,
		birthday,
		image : personImage.getAttribute('src'),
	};
}).filter(data => data !== null);

var convertToJSON = (data, name = 'data') => `{ "${name}": ${JSON.stringify(data)} }`;

var copyData = data => {
	$peopleInfoBox = document.createElement('textarea');
	$peopleInfoBox.style = { position: 'fixed', top: '-100%' };
	$peopleInfoBox.value = convertToJSON(data, 'aniversarios');
	$body.appendChild($peopleInfoBox);
	$peopleInfoBox.select();
	document.execCommand('copy');
	$body.removeChild($peopleInfoBox);
	console.log('Informações copiadas');
};

copyData(peopleInfo);
