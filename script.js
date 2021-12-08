
/*let exo = 0;
(combat1 = function() {
    exo++;
    goToChapter('cinetique');
}),
  (combat2 = function() {
      if (exo > 0) {
          goToChapter('victoire');
      } else {
          goToChapter('exomusclesending');
      }
  });*/


function trouverExo() {
    exoFounded = true;
    localStorage.setItem("exoFounded", exoFounded);
    console.log(localStorage.getItem("upgrades"));
    goToChapter('cinetique')
}

function perdreExo() {

    localStorage.setItem("exoFounded", exoFounded)
    console.log("allo")
    goToChapter('demarrage');
}

function PossedeExo() {
    console.log(exoFounded);
    if (exoFounded == true) {
        console.log("beatup")
        goToChapter('victoire');
    }
    else if (exoFounded == false) {
        goToChapter('exomusclesending');
    }
}

if (localStorage.getItem('exoFounded') != undefined) {
    exoFounded = true;
}
else {
    exoFounded = false;
}
function reset() {
    localStorage.clear();
    exoFounded = false;

    console.log("reset")
    goToChapter('demarrage');
}








let chaptersObj = {
    demarrage: {
        subtitle: "Démarrage ",
        text: `Réveil dans la société humaine.Mission: mener une vie ''convenable'', en ne laissant pas les humains découvrir votre nature de robot. Première étape: une source de revenus stables. `,
        img: "assets/img/accueil.jpg",
        option: [
            {
                text: "Travailler comme caissier",
                action: "goToChapter('clientending')"
            },
            {
                text: "Poste recherche artificielle",
                action: "goToChapter('developpement')"
            },
            {
                text: "Combats clandestins",
                action: "goToChapter('clandestinending')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    clientending: {
        subtitle: "Manque de naturel",
        text: "Un client remarque votre manque de naturel, et devine votre nature. Game Over.",
        img: "assets/img/etonnement.jpg",
        option: [
            {
                text: "Effacer ma partie",
                action: "reset()"

            }

        ]
    },
    clandestinending: {
        subtitle: "Blessures",
        text: "Suite aux blessures, le public remarque que vous ne saignez pas! Vous êtes arrêté et démonté par les autorités. Game over. ",
        img: "assets/img/police.jpg",
        video: "assets/video/police.mp4",
        option: [
            {
                text: "Effacer ma partie",
                action: "reset()"

            }

        ]
    },

    developpement: {
        subtitle: "Vous êtes engagé",
        text: "Vous obtenez un poste dans le domaine du développement d'I.A., où votre nature pourra facilement passer inaperçue.",
        img: "assets/img/job.jpg",
        option: [
            {
                text: "Réunion avec patron",
                action: "goToChapter('verre')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    verre: {
        subtitle: "Un verre à boire",
        text: "Votre supérieur vous invite à boire un verre. Les risques qu'il découvre votre nature à votre contact sont grands. Néanmoins, Votre carrière se joue également. ",
        img: "assets/img/drink.jpg",
        option: [
            {
                text: "Pas de verre",
                action: "goToChapter('pasdeverreending')"
            },
            {
                text: "Attitude festive",
                action: "goToChapter('festiveending')"
            },
            {
                text: "Attitude sobre",
                action: "goToChapter('sansaccroc')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    pasdeverreending: {
        subtitle: "Pas d'appreciation",
        text: "Votre employeur ne vous apprécie plus autant qu'avant, il ne mets que quelques semaines pour se débarrasser de vous. Game Over. ",
        img: "assets/img/fired.jpg",
        option: [
            {
                text: "Effacer ma partie",
                action: "reset()"

            }

        ]
    },
    festiveending: {
        subtitle: "Manque de chance",
        text: "Votre boss s'est trop pris au jeu, vous renversant de l'alcool sur votre corps, provoquant un court-circuit. Game Over. ",
        img: "assets/img/circuit.jpg",
        option: [
            {
                text: "Effacer ma partie",
                action: "reset()"

            }

        ]
    },
    sansaccroc: {
        subtitle: "Soirée réussie",
        text: "La soirée se déroule sans accroc, vous raccompagnez votre boss en taxi.",
        img: "assets/img/taxi.jpg",
        option: [
            {
                text: "Améliorations du corps",
                action: "goToChapter('upgrades')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    upgrades: {
        subtitle: "Boost de performances",
        text: "Vous avez besoin d'effectuer des améliorations à votre corps, en vue de futures situations. Vos revenus ne vous permettent que de choisir 1 option: ",
        img: "assets/img/knowledge.jpg",
        video: "assets/video/hub.mp4",
        option: [
            {
                text: "Améliorer performances physiques",
                action: "trouverExo()"
            },
            {
                text: "Améliorer votre A.I. ",
                action: "goToChapter('intelligence')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    cinetique: {
        subtitle: "Meilleur mouvement",
        text: "Vous décidez de vous fabriquer des exo-muscles, augmentant la force et l'énergie cinétique produite par votre corps. ",
        img: "assets/img/cinetique.jpg",
        option: [
            {
                text: "Upgrades up to date",
                action: "goToChapter('rendement')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    intelligence: {
        subtitle: "Meilleures formules math",
        text: "Vous déterminez que vous pourrez booster votre A.I. à l'aide de meilleures formules mathématiques. Vous partez donc en voyage de 2 semaines à Singapour, ville ou les meilleurs mathématiciens résident. Votre A.I. est maintenant 8x plus performante. ",
        img: "assets/img/singapour.jpg",
        option: [
            {
                text: "Upgrades up to date",
                action: "goToChapter('rendement')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    rendement: {
        subtitle: "Miscalculation",
        text: "Votre corps maintenant plus performant, vous améliorez progressivement votre rendement personnel. Vous possédez également de plus amples connaissances pour vous dissimuler des humains. Néanmoins...",
        img: "assets/img/surprise.jpg",
        option: [
            {
                text: "Surprise",
                action: "goToChapter('attaque')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    attaque: {
        subtitle: " Fâcheux imprévu",
        text: "Un robot vous attaque sur la ruelle du chemin du retour! Il affirme vous avoir observé un certain temps avant de découvrir votre identité. Vous ne pouvez le laisser en liberté ! Néanmoins, il a l'air doté de plus de force que vous.",
        img: "assets/img/fight.jpg",
        option: [
            {
                text: "Moment de vérité",
                action: "goToChapter('exomuscles')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    exomuscles: {
        subtitle: "showdown",
        text: `Possédez-vous des exomuscles? `,
        img: "assets/img/exomuscles.jpg",
        option: [
            {
                text: "Non",
                action: "PossedeExo()"
            },
            {
                text: "Oui",
                action: "PossedeExo()"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    exomusclesending: {
        subtitle: "Blessures",
        text: "Votre A.I. ne suffit pas pour le ruser dans ce combat. Il vous mets rapidement hors-service. Game Over. ",
        img: "assets/img/destroyed.jpg",
        option: [
            {
                text: "Effacer ma partie",
                action: "reset()"

            }

        ]
    },
    victoire: {
        subtitle: "Bon raisonnement!",
        text: "Bien que le robot ennemi possède une A.I. semblable à la votre, vos exo-muscles entrent en jeu ! 2 coups de poings suffisent à détruire son processeur, et vous vous débarrassez de son corps. ",
        img: "assets/img/poings.jpg",
        option: [
            {
                text: "État de la mission",
                action: "goToChapter('fin')"
            },
            {
                text: "Effacer ma partie",
                action: "reset()"

            }
        ]
    },
    fin: {
        subtitle: "Mission accomplie",
        text: "Vous possédez un revenu stable, des moyens d'améliorer votre corps, et votre A.I est assez performante pour continuer à tromper les humains sur votre véritable nature. Vous vivez donc une vie convenable, et votre mission est une totale réussite .  ",
        img: "assets/img/fin.jpg",
        option: [
            {
                text: "Effacer ma partie",
                action: "reset()"

            }

        ]
    }
};






function goToChapter(chapterName) {
    let chapters = chaptersObj[chapterName];
    let subtitles = document.querySelector('h2')
    subtitles.innerHTML = chapters.subtitle;
    let text = document.querySelector('p')
    text.innerHTML = chapters.text;
    let img = document.querySelector('img')
    let video = document.querySelector('.parentImage')






    let butt = document.querySelector('.troisB')
    let opFin = "";
    let opArr = chapters.option;

    for (let index = 0; index < opArr.length; index++) {
        let choix = opArr[index];
        opFin += `<button class="button" onclick="${choix.action}">${choix.text}</button>`;
    }
    butt.innerHTML = opFin;



    let parentImage = document.querySelector('.parentImage');
    if (chapters.video == 'assets/video/police.mp4') {
        parentImage.innerHTML = "<video src='assets/video/police.mp4' autoplay='autoplay' loop='true' muted='true'> </video>";
    };
    if (chapters.video == 'assets/video/hub.mp4') {
        parentImage.innerHTML = "<video src='assets/video/hub.mp4' autoplay='autoplay' loop='true' muted='true' > </video>";
    };

    if (chapters.video == undefined) {
        parentImage.innerHTML = `<img src="${chapters.img}"> </img>`;
    };



    localStorage.setItem("chapters", chapterName);
    console.log(localStorage.getItem('chapters'))



    const body = document.querySelector('body');
    body.className = chapterName;





};




console.log(localStorage.getItem('chapters'))

if (localStorage.getItem('chapters') != undefined) {
    goToChapter(`${localStorage.getItem('chapters')}`)
}
else {
    goToChapter('demarrage')
}






if (localStorage.getItem("upgrades") != undefined) {
    console.log(localStorage.getItem("upgrades"));
    exoFounded = localStorage.getItem("upgrades");
    console.log(exoFounded);
}





let caseCocher = document.querySelector('.case');
let caseSon = true;

caseCocher.addEventListener('change', function () {

    caseSon = caseCocher.checked;
    if (caseSon = caseCocher.checked) {
        caseSon = true;
    }
    else {
        caseSon = false;
    }
    console.log("case");
})



let butt = document.querySelector('.troisB')
const body = document.querySelector('body')


butt.onclick = function () {
    // body.classList.add('play');
    localStorage.setItem('case_Son', caseSon);
    const son = new Audio('assets/video/robot.mp3');
    if (caseSon == true) {
        son.play();
    }
};





