# Git
## Branch namen
- lower case met een "-" ertussen
    - dit-is-een-voorbeeld

## Commits
- commits worden in het nederlands geschreven

# Code
## Generaal
- code wordt in het engels geschreven

- folder namen worden in lowercase geschreven en zo kort mogelijk gehouden. alleen wanneer de leesbaarheid er anders onder lijdt, kan de naam opgedeeld worden met punten
    - mypackage
    - stichting.kunstenaarsdorp.zweeloo.components

- .js files zijn in PascalCase
    - DitIsEenVoorbeeld.js

## Stylesheets
- stylesheets altijd een aparte file
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

## React Native
### Components
- iedere custom component wordt gedefinieerd in een eigen file
- de file van een custom component heeft dezelfde naam als de custom component
- een custom component wordt gedefineerd als classe, niet als een function
```
//bad
export default CustomComponent = (props) =>(
    return()
);

//good
export default class CustomComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return()
    }
}
```
### properties
- Wanneer de properties van een component niet op 1 lijn passen, krijgen ze allemaal een eigen lijn
```
//bad
<CustomText color= {'green'}
    size= {5}/>

//good
<CustomText 
    color= {'green'}
    size= {5}
/>

//good
<CustomText color={'green'}/>
```
- property namen worden in camelCase geschreven
```
fontSize: 1
```
### overig
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