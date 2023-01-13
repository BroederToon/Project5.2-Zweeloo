# Git

## Branch namen

-   lower case met een "-" ertussen
    -   dit-is-een-voorbeeld

## Commits

-   commits worden in het engels geschreven

# Code

## Generaal

-   code wordt in het engels geschreven

-   folder namen worden in lowercase geschreven en zo kort mogelijk gehouden. alleen wanneer de leesbaarheid er anders onder lijdt, kan de naam opgedeeld worden met punten

    -   mypackage
    -   stichting.kunstenaarsdorp.zweeloo.components

-   .js files zijn in snack_case
    -   dit_is_een_voorbeeld.js

## Stylesheets

-   stylesheets altijd een aparte file
-   elke property en value paar een eigen regel

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

-   een custom component wordt gedefineerd als function, niet als een class

```
//good
CustomComponent = (props) =>(
    return()
);

export default CustomComponent;

//bad
class CustomComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return()
    }
}

export default CustomComponent;
```

### properties

-   Wanneer de properties van een component niet op 1 lijn passen, krijgen ze allemaal een eigen lijn

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

-   property namen worden in camelCase geschreven

```
fontSize: 1
```

### overig

-   statements eindigen met ;

-   een code block wordt geopend op dezelfde regel.

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

-   tussen verschillende methode declaraties 1 witregel
-   geen dode code (let op ongebruikte imports)
