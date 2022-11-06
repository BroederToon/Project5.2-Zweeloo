# Git
### Branch namen
- lower case met een "-" ertussen\
    - dit-is-een-voorbeeld

### Commits
- commits worden in het nederlands geschreven

# Code
### Generaal
- code wordt in het engels geschreven\

- package namen worden in lowercase geschreven en zo kort mogelijk. alleen wanneer de leesbaarheid er anders onder lijdt, kan de naam opgedeeld worden met punten
    - mypackage
    - stichting.kunstenaarsdorp.zweeloo.components

- .js files zijn in PascalCase\
    - DitIsEenVoorbeeld.js

### Stylesheets
- stylesheets altijd een aparte file\
- elke property en value paar een eigen regel
```
.voorbeeld{
    background-color: black;
    color: white;
}
```
deel de stylesheet op doormiddel van comments
```
/* Header and Main Navigation */
...

/* SideBar */
...
```
indien standaard html tags gestyled worden, staan deze bovenaan in de stylesheet\
```
body{
    ...
}

ul{
    ...
}

.customClass{
    ...
}
```

### Code
- statements eindigen met ;

- een code block wordt geopend op dezelfde regel.
```
if(condition){
    ...
}

VS

if(condition)
{
    ...
}
```
- tussen verschillende methode declaraties 1 witregel