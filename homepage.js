function linkToTiles(section) {
  const element = document.getElementById(`${section}-tile`);
  element.onclick = function () {
    open(section);
  };
}

function open(section) {
  let url = '';
  switch (section) {
    case 'why':
      url = './why';
      break;
    case 'steps':
      url = './steps';
      break;
    case 'advanced':
      url = './advanced';
      break;
    case 'pricing':
      url = './pricing';
      break;
    case 'contact':
      url = './contact';
      break;
    default:
      url = './';
  }
  window.location.href = url;
}

linkToTiles('why');
linkToTiles('steps');
linkToTiles('advanced');
linkToTiles('pricing');
linkToTiles('contact');

document.getElementById('explore-button').onclick = function () {
  const tilesPage = document.getElementById('tiles');
  const yOffset = -75;
  const y = tilesPage.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
