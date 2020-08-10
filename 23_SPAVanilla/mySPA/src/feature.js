const skill = document.getElementById('skill');
const clickme = document.getElementById('clickme');

const skills = ['Frontend Developer', 'Backend developer', 'Python Developer', 'DevOps', 'DataScientist'];
	
function randomSkills() {
	let randomSkill = skill.innerHTML;
	while ( skill.innerHTML == randomSkill) {
		randomSkill = skills[Math.floor(Math.random()*skills.length)];
	}
	return randomSkill;
}


clickme.addEventListener('click', ()=> {
	console.log(skill.innerHTML)
	skill.innerHTML = randomSkills();
});
