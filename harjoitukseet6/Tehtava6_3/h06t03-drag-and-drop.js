function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
 event.preventDefault();
 var files = event.dataTransfer.files;
 console.log(files);
 var filesCount = files.length;
 console.log(filesCount);
for (let i=0; i<filesCount; i++){
    let file=files[i];
 if (!file.type.match('image.*')) continue;

 var fileReader = new FileReader();

 fileReader.onload = function(e) {
   var img = document.createElement("img");
   img.setAttribute("class", "thumbnail");
   img.setAttribute("src", e.target.result);
   event.target.appendChild(img);
  }
  fileReader.readAsDataURL(file);
}
}