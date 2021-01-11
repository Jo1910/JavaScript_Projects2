// switch
function bookFunction() {
  var Book_Output;
  var Books = document.getElementById("book_input").value;
  var str = " is a great book genre!";
  switch (Books) {
    case "Action and Adventure":
      Book_Output = "Action and Adventure" + str;
      break;
    case "Classics":
      Book_Output = "Classics" + str;
      break;
    case "Comics":
      Book_Output = "Comics" + str;
      break;
    case "Detective and Mystery":
      Book_Output = "Detective and Mystery" + str;
      break;
    case "Fantasy":
      Book_Output = "Fantasy" + str;
      break;
    case "Historical Fiction":
      Book_Output = "Historical Fiction" + str;
      break;
    case "Horror":
      Book_Output = "Horror" + str;
      break;
    case "Romance":
      Book_Output = "Romance" + str;
      break;
    case "Science Fiction":
      Book_Output = "Science Fiction" + str;
      break;
    case "Trillers":
      Book_Output = "Trillers" + str;
      break;
    case "Biographies":
      Book_Output = "Biographies" + str;
      break;
    case "Cookbooks":
      Book_Output = "Cookbooks" + str;
      break;
    case "History":
      Book_Output = "History" + str;
      break;
    case "Poetry":
      Book_Output = "Poetry" + str;
      break;
    default:
      Book_Output =
        "Please enter a book genre exactly as written on the above list";
  }
  document.getElementById('output').innerHTML = Book_Output;
}

// get element by className
function clFunction() {
  var hi = document.getElementsByClassName('cl');
  hi[1].innerHTML = "How do you do?";
}

// Canvas
var c = document.getElementById("can");
var cnv = c.getContext("2d");
var gr = cnv.createLinearGradient(0,0,135,0);
gr.addColorStop(0, "blue");
gr.addColorStop(1, "violet");
cnv.shadowBlur = 5;
cnv.shadowOffsetX = 10;
cnv.shadowColor = "grey";
cnv.fillStyle = gr;
cnv.fillRect(15, 15, 120, 70);