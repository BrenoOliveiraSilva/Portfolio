var style = 'display: initial; margin-top: 350px; opacity: initial; transition: .5s;';
var skill = document.getElementById('skillText');
var styleNone = 'opacity: 0; transition: .5s;';
var verificationHtml = false;
var verificationCss = false;
var verificationJs = false;
var verificationJava = false;

function skillHTML() {
    skill.innerHTML='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.';
    if (verificationHtml == false) {
        skill.style=style;
        verificationHtml = true;
        // turn false
        verificationCss = false;
        verificationJs = false;
        verificationJava = false;
    } else {
        skill.style=styleNone;
        verificationHtml = false;
    }
}
function skillCSS() {
    skill.innerHTML='Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.';
    if (verificationCss == false) {
        skill.style=style;
        verificationCss = true;
        // turn false
        verificationHtml = false;
        verificationJs = false;
        verificationJava = false;
    } else {
        skill.style=styleNone;
        verificationCss = false;
    }
}
function skillJS() {
    skill.innerHTML='JavaScript, often abbreviated to JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.';
    if (verificationJs == false) {
        skill.style=style;
        verificationJs = true;
        // turn false
        verificationHtml = false;
        verificationCss = false;
        verificationJava = false;
    } else {
        skill.style=styleNone;
        verificationJs = false;
    }
}
function skillJava() {
    skill.innerHTML='Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.';
    if (verificationJava == false) {
        skill.style=style;
        verificationJava = true;
        // turn false
        verificationHtml = false;
        verificationCss = false;
        verificationJs = false;
    } else {
        skill.style=styleNone;
        verificationJava = false;
    }
}

// Scroll Reveal
window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.bubbles', {
    delay: 500,
    opacity: 0
});

ScrollReveal().reveal('.homeContent', {
    delay: 250,
    rotate: {
        x:100,
        y: 0,
        z: 0
    }
});
ScrollReveal().reveal('.aboutMeContent', {
    delay: 250,
    rotate: {
        x:100,
        y: 0,
        z: 0
    }
});
ScrollReveal().reveal('.skillsContent', {
    delay: 250,
    rotate: {
        x:100,
        y: 0,
        z: 0
    }
});
ScrollReveal().reveal('.skillsImages', {
    delay: 500,
    scale: 0.4,
});
ScrollReveal().reveal('#skillText', {
    delay: 500,
    scale: 0
});