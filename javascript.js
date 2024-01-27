<script>
    //retrieve images from api
function renderStory() {
    fetch("https://picsum.photos/v2/list")
        .then(res => res.json()).then((data) => {
            for (let i = 0; i < 10; i++) {
                let user = data[i]['author']
                if (user.length > 9) {
                    user = user.substr(0, 8) + "..."
                }
                let img = data[i]['download_url']
                let temp_html = `<img src="${img}">${user}`
                $(`.storyImg-${i+1}`).append(temp_html);
            }

        })

}


// dblclick is a double click event
// click is a single click event
$('.bi-suit-heart').on('click', function () {
    // For red color, see feed.css
    
    if ($(this).hasClass('bi-suit-heart')) {
        // Remove this class
        $(this).removeClass('bi-suit-heart');

        // Add this class
        // Adding fill
        $(this).addClass('bi-suit-heart-fill');


    } 
    
    // If we are clicking again, then fill gets removed
    else if ($(this).hasClass('bi-suit-heart-fill')) { 
        // Removing fill
        $(this).removeClass('bi-suit-heart-fill');
        $(this).addClass(' bi-suit-heart');
    }
});


//bookmarks
$('.bi-bookmark').on('click', function () {
    // Same as heart buttons

    // Send this info to the server
    if ($(this).hasClass('bi-bookmark')) {
        $(this).removeClass('bi-bookmark');
        $(this).addClass('bi-bookmark-fill');
        i++;
    } else if ($(this).hasClass('bi-bookmark-fill')) {
        $(this).removeClass('bi-bookmark-fill');
        $(this).addClass('bi-bookmark');
        i--;
    }
});


const slides = document.querySelector('.slides'); //get all slide container 
const slideImg = document.querySelectorAll('.slides img'); // get all sides 
let currentIdx = 0; //the current slide index 
const slideCount = slideImg.length; // the number of slides 
const prev = document.querySelector('.prev'); //pre button
const next = document.querySelector('.next'); //next button
const slidesWidth = 740; //the area of one slide
const slideMargin = 0; // the value of margin between each slide 

//set the whole slides container area
slides.style.width = (slidesWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 740 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*if current currentIdx !==0 works , moveslides can runs.
  the previous button are not working when the first photo is on the page*/ 
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /*if currentIdx !==slideCount - 1 works , moveslides can runs.
  the next button are not working when the last photo is on the page*/ 

  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});


//search funtion
function search() {
        let searchWord = $("#searchInput").val();
        let link = `https://www.instagram.com/explore/tags/${searchWord}`
        if (window.event.keyCode == 13) {
            location.href = link;
        }

    }


// assign contents in captions to variables
var first = document.getElementById('captionFirst').innerText
var second = document.getElementById('captionSecond').innerText
var third = captionContent = document.getElementById('captionThird').innerText

//readmore functions
function captionFirst() {
    if (first.length > 8) {
        $("#captionFirst").html(`${first.substring(0, 8)}...`);
    }
}
function captionSecond() {
    if (second.length > 8) {
        $("#captionSecond").html(`${second.substring(0, 8)}...`);
    }
}
function captionThird() {
    if (third.length > 8) {
        $("#captionThird").html(`${third.substring(0, 8)}...`);
    }
}
function readMoreFirst() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Btn-1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreSecond() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Btn-2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreThird() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Btn-3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


//focused input
$(document).ready(function() {
    $('#smail-1').click(function() {
        $("#commentFirstInput").focus();
    })
    $('#smail-2').click(function() {
        $("#commentSecondInput").focus();
    })
    $('#smail-3').click(function() {
        $("#commentThirdInput").focus();
    })
});

// the funtions that show comments on the page
//first feed comments
function postFirstComment() {
    let comment = $("#commentFirstInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#firstComment').append(temp_html)
        //initializing the input box value
        document.getElementById('commentFirstInput').value = null
    }


}
//second feed comments
function postSecondComment() {
    let comment = $("#commentSecondInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#secondComment').append(temp_html)
        //initializing the input box value
        document.getElementById('commentSecondInput').value = null
    }

}
//the last feed comments
function postThirdComment() {
    let comment = $("#commentThirdInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#thirdComment').append(temp_html)
        //initializing the input box value
        document.getElementById('commentThirdInput').value = null
    }


}


//Codes included inside $( document ).ready() will only run once the page
$(document).ready(function () {
        renderStory()
        captionFirst()
        captionSecond()
        captionThird()
    });
</script>
