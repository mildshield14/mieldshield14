//const stri ="";

//stri=document.getElementsByID("head");

//stri.classList.replace("head", "head2")
const prev2="one";
function personal(){

}

function skill(){
    let txt=document.getElementsByClassName("table table-hover")[0];
   
    let txt1='<div id="moveimg"><img src="https://media.tenor.com/qCQKwkRUBpsAAAAM/geek-geeking-out.gif"></img><br>\
    <img src="https://i.imgflip.com/4iv5dg.jpg"></img></div>\
   <div class="techpage" >\
    <div class="left" id="biggest"><u>Skills:</u></div><ul>\
      <br>\
      <div class="left" id="bigger"><u> Ready to use </u></div><br>\
      <div class="left"><li>Python3</li></div>\
      <div class="left"><li> JavaScript (familiar with JQuery, JSON, AJAX, ReactNg, XML)</li></div>\
      <div class="left"><li> Visual Basic </li></div>\
      <div class="left"><li> CSS </li></div>\
      <div class="left"><li> HTML5 </li></div>\
      <div class="left"><li> LMC (Little Man Computer)</li></div>\
      <div class="left"><li> Bash programming </li></div>\
      <div class="left"><li> MySQL using Microsoft Access (basic) </li></div>\
      <div class="left"><li> Java (self-learnt) </li></div>\
      <br>\
      <div class="left" id="bigger"><u> Solo Learning & Currently Learning </u></div><br>\
      <div class="left"><li> Java (currently learning for IFT 1025)</li></div>\
      <div class="left"><li> VHDL (currently learning using Quartus) </li></div>\
      <div class="left"><li> MIPS instruction set </li></div>\
      <div class="left"><li> C (current solo study) </li></div>\
      <div class="left"><li> MathLab (current solo study) </li></div>\
<br>\
      <div class="left" id="bigger"><u> Others </u></div>\
      <br>\
      <div class="left"><li> The usual stuff (Word, Excel, Powerpoint, Canva etc) </li></div>\
      <div class="left"><li>Link to a ppt made for a class few years back : </li></div>\
<br>\
       <iframe class="left" width="560" height="315" src="https://www.youtube.com/embed/7ECiQSjC5Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\
       </div>\
    </ul>\
    </div></tr></body>\
  <tr>\
    <td></td>\
    <td></td>\
    <td></td>\
  </tr>'

  txt.innerHTML=txt1;

}
function webinfo(){

    let txt=document.getElementsByClassName("table table-hover")[0];
    
    let strin='<table class="table table-hover" id="changes">\
    <thead>\
      <tr>\
        <th>Emails</th>\
      </tr>\
    </thead>\
    <tbody>\
    <tr>\
                <td>Subject: Website Info</td>\
                <br><p id="bigger">  Made using : </p>\
                <td></td>\
                <td></td>\
              </tr>\
      </tbody></table><br>\
      \
      <div class="swatch">\
        <div><p>HTML</p><br><img id="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png?20110131171049"></div>\
        <div><p>CSS</p><br><img id="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png?20210705212817"></div>\
        <div><p>Javascript</p><br><img id="logos" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433"></div>\
        <div><p>JQuery</p><br><img id="logos" src="https://cdn.worldvectorlogo.com/logos/jquery-4.svg"></div>\
        <div><p>Git</p><br><img id="logos" src="https://git-scm.com/images/logos/logomark-orange@2x.png"></div>\
        <div><p>Bootstrap</p><br><img id="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png?20210507000024"></div>\
      </div>\
</div>'


      txt.innerHTML=strin;

      var stri=$(".table table-hover")[0];

}

function colorBackFunction(id) {
            
          
    id= '#' + id ;

    const element = document.querySelector(id);

    const el = document.querySelector(".buttonside_active");

    el.style.backgroundColor = 'white';

    el.classList.replace("buttonside_active", "buttonside");
        
    element.style.backgroundColor = "#a5dfe4";

    element.classList.replace("buttonside", "buttonside_active");

if (id=="#four"){

    location.replace("contact.html");
         }

         if (id=="#two"){

            location.replace("tech.html");
                 }

                 if (id=="#three"){

                    location.replace("school.html");
                         }


if (id=="#one"){

    location.replace("index.html");
         }

        }
    
        

        function cvfunc(){
            let txt=document.getElementsByClassName("table table-hover")[0];
            let stri='<p id="bigger"><b>NOTE: </b>You need to log in</p><br><p>You can also click on Contact Section for LinkedIn or <a href="contact.html"> click here <img id="logo7" src="https://brand.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png"/> </a> </p><br><p>Using Gmail (vennilasooben.pro@gmail.com): </p><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vennilasooben.pro@gmail.com">Click here\
            <img id="logo5"src="https://static-00.iconduck.com/assets.00/gmail-icon-512x511-fih5xfbp.png"/></a>\
            <br><br> <p> Using Outlook (vennila.sooben@umontreal.ca): </p><a href="https://outlook.live.com/mail/0/deeplink/compose?to=vennila.sooben@umontreal.ca">Click here\
            <img id="logo6" src="https://download.logo.wine/logo/Microsoft_Outlook/Microsoft_Outlook-Logo.wine.png"/></a>'
           
            txt.innerHTML=stri;
        }


        function linkedin(){

          let txt=document.getElementsByClassName("table table-hover")[0];

          let stri='<a href="https://www.linkedin.com/in/vennilasooben"></a>'

          $( document ).ready(function() {
            window.location.replace("https://www.linkedin.com/in/vennilasooben");
        });


        }