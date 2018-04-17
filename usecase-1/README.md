## FFD - opdracht 1

In de eerste les kregen we de keuze uit 4 usecases om uit te werken tot een prototype: 

- **Als ik een lijst films heb gevonden, wil ik leuke films kunnen opslaan om ze thuis te ....**

- In een lijst gevonden studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is.

- In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een vette playlist te maken.

- Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen.

Ik heb gekozen voor de eerste use case. Hierbij maak ik gebruik van html, css en javascript om een prototype te maken.

#### Hoe werkt het?

Allereerst ben ik gaan schetsen hoe mijn lijst met films eruit moest komen te zien. Daarna heb ik het design in Sketch verder uitgewerkt. De funtie is optimaal uitgewerkt voor mobile en werkt responsive (met meerdere films in de code ziet hij er beter uit op desktop).


![alt text](img/heartred.png "schets design opdracht 1")

Bovenin het scherm staat de titel, films, deze wordt gevolgd door het "menu" (in html) die de kopjes 'ALLES' en 'WATCHLIST' bevat. Alles is de pagina waar je binnenkomt, met alle films verdeeld in genres. Watchlist is waar de gebruiker de films zou moeten kunnen opslaan en terugvinden. Het daadwerkelijke opslaan is niet uitgewerkt maar wel de actie zodat de gebruiker de interactie kan uitvoeren om een film te liken en de feedback die de gebruiker krijg wanneer hij een film heeft geliked. 
In het gemaakte prototype staan op het moment 3 film genres die elk 5 films bevatten. Hier kunnen meer genres en meer films worden toegevoegd. In elk genre kan de gebruiker horizontaal door de films scrollen (gemaakt in css). 


#### Afbeeldingen plaatsen

Ik dacht eerst dat ik elk kopje voor een filmgenre kon volgen met een pharagraph met albeeldingen erin, maar zag al snel dat dit niet werkte zoals ik wilde.

Het dit toen met een unordered list opgevangen in een div. Hierdoor kon ik het anders aanroepen in CSS, waardoor het scrollen mogelijk werd, met behulp van http://www.websitecodetutorials.com/.

Ook wat kleine aanpassingen in lettertypen groottes voor goede hierarchie, kloppend bij het design.
