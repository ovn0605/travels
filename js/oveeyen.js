
var LondonFrame, SingaporeFrame, MalaysiaFrame;

function inputName(){
    var ArrName= new Array();
    for (i=0; i<5;i++){
      ArrName.push(prompt("name"));
    }
    ArrName.sort();
  
    var y=ArrName.shift();
     alert("y=" + y);
       ArrName.unshift("Sandiren");
     for (x in ArrName){
      alert(ArrName[x]);
     }
     alert("join: " + ArrName.join());
    }


//Loads photo files into an array and returns the array
//place is the City, town or Country for which we want the photos
//num is the number of photos in that directory
function LoadPhotoFiles(place,num){
  var photoArr=new Array();
 //Photos are kept in subdirectories of images
 //Eg. images/London
 //We first build the directory name from the place passed as parameter
  directory="images/"+ place +"/";
  //We then obtan the file names and push them into the array. They are numbered
  for (photonum=1; photonum<=num; photonum++){
       photofile=directory + place+photonum;
       photoArr.push(photofile);
}
    return photoArr
}

//The function LoadPhotos calls the function LoadPhotoFiles
// to create an array using all the files in a directory having the name of the location
//It then uses the array to dynamically create the inner elements of the carousel at run time
//The inner element is assigned an ID based on the required location
function LoadPhotos(Placename,number){
  //alert("In LondonPhotos");
  var fileNameArr=LoadPhotoFiles(Placename,number);
  //console.log("In Load Photos");
  //console.log(Placename+ number);
  
  //After obtaining the photofiles,
  //Build the carousel items
  var myFrame=document.createElement("div");
  var placeId=Placename + "PhotoSpace";
 // console.log("PlaceId="+placeId);
  myFrame.setAttribute("id",placeId);
  myFrame.classList.add("carousel-inner");
  for (counter in fileNameArr){
    var filename=fileNameArr[counter]+".jpg";
    //console.log(filename);
    var element=document.createElement("div");
        element.classList.add("carousel-item");
        if (counter==0){
           element.classList.add("active")
        }
    var innerElement=document.createElement("img");
        innerElement.setAttribute("src",filename);
        innerElement.setAttribute("alt",filename);
        innerElement.classList.add("mypic");
      element.appendChild(innerElement);
      myFrame.appendChild(element);
  }

  //console.log("leaving loadphotos");
      return myFrame;
}

function initiatePhotoLoads(){
  LondonFrame=LoadPhotos("London",11);
  SingaporeFrame=LoadPhotos("Singapore",13)
  MalaysiaFrame=LoadPhotos("Malaysia",11);
  //var dummyElem=document.createElement("div");
  // console.log("In - Initiate photo loads Going to obtain carousel element");
  var element=document.getElementById("mycarousel");
  //$("#mycarousel").append(LondonFrame);
 // $("#mycarousel").append($("#LondonPhotoSpace"));
 // console.log("no of elements="+$("#mycarousel").length);
//  console.log("obtained carousel element");
    element.appendChild(MalaysiaFrame);
    //element.html(LondonFrame);
   // console.log("Have assigned inner Element");
  //element.appendChild(dummyElem);
 
   // console.log("appended London Frame");
  }

function londonPhotos(){
  //console.log("In London Photos");
   var element=document.getElementById("mycarousel");
   // console.log("Obtained Carousel Element");
    //console.log("length="+$("#mycarousel").length);
   var node=element.lastChild;
   //  console.log("Obtained lastchild");
   element.removeChild(node);
   element.appendChild(LondonFrame);
  //  console.log("Leaving London Photos");

}
function SingaporePhotos(){
   var element=document.getElementById("mycarousel");
   var node=element.lastChild;
   element.removeChild(node);
   element.appendChild(SingaporeFrame);

}

function MalaysiaPhotos(){
   var element=document.getElementById("mycarousel");
   var node=element.lastChild;
 //  console.log("In Malasia Photos-Going to remove node");
   element.removeChild(node);
   element.appendChild(MalaysiaFrame);
// console.log("leaving Malaysia Photos");
}

function loadHome(){
$("#mymain").load("home.html",function(){ 
      initiatePhotoLoads();  });
var headElement=document.getElementById("title1");
headElement.innerHTML="Our Overseas Vists";

}

function loadRodrigues(){

  $("#mymain").load("rodrigues.html");
 var headElement=document.getElementById("title1");
 headElement.innerHTML="Rodrigues 2008";
}

function loadSingapore(){

  $("#mymain").load("singapore.html");
 var headElement=document.getElementById("title1");
 headElement.innerHTML="Singapore, Malaysia and Honkong - 2011";
}


function loadCanada1(){
   $("#mymain").load("canada1.html");
   var headElement=document.getElementById("title1");
    headElement.innerHTML="Canada 2013";
}

function loadLondon(){
   $("#mymain").load("london.html");
   var headElement=document.getElementById("title1");
   headElement.innerHTML="London 2016";
}

function loadCanada2(){
   $("#mymain").load("canada2.html");
   var headElement=document.getElementById("title1");
   headElement.innerHTML="Canada 2016";
  }


$(document).ready(function(){
      $("#mymain").load("home.html",function(){ 
      initiatePhotoLoads();  });
  });