function checkAnswer(quizId, correctAnswer, explanationId) {
    const selectedOption = document.querySelector(`input[name="${quizId}"]:checked`);
    
    if (!selectedOption) return; // No option selected
    
    const answer = selectedOption.value;
    const explanationElement = document.getElementById(explanationId);
    const feedbackElement = document.getElementById(`feedback${quizId.slice(-1)}`);
    
    // Show immediate feedback based on the answer
    if (answer === correctAnswer) {
        feedbackElement.innerHTML = "<strong>Correct!</strong>";
        feedbackElement.style.color = "#66ff66";
    } else {
        feedbackElement.innerHTML = "<strong>Wrong!</strong>";
        feedbackElement.style.color = "#ff3b3b";
    }
    
    // Hide explanation initially
    explanationElement.style.display = "none";
    
    // Show explanation after 3 seconds
    // Show explanation after 3 seconds
    setTimeout(() => {
        const explanationText = {
            quiz1: {
                correct: "Explanation: This is phishing because the email domain (infosys-hiring.com) is suspicious. Official job offers from reputable companies like Infosys should come from their official domain (infosys.com). Phishing attempts often use domains that closely resemble legitimate ones but are slightly altered to deceive you. Always verify the domain of the sender before clicking on any links or providing personal information.",
                wrong: "Explanation: This email is a phishing attempt. The domain (infosys-hiring.com) is not an official Infosys domain. Authentic job offers would come from the company's official domain (infosys.com). Phishing schemes often use slightly altered domains to trick recipients into believing they are dealing with a legitimate company. It's important to scrutinize email addresses carefully."
            },
            quiz2: {
                correct: "Explanation: This email is legitimate because it comes from the official SBI domain (sbi.co.in) and does not request any immediate or sensitive information. Genuine communications from your bank will typically not use scare tactics or demand urgent action. They will also use their official domains and provide secure methods for managing your account. Always check the sender's domain and avoid clicking on links from unsolicited emails.",
                wrong: "Explanation: This email is legitimate, contrary to what you might have thought. It is from the official SBI domain (sbi.co.in) and does not use urgent language or request sensitive information through insecure means. Phishing attempts often create a sense of urgency to trick you into disclosing personal information, but this email adheres to the expected standards of communication from a trusted financial institution."
            },
            quiz3: {
                correct: "Explanation: This is phishing because government schemes like PM Kisan Yojana do not request sensitive information such as bank details through email. Phishing attempts often use fake schemes to harvest personal data. Real government communications will never ask for such details via email. Always verify the legitimacy of such requests through official channels before sharing any personal information.",
                wrong: "Explanation: This email is a phishing attempt. Official government schemes like PM Kisan Yojana do not ask for personal information like bank details through email. The domain (pmkisanbenefits.com) is not an official government domain, which is a significant red flag. Government bodies typically use official channels and secure methods to communicate with citizens about benefits or programs."
            },
            quiz4: {
                correct: "Explanation: This email is legitimate because it originates from Amazon's official domain (amazon.in) and contains no misleading or suspicious elements. Authentic order confirmations from companies like Amazon will use their verified domains and provide clear, accurate information about your purchases. There are no red flags such as urgent requests or incorrect domains in this communication.",
                wrong: "Explanation: This email is legitimate. It comes from Amazon's official domain (amazon.in) and includes accurate details about your order. Phishing attempts often use incorrect domains or try to trick you into providing sensitive information. In contrast, genuine emails from companies like Amazon will use their official domains and provide clear, straightforward information without any urgent or misleading elements."
            },
            quiz5: {
                correct: "Explanation: This is phishing because Paytm does not use domains like paytm-support.com for official communications and would not request UPI verification via email. Phishing attempts often use unverified domains and try to create a sense of urgency to trick users. Paytm and similar services use secure methods and official domains for communication regarding account details or verification.",
                wrong: "Explanation: This email is a phishing attempt. Paytm would never request UPI verification through an email from an unverified domain like paytm-support.com. Phishing schemes often use such tactics to deceive users into providing sensitive information. Always be cautious of unsolicited emails requesting personal details and verify such requests through official channels."
            }
        };
        
        explanationElement.innerHTML = explanationText[quizId][answer === correctAnswer ? 'correct' : 'wrong'];
        explanationElement.style.display = "block";
        
        // Hide explanation after 1 minute
        setTimeout(() => {
            explanationElement.style.display = "none";
        }, 120000); // 60000 ms = 1 minute
    }, 2000); // 3000 ms = 3 seconds
}

function checkAllAnswers() {
    const questions = ['quiz1', 'quiz2', 'quiz3', 'quiz4', 'quiz5'];
    questions.forEach(quizId => {
        const selectedOption = document.querySelector(`input[name="${quizId}"]:checked`);
        if (selectedOption) {
            checkAnswer(quizId, selectedOption.value === 'phishing' ? 'phishing' : 'legitimate', `explanation${quizId.slice(-1)}`);
        }
    });
}


