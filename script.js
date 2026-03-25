var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

var img = document.getElementById("story-image");
var choicesDiv = document.getElementById("choices");

var nextBtn = document.getElementById("nextBtn");

var input = document.getElementById("secretInput");
var secretBtn = document.getElementById("secretBtn");

var inventoryText = document.getElementById("inventory");

var currentScene = "opening";
var textIndex = 0;

var inventory = [];
var secretUnlocked = false;

var scenes = {

 opening:{
  img:"classroom.jpg",
  text:[
"Kat: Man, it's been a hellva day today. I hear we get a new student, though. Maybe she'll be interestin'.",
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
"*Kat sits down beside Special Week. On her other side is Anna. Kat dramatically yanks her rolly chair off to the side and rolls beside her.*",
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
  choices:[
   {text:"Go with Anna", next:"tcwok"},
   {text:"Go with Beatrice", next:"sheets"},
   {text:"Ask Special Week", next:"friends"}
  ]
 },

 tcwok:{
  img:"tcwok.jpg",
  text:[
"Kat: Anna, T.C. Wok sounds great, let's go.",
"Anna: Yay, okay! Let's go, I can drive.",
"Kat: Wait... this is technically a power fantasy- I should be able to drive.",
"Kat: No, no, no, I shall drive, my dear.",
"*They walk to Kat's white 2015 Prius and drive to T.C. Wok.*",
"Kat: What are you thinking about getting? I kind of want lo mein and a Thai tea... mmmm Thai tea...",
"Anna: I think I'm gonna get some sort of noodles or soup. Anything with broth.",
"Kat: Hmmm... Thai tea... sounds good...",
"*They get their food and sit down.*",
"Kat: Maybe love just isn't for me.. Doomed to be a loveless chud forever...",
"Anna: I don't think you are, actually. You know, this is nice, we should hang out like this more often.",
"Kat: Is this yaori?",
"Anna: Yes, absolutely.",
"Ending one:",
"Yaori",
"Platonic love SWEEP!!!"
  ],
  end:true
 },

 sheets:{
  img:"sheets.jpg",
  text:[
"Kat: Oh, can I come with you, Beatrice? I want a chocolate milk or something.",
"Beatrice: Yeah, cmon.",
"Kat: Wait... this is technically a power fantasy- I should be able to drive.",
"Kat: I shall drive, my dear.",
"*They go to Sheets.*",
"Beatrice: Man, this Depop seller hasn't shipped my order yet, I really want this shirt...",
"Kat: Have you considered killing them or something? It's been like 3 weeks.",
"Beatrice: I don't think that'd get me my shirt, honestly.",
"Kat: ...You're probably right. We're here, anyway.",
"*Kat struggles parking her Prius.*",
"Kat: I feel like I should be more embarrassed about my parking skills, but, man, I give up.",
"Beatrice: Yeah, you probably should.",
"Kat: I'll pay, m'lady.",
"*Beatrice cringes.*",
"Ending 2:",
"Beatrice has lunch with you, despite your erm- flaws."
  ],
  end:true
 },

 friends:{
  img:"lunch.jpg",
  text:[
"You all have a nice lunch together."
  ],
  end:true
 },

 secret:{
  img:"kat.jpg",
  text:[
"SECRET ENDING UNLOCKED",
"Kat: You found me...",
"Kat: Maybe giving up isn't so bad after all.",
"The End."
  ],
  end:true
 }

};

function showText() {
  var scene = scenes[currentScene];

  p1.textContent = scene.text[textIndex] || "";
  p2.textContent = scene.text[textIndex + 1] || "";
  p3.textContent = scene.text[textIndex + 2] || "";
}

function nextText() {
  textIndex += 3;

  var scene = scenes[currentScene];

  if (textIndex >= scene.text.length) {
    nextBtn.style.display = "none";
    showChoices();
  }

  showText();
}

function showChoices() {
  choicesDiv.innerHTML = "";

  var scene = scenes[currentScene];

  if (!scene.choices) return;

  for (var i = 0; i < scene.choices.length; i++) {
    var btn = document.createElement("button");

    btn.textContent = scene.choices[i].text;

    btn.onclick = function() {
      var choiceText = this.textContent;

      for (var j = 0; j < scene.choices.length; j++) {
        if (scene.choices[j].text === choiceText) {
          currentScene = scene.choices[j].next;
          textIndex = 0;
          img.src = scenes[currentScene].img;
          nextBtn.style.display = "inline";
          choicesDiv.innerHTML = "";
          showText();
        }
      }
    };

    choicesDiv.appendChild(btn);
  }
}

nextBtn.onclick = nextText;

secretBtn.onclick = function() {
  if (input.value === "prius") {
    alert("secret unlocked");
  }
};

img.onclick = function() {
  if (img.src.includes("kat.jpg")) {
    currentScene = "secret";
    textIndex = 0;
    img.src = scenes.secret.img;
    nextBtn.style.display = "inline";
    showText();
  }
};

img.src = scenes[currentScene].img;
showText();