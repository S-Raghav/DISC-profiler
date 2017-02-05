map = {}
map['Bold'] = 'Dominant';
map['Strong-Willed'] = 'Dominant';
map['Outspoken'] = 'Dominant';
map['Confident'] = 'Dominant';
map['Decisive'] = 'Dominant';
map['Competitive'] = 'Dominant';
map['Risk-taker'] = 'Dominant';
map['Impatient'] = 'Dominant';
map['Supportive'] = 'Steady';
map['Good listener'] = 'Steady';
map['Controlled'] = 'Steady';
map['Consistent'] = 'Steady';
map['Tolerant'] = 'Steady';
map['Avoids conflict'] = 'Steady';
map['Dislikes change'] = 'Steady';
map['Relaxed'] = 'Steady';
map['Optimistic'] = 'Influential';
map['Enthusiastic'] = 'Influential';
map['Motivator'] = 'Influential';
map['Energetic'] = 'Influential';
map['Persuasive'] = 'Influential';
map['Planned'] = 'Steady';
map['Analytical'] = 'Compliant';
map['Precise'] = 'Compliant';
map['Orderly'] = 'Compliant';
map['Accurate'] = 'Compliant';
map['Independent'] = 'Dominant';
map['Goal-oriented'] = 'Dominant';
map['Egocentric'] = 'Dominant';
map['Aggressive'] = 'Dominant';
map['Inspiring'] = 'Influential';
map['Talker'] = 'Influential';
map['People-oriented'] = 'Influential';
map['Extrovert'] = 'Influential';
map['Likes attention'] = 'Influential';
map['Animated'] = 'Influential';
map['Trusting'] = 'Influential';
map['Adaptable'] = 'Steady';
map['Loyal'] = 'Steady';
map['Patient'] = 'Steady';
map['Detailed'] = 'Compliant';
map['Perfectionist'] = 'Compliant';
map['Considerate'] = 'Compliant';
map['Respectful'] = 'Compliant';
map['Sensitive'] = 'Compliant';
map['Inquisitive'] = 'Compliant';
map['Careful'] = 'Compliant';
map['Worrisome'] = 'Compliant';

entries = []
resultMap = {}

function addScore(checkbox){
	if(checkbox.checked){
		entries.push(map[checkbox.value]);
	    console.log(entries)	
	}
	else{
		el_index = entries.indexOf(checkbox.value)
		entries.splice(el_index, 1)
	}
}

function displayResult(){
	for(let i in entries){
		discType = entries[i];
		if(!(discType in resultMap))
			resultMap[discType] = 0
		resultMap[discType]++;
	}
	resultContainer = document.getElementById('results');
	txt = "Your score is:<br/>"
	for(let i in resultMap){
		txt += i + " : " + resultMap[i] + '<br/>';
	}
	resultContainer.innerHTML = txt;
	resultMap = {}
}

function displayQuestionnaire(){
	displayContainer = document.getElementById('questionDisplay');
	innerHTML = "";
	counter = 0;
	for(let i in map){
		checkbox = "<div class='item'><input type='checkbox' onclick='addScore(this)' value='" + i + "'/>" + i + "</div>";
		innerHTML += checkbox;
		counter++;
		if(counter%8 == 0){
			innerHTML += "<div class='clearfix'></div>"
		}
	}
	displayContainer.innerHTML = innerHTML;
}
window.onload = displayQuestionnaire