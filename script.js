let score = 0;
function checkAnswer(selectedOption){}


function checkAnswerN(selectedOption)
 { 
   const indicators = selectedOption.closest('.question').querySelectorAll('.indicator');
    
  indicators.forEach(indicator =>
   {
  indicator.classList.remove('correct', 'wrong');} );

  const indicator = selectedOption.nextElementSibling;

 if (selectedOption.value == 'correct') 
   {    
        indicator.classList.add('correct');
   }
else
    {
        indicator.classList.add('wrong');
    }
}
 

function showResult() 
{   score = 0;
    const questions = document.querySelectorAll('.question');

questions.forEach(question => 
{   const correctOption = question.querySelector('input[type="radio"][value="correct"]');
        if (correctOption.checked) 
        {
            score++;
        }
});

    document.getElementById('score').textContent = score;
    document.getElementById('result').style.display = 'block';

Mark();

}

function Mark()
{ 
const questions = document.querySelectorAll('.question');

questions.forEach(question => 
{   const correctOption = question.querySelectorAll('input[type="radio"]');
     
     correctOption.forEach( Option =>
               { 
                  const indicator = Option.nextElementSibling;
                  if ( Option.value=='correct') 
                  {    
                      indicator.classList.add('correct');
                  }
                  else
                  {
                      indicator.classList.add('wrong');
                  }
               });
});

}
