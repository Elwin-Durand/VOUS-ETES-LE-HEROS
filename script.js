/*
let caissier = {
    text: "Travailler comme caissier",
    action: "goToChapter(clientending)",
}

let rechercheur = {
    text: "Poste recherche artificielle",
    action: "goToChapter(developpement)",
}

let clandestins = {
    text: "Combats clandestins",
    action: "goToChapter(clandestinending)"
}

let demarrage = {
    subtitle: "trouver un emploi",
    text: `Réveil dans la société humaine .Mission: mener une vie ''convenable'', en ne pas laissant pas les humains découvrir votre nature de robot `,
    img: "assets/img/demarrage.jpg",
    option: [caissier, rechercheur, clandestins]
}

let clientending = {
    subtitle: "manque de naturel",
    text: `Un client remarque votre manque de naturel, et devine votre nature `,
    img: "assets/img/etonnement.jpg",
    option: [gameover],
}

let clandestinending = {
    subtitle: "blessures",
    text: `Suite aux blessures, le public remarque que vous ne saignez pas! Vous êtes arrêté et démonté par les autorités `,
    img: "assets/img/police.jpg",
    option: [gameover],
}

let recommencer = {
    text: "recommencer",
    action: "goToChapter(demarrage)",
}

let gameover = {
    subtitle: "fin",
    text: `Votre aventure est terminee`,
    option: [recommencer],
}

let developpement = {
    text: "Vous obtenez un poste dans le domaine du développement d'I.A., où votre nature pourra facilement passer inaperçue",
    option: [stable],
}

let stable = {
    text: "Vous possédez un afflux d'argent stable, vous permettant de subvenir à vos besoins essentiels (logement, équipement de maintenance, etc) ",
    option: [proposition],
}




let pasdeverre = {
    text: "Refus",
    action: "goToChapter(pasdeverreending)",
}

let sobre = {
    text: "Accepter avec une attitude sobre",
    action: "goToChapter(sansaccroc)",
}

let festive = {
    text: "Combats clandestins",
    action: "goToChapter(festiveending)"
}

let proposition = {
    subtitle: "Un verre a boire",
    text: `Votre supérieur vous invite à boire un verre. Les risques qu'il decouvre votre nature a votre contact sont grands. Neanmoins, Vos carrieres se joue egalement.  `,
    img: "assets/img/drink.jpg",
    option: [pasdeverre, sobre, festive],

}

let pasdeverreending = {
    subtitle: "pas d'appreciation",
    text: `Votre employeur ne vous apprécie plus autant qu'avant, il ne mets que quelques semaines pour se débarrasser de vous `,
    img: "assets/img/fired.jpg",
    option: [gameover],
}

let festiveending = {
    subtitle: "Manque de chance",
    text: `Votre boss s'est trop pris au jeu, vous renversant de l'alcool sur votre corps, provoquant un court-circuit. `,
    img: "assets/img/circuit.jpg",
    option: [gameover],
}

let sansaccroc = {
    text: "La soirée se déroule sans accroc, vous raccompagnez votre boss en taxi",
    option: [ameliorations],
}




let clefoui = {
    text: "Ameliorer performances physiques",
    action: "goToChapter(cinetique)",
}

let clefnon = {
    text: "Ameliorer A.I. ",
    action: "goToChapter(voyage)",
}





let ameliorations = {
    subtitle: "ameliorations du corps",
    text: `Vous avez besoin d'effectuer des améliorations à votre corps, en vue de futures situations. Vos revenus ne vous permettent que de choisir 1 option `,
    img: "assets/img/knowledge.jpg",
    option: [clefoui, clefnon],

}

let cinetique = {
    subtitle: "Meilleure energie cinetique",
    text: `Vous décidez de vous fabriquer des exo-muscles, augmentant la force et l'énergie cinétique produite par votre corps `,
    img: "assets/img/cinetique.jpg",
    option: [neanmoinsoui],
}

let neanmoinsoui = {
    text: "Votre corps maintenant plus performant, vous améliorez progressivement votre rendement personnel. Vous possédez également de plus amples connaissances pour vous dissimuler des humains. Néanmoins...",
    action: "goToChapter(attaqueoui)",
}

let attaqueoui = {
    text: "Un robot vous attaque sur la ruelle du chemin du retour! Il affirme vous avoir observé un certain temps avant de découvrir votre identité. Vous ne pouvez le laisser en liberté ! Néanmoins, il a l'air doté de plus de force que vous.",
    action: "goToChapter(exomusclesoui)",
}

let possedeexomuscles = {
    text: "Oui",
    action: "goToChapter(combatvictoire)",
}

let exomusclesoui = {
    subtitle: "moment de verite",
    text: `Possedez vous des exomuscles? `,
    img: "assets/img/exomuscles.jpg",
    option: [possedeexomuscles],
}



let combatvictoire = {
    subtitle: "Bon raisonnement!",
    text: `Bien que le robot ennemi possède une A.I. semblable à la votre, vos exo-muscles rentrent en jeu ! 2 coups de poings suffisent à détruire son processeur, et vous vous débarrassez de son corps. `,
    img: "assets/img/poings.jpg",
    option: [fin],
}

let voyage = {
    subtitle: "Meilleures formules math",
    text: `Vous déterminez que vous pourrez booster votre A.I. à l'aide de meilleures formules mathématiques. Vous partez donc en voyage de 2 semaines à Singapour, ville ou les meilleurs mathématiciens résident. Votre A.I. est maintenant 8x plus performante `,
    img: "assets/img/singapour.jpg",
    option: [neanmoinsnon],
}

let neanmoinsnon = {
    text: "Votre corps maintenant plus performant, vous améliorez progressivement votre rendement personnel. Vous possédez également de plus amples connaissances pour vous dissimuler des humains. Néanmoins...",
    action: "goToChapter(attaquenon)",
}

let attaquenon = {
    text: "Un robot vous attaque sur la ruelle du chemin du retour! Il affirme vous avoir observé un certain temps avant de découvrir votre identité. Vous ne pouvez le laisser en liberté ! Néanmoins, il a l'air doté de plus de force que vous.",
    action: "goToChapter(exomusclesnon)",
}

let pasexomuscles = {
    text: "Non",
    action: "goToChapter(combatending)",
}


let exomusclesnon = {
    subtitle: "moment de verite",
    text: `Possedez vous des exomuscles? `,
    img: "assets/img/exomuscles.jpg",
    option: [pasexomuscles],
}

let combatending = {
    subtitle: "blessures",
    text: `Votre A.I. ne suffit pas pour le ruser dans ce combat. Il vous mets rapidement hors-service.  `,
    img: "assets/img/destroyed.jpg",
    option: [gameover],
}


let fin = {
    subtitle: "Mission accomplie",
    text: `Vous possédez un revenu stable, des moyens d'améliorer votre corps, et votre A.I est assez performante pour continuer à tromper les humains sur votre véritable nature. Vous vivez donc une ''vie convenable'', votre mission est donc une totale réussite .  `,
    img: "assets/img/fin.jpg",
}*/


