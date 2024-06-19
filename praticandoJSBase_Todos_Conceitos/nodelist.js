const sections = document.querySelector('.sections');
const sectionsNodeList = sections.querySelectorAll('section');

const stylesBody = getComputedStyle(document.body);
const backgroundbody = stylesBody.backgroundColor;

for (let section of sectionsNodeList){
    section.style.backgroundColor = backgroundbody;
    section.style.color = '#000000';
}