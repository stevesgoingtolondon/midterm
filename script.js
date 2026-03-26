var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var img = document.getElementById("story-image");
var choicesDiv = document.getElementById("choices");
var nextBtn = document.getElementById("nextBtn");
var input = document.getElementById("secretInput");
var secretBtn = document.getElementById("secretBtn");

var currentScene = "opening";
var textIndex = 0;

var scenes = {
  opening: {
    img: "classroom.jpg",
    text: [
      "Kat: Man, it's been a hellva day today. I hear we get a new student...",
      "Kat: I mean, I sure am popular with tha' ladies. (She is not)",
      "Kat: Maybe this girl will be the one?",
      "*Spechan opens the door, and Kat is overwhelmed by her sheer aura. She's a cute one, isn't she?*",
      "Special Week: Hi, I'm Special Week. I'm really excited to meet you all. I hope I can make a lot of friends and do well. I've never heard of an early college, but I really hope we can all have fun together!",
      "Kat: ...",
      "Kat: Is she serious? Is she an anime protagonist? I'm quite intrigued tho, she seems fun... I should see if she'll let me sit next to her; it looks like she's sitting beside Beatrice and Anna. Might as well.",
      "*She gets up and approaches her friends.*",
      "Kat: Hi, can I sit next to you guys? I'm Kat, by the way.",
      "Special Week: Yeah, of course! Nice to meet you, Kat.",
      "Beatrice: Yeah, sit down.",
      "*Kat sits down beside Special Week.*",
      "Kat: (Whispering) The new girls kinda cute, right! Or am I crazy-I can't be crazy- I mean- I have taste...I th-think...?",
      "Anna: (Whispering) I don't think you're crazy, she very well could be THE finest white girl at WECIB...",
      "Kat: You think I have a chance? Maybe-?",
      "Anna: How desperate are you... I'm sure you have a chance, though.",
      "Kat: Oh, thank Keito Hasumi! I'll ask her to lunch.",
      "*They wheel back to their desks, not realizing they aren't discreet in the slightest, nor very good at whispering.*",
      "*Class passes, and lunch time arrives*",
      "Kat: I should really get something for lunch- let me ask Spechan what she's doing.",
      "Anna: Hey, Kat, are you busy during lunch, like have you asked Special Week to lunch yet? Cause if you haven't, we could totally go to T.C. Wok, you know?",
      "*Before Kat can answer, Beatrice approaches her as well.*",
      "Beatrice: Hey, I'm going to Sheets, do you want anything?",
      "Kat: Ah crap...options...ladies...ladies one at a time please...."
    ],
    choices: [
      {text:"Go with Anna", next:"driveAnna"},
      {text:"Go with Beatrice", next:"driveBea"},
      {text:"Stay with Special Week", next:"friends"}
    ]
  },
  tcwok:{img:"tcwok.jpg",text:["Kat: I want lo mein and Thai tea","Anna: noodles or soup","Kat: Maybe love just isn't for me..","Anna: I don't think you are","Kat: Is this yaori?","Anna: Yes, absolutely.","Ending one:","Yaori","Platonic love SWEEP!!!"],end:true},
  sheets:{img:"sheets.jpg",text:["Kat: Oh, can I come with you, Beatrice?","Beatrice: Yeah, cmon.","Kat: I shall drive.","*They go to Sheets.*","Beatrice: Depop seller hasn't shipped","Kat: Have you considered killing them","Beatrice: no","Kat: I'll pay","Ending 2: Cringe Ending"],end:true},
  friends:{img:"lunch.jpg",text:["You all have a nice lunch together."],end:true},
  secret:{img:"kat.jpg",text:["SECRET ENDING","Kat: You found me...","The End."],end:true},
  driveAnna:{img:"tcwok.jpg",text:["Kat: I shall drive.","*They drive to T.C. Wok*"],choices:[{text:"Drive confidently",next:"tcwok"},{text:"Drive badly",next:"awkDrive"}]},
  awkDrive:{img:"tcwok.jpg",text:["Kat: I almost crashed...","Anna: bruh..."],choices:[{text:"Continue anyway",next:"tcwok"}]},
  driveBea:{img:"sheets.jpg",text:["Kat: I shall drive."],choices:[{text:"Park well",next:"sheets"},{text:"Park badly",next:"beaChoice"}]},
  beaChoice:{img:"sheets.jpg",text:["Kat: bad parking...","Beatrice: yeah..."],choices:[{text:"Laugh it off",next:"sheets"},{text:"Make it worse",next:"sheets"}]}
};

function showText(){
  var scene = scenes[currentScene];
  p1.textContent = scene.text[textIndex]||"";
  p2.textContent = scene.text[textIndex+1]||"";
  p3.textContent = scene.text[textIndex+2]||"";
}

function nextText(){
  textIndex += 3;
  var scene = scenes[currentScene];
  if(textIndex >= scene.text.length){
    nextBtn.style.display="none";
    showChoices();
  }
  showText();
}

function showChoices(){
  choicesDiv.innerHTML="";
  var scene = scenes[currentScene];
  if(!scene.choices) return;
  for(var i=0;i<scene.choices.length;i++){
    var btn=document.createElement("button");
    btn.textContent=scene.choices[i].text;
    btn.onclick=(function(choice){
      return function(){
        currentScene=choice.next;
        textIndex=0;
        img.src=scenes[currentScene].img;
        nextBtn.style.display="inline";
        showText();
      }
    })(scene.choices[i]);
    choicesDiv.appendChild(btn);
  }
}

nextBtn.onclick=nextText;

secretBtn.onclick=function(){
  if(input.value==="prius"){
    currentScene="secret";
    textIndex=0;
    img.src=scenes.secret.img;
    nextBtn.style.display="inline";
    choicesDiv.innerHTML="";
    showText();
  }
}

img.src=scenes[currentScene].img;
showText();