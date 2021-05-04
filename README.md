# GROUPIE_TRACKER


Travail de groupe :  Tao / Elouan / Kévin / Mathis

Le lien du github de notre projet : https://github.com/ByMSRT/GROUPIE_TRACKER


1) [Le projet](#projet)
2) [Son intérêt](#interet)
3) [Son utilisation](#utilisation)
4) [Les détails de notre code](#detail)
5) [La répartition du travail entre nous](#reparti)
4) [Ce qu'on aurait pu améliorer](#ameliorer)


## Le projet : <a id="projet"></a>


C'est un travail de groupe dans lequel nous avons dû coder en JavaScript, en Golang, en HTML et en CSS. Le but était de créer un site web permettant à n'importe quel individu, de rechercher des informations sur le groupe de musique de leur choix. La liste des groupes avec leurs informations est stocké dans un fichier JSON qu'il fallait parcourir afin de réutiliser les informations. Nous avions 3 semaines pour réaliser le maximum de fonctions demandés parmis celle-ci :

- ***Fetching the Data***   
    - L'utilisation d'un API pour le site web.
- ***Display***
    - Affichage des informations avec le choix du nombre de résultats afficher sur la page et un système de navigation entre les pages.
- ***Search***
    - Recherche interactives des héros via leurs noms.
- ***Sort***
    - Un tri dans l'ordre croissant ou décroissant des héros par rapport à la caractéristique choisi.
- ***Speed*** 
    - Enfin, le site ne doit pas être trop charger et lent. Nous sommes des vilains et nous agissons rapidement.


## Son intérêt : <a id="interet"></a>


Lorsqu'on a des concerts auxquels on souhaite assister, on ne peut pas se permettre de perdre son temps à chercher n'importe où sur internet! Ce site permet de remédier à cette entrave, et fait gagner beaucoup de temps à nous autres, fans de musique. Il nous permet de retrouver des groupes en fonction de: leur nom, leur date de création, le nom de leurs membres, et la date de sortie de leur premier album !
De plus, si vous souhaitez vous préparer pour le prochain concert de votre groupe numéro 1, mais que vous avez besoin d'informations sur la sate et le lieu, et bien c'est possible, grâce aux informations répertoriés sur le site, en plus de la carte qui y est intégrée !


## Son utilisation : <a id="utilisation"></a>


Notre site est créé de manière ergonomique et simple à prendre en main.

Une fois arrivé sur le site, vous pouvez comme bon vous semble monter et descendre dans la liste des des groupes pour connaitres leurs caractéristiques 
![image](https://media.discordapp.net/attachments/408320873876160522/839029999205613578/unknown.png?width=1440&height=635)

En revanche, si vous souhaitez faire des recherches plus ciblés, cliquez sur les différentes options qui vous intéresse:

![image](https://cdn.discordapp.com/attachments/408320873876160522/839029623617617930/unknown.png)

Ensuite, choisissez le numéro de la page que vous souhaiter vérifier, dans le cas où il y aurait trop de résultats:
![image](https://media.discordapp.net/attachments/408320873876160522/829392050461868042/image0.png)

Et voila, vous avez maintenant toute les informations que vous désirez !

![image](https://media.discordapp.net/attachments/408320873876160522/829392426833412126/unknown.png?width=1440&height=140)

 (sauf apparement la race de Chuck Norris, que personne connait à ce jour)


## Les détails de notre code : <a id="detail"></a>

Notre code se compose en 3 parties : la partie html, la partie css, et la partie js. Les voici expliquées avec plus de détails :

index.html : Ce fichier permet de donner l'apparence voulue au site. 


style.css : Stylisé la page web.


main.js : 


* function SizeDefault : sa présence fait en sorte que le nombre de résultat affiché par défault soit toujours le même (ici 20)

* function SizePage : elle permet de changer le nombre de résultats affiché

* function sort : elle permet a l'utilisateur de pouvoir ranger les résultat par ordre voulu (ordre alphabétique ou numérique de la colonne voulue)

* function item : fonction qui fait fonctionner sort en récupèrant la colonne voulu pour trier dessus.




## La répartition du travail entre nous : <a id="reparti"></a>

Sort : Mathis et Kevin

Fetch : Mathis et Kevin

Search : Tao et Elouan

Display : Tao et Elouan

HTML & CSS : Kévin et Elouan

README : Mathis et Tao

## Ce qu'on aurait pu améliorer : <a id="ameliorer"></a>

* Approfondir la fonction SORT

* Une fonction pagination