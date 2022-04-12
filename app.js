// navigation button setting
var about = document.querySelector("#aboutBtn");
about.addEventListener("click", function(){
	document.querySelector("#about").scrollIntoView();
});

var resume = document.querySelector("#resumeBtn");
resume.addEventListener("click", function(){
	document.querySelector("#resume").scrollIntoView();
});

var education = document.querySelector("#educationBtn");
education.addEventListener("click", function(){
	document.querySelector("#education").scrollIntoView();
});

var contact = document.querySelector("#contactMeBtn");
contact.addEventListener("click", function(){
	document.querySelector("#contact").scrollIntoView();
});


//DOM elements of radio elements
var hiring = document.querySelector("#donation");
var comment = document.querySelector("#comment");
var question = document.querySelector("#question");
var QuestionOrCommentTextBox = document.querySelector("#QuestionOrCommentTextBox");
//display "hiring rate" input box
function addDonation(){
	document.querySelector("#DonationRateLabel").innerHTML = `Donation($): <br><input  type="number" id="donationRate" min=0 name="donationRate"><br>`;
}
//hide "hiring rate" input box
function removeDonation(){
	document.querySelector("#DonationRateLabel").innerHTML = "";
}
//modify title sentence
function changeComment(){
	QuestionOrCommentTextBox.innerHTML = "Don't fill out the blank below if you select \"Donation\"";
}

//events setting for radio button selection
hiring.addEventListener("click", function(){
	addDonation();
	changeComment();
});
comment.addEventListener("click", function(){
	QuestionOrCommentTextBox.innerHTML = "Comment: ";
	removeDonation();
})
question.addEventListener("click", function(){
	QuestionOrCommentTextBox.innerHTML = "Question: ";
	removeDonation();
})

