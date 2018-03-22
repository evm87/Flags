function validate()
{

	if(checkName() == false)
	{
		//Reset score to 0 if form was submitted incomplete to avoid incrementing every time
		score = 0; 
		return false;
	}

	if(checkQ1() == false)
	{
		score = 0;
		return false;
	}	

	if (checkQ2() == false)
	{
		score = 0;
		return false;
	}

	if (checkQ3() == false)
	{
		score = 0;
		return false;
	}

	if (checkQ4() == false)
	{
		score = 0;
		return false;
	}
	
	var thisScore = document.forms[0].thisScore.value = score;
	alert("Your score was: " + score);
}

//Updates as score is tallied.
var score = 0;

//Used to confirm a name has been entered for About You section
function checkName()
{
	var name = document.forms[0].UserInfo.value;
	var highlighted = document.getElementById("UserInfo");
	
	if(name == "") 
	{
		//Highlights question that went unanswered
		highlighted.style.background = "yellow";
		alert("About You: Must include name");
		return false;
	}
}

//Used to check validity for question 1
function checkQ1()
{
	var answer = document.forms[0].Q1.value;
	var highlighted = document.getElementById("Q1");
	
	if(answer == "c")
	{
		score++;
		return true;
	}
	if(answer == "")
	{
		highlighted.style.background = "yellow";
		alert("Question 1: Must give answer");
		return false;
	}
	
}

function checkQ2()
{
	var answerQ2a = document.forms[0].Q2a.checked;
	var answerQ2b = document.forms[0].Q2b.checked;
	var answerQ2c = document.forms[0].Q2c.checked;
	var answerQ2d = document.forms[0].Q2d.checked;
	
	var highlighted = document.getElementById("Q2");
	
	var checkboxes = document.getElementsByTagName("input");
	var count = 0;

	//Checks every checkbox, and for each that is checked, increases count by 1
    for (var i=0; i < checkboxes.length; i++) 
	{       
        if (checkboxes[i].type == "checkbox" && checkboxes[i].checked == true)
		{
			count++;
        }
    }
	
	if (count == 0)
	{
		highlighted.style.background = "yellow";
		alert("Question 2: Must give at least 1 answer");
		return false;
	}
	
	else if (count > 2)
	{
		alert("Question 2: Too Many Selections");
		return false;
	}
	
	if(answerQ2a == true)
	{
		score++;
	}
		
	if (answerQ2c === true)
	{
		score++;
	}
	
}


function checkQ3()
{
	var answerQ3a = document.forms[0].Q3a.checked;
	var answerQ3b = document.forms[0].Q3b.checked;
	var answerQ3c = document.forms[0].Q3c.checked;
	var answerQ3d = document.forms[0].Q3d.checked;
	
	if(answerQ3b == true)
	{
		score++;
		return true;
	}
	
	else if(answerQ3a == false)
	{
		if (answerQ3b == false)
		{
			if(answerQ3c == false)
			{
				if(answerQ3d == false)
				{
					alert("Question 3: Must give answer");
					return false;
				}
			}
		}
	}
}


function checkQ4()
{
	var Q4 = document.forms[0].Q4.value;
	var highlighted = document.getElementById("Q4");
	
	//Converts input to a lowercase version
	var lowercase = Q4.toLowerCase();
	
	if(Q4 == "") 
	{
		highlighted.style.background = "yellow";
		alert("Q4: Must provide answer");
		return false;
	}
	
	else if(lowercase == "vexillology")
	{
		score++;
		return true;
	}
	
}