let exo = 0;
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
  });





let chaptersObj = {
     demarrage: {
        subtitle: "Démarrage",
        text: `Réveil dans la société humaine.Mission: mener une vie ''convenable'', en ne pas laissant pas les humains découvrir votre nature de robot `,
        img: "assets/img/accueil.jpg",
        option: [
            {
                text:  "Travailler comme caissier",
                action: "goToChapter('clientending')"
            },
            {
                text: "Poste recherche artificielle",
                action: "goToChapter('developpement')"
            },
            {
                text: "Combats clandestins",
                action: "goToChapter('clandestinending')"
            }
        ]
    },
    clientending: {
        subtitle: "Manque de naturel",
        text: "Un client remarque votre manque de naturel, et devine votre nature. Game Over.",
        img: "assets/img/etonnement.jpg",
        option: [

        ]
    },
    clandestinending: {
        subtitle: "Blessures",
        text: "Suite aux blessures, le public remarque que vous ne saignez pas! Vous êtes arrêté et démonté par les autorités. Game over. ",
        img: "assets/img/police.jpg",
        option: [

        ]
    },

    developpement: {
        subtitle: "Vous êtes engagé",
        text: "Vous obtenez un poste dans le domaine du développement d'I.A., où votre nature pourra facilement passer inaperçue.",
        img: "assets/img/job.jpg",
        option: [
            {
                text: "réunion avec patron",
                action: "goToChapter('verre')"
            }
        ]
    },
    verre: {
        subtitle: "Un verre à boire",
        text: "Votre supérieur vous invite à boire un verre. Les risques qu'il découvre votre nature à votre contact sont grands. Néanmoins, Votre carrière se joue également. ",
        img: "assets/img/drink.jpg",
        option: [
            {
                text: "pas de verre",
                action: "goToChapter('pasdeverreending')"
            },
            {
                text: "attitude festive",
                action: "goToChapter('festiveending')"
            },
            {
                text: "attitude sobre",
                action: "goToChapter('sansaccroc')"
            }
        ]
    },
    pasdeverreending: {
        subtitle: "Pas d'appreciation",
        text: "Votre employeur ne vous apprécie plus autant qu'avant, il ne mets que quelques semaines pour se débarrasser de vous. Game Over. ",
        img: "assets/img/fired.jpg",
        option: [

        ]
    },
    festiveending: {
        subtitle: "Manque de chance",
        text: "Votre boss s'est trop pris au jeu, vous renversant de l'alcool sur votre corps, provoquant un court-circuit. Game Over. ",
        img: "assets/img/circuit.jpg",
        option: [

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
            }
        ]
    },
    upgrades: {
        subtitle: "Boost de performances",
        text: "Vous avez besoin d'effectuer des améliorations à votre corps, en vue de futures situations. Vos revenus ne vous permettent que de choisir 1 option: ",
        img: "assets/img/knowledge.jpg",
        option: [
            {
                text: "Améliorer performances physiques",
                action: "combat1()"
            },
            {
                text: "Améliorer votre A.I. ",
                action: "goToChapter('intelligence')"
            }
        ]
    },
    cinetique: {
        subtitle: "Meilleur mouvement",
        text: "Vous décidez de vous fabriquer des exo-muscles, augmentant la force et l'énergie cinétique produite par votre corps. ",
        img: "assets/img/cinetique.jpg",
        option: [
            {
                text: "upgrades up to date",
                action: "goToChapter('rendement')"
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
                action: "combat2()"
            },
            {
                text: "Oui",
                action: "combat2()"
            }
        ]
    },
    exomusclesending: {
        subtitle: "Blessures",
        text: "Votre A.I. ne suffit pas pour le ruser dans ce combat. Il vous mets rapidement hors-service. Game Over. ",
        img: "assets/img/destroyed.jpg",
        option: [

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
            }
        ]
    },
    fin: {
        subtitle: "Mission accomplie",
        text: "Vous possédez un revenu stable, des moyens d'améliorer votre corps, et votre A.I est assez performante pour continuer à tromper les humains sur votre véritable nature. Vous vivez donc une vie convenable, et votre mission est une totale réussite .  ",
        img: "assets/img/fin.jpg",
        option: [

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
    img.src = chapters.img;



    let butt = document.querySelector('.troisB')
    let opFin = "";
    let opArr = chapters.option;

    for (let index = 0; index < opArr.length; index++) {
        let choix = opArr[index];
        opFin += `<button onclick="${choix.action}">${choix.text}</button>`;
    }
    butt.innerHTML = opFin;
  
};

goToChapter("demarrage");



