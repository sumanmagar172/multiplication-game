let score = 0;
        let num1, num2;

        function generateQuestion() {
            num1 = Math.ceil(Math.random() * 10);
            num2 = Math.ceil(Math.random() * 10);

            const questionElement = document.getElementById("question");
            questionElement.innerText = `What is ${num1} multiply by ${num2}?`;
        }

        function fun() {
            const answerElement = document.getElementById("answer");
            const errElement = document.getElementById("err");
            const scoreElement = document.getElementById("score");

            const mult = num1 * num2;

            const userAnswer = Number(answerElement.value);

            if (isNaN(userAnswer) || answerElement.value.trim() === "") {
                errElement.innerText = "Please enter a valid number!";
                errElement.style.color = "red";
                return;
            } else if (userAnswer === mult) {
                errElement.innerText = "Correct!";
                errElement.style.color = "green";
                score++;
            } else {
                errElement.innerText = `Incorrect! The correct answer was ${mult}.`;
                errElement.style.color = "red";
            }

            scoreElement.innerText = score;

            answerElement.value = '';

            generateQuestion();
        }

        window.onload = generateQuestion;