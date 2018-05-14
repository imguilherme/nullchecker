# Nullcheck

This library was created in order to avoid a lot of null check validations in js language.

**Contributors**

 - [Marcelo Junior](https://github.com/marceloadsj)

# Installation

**Yarn**

    $ yarn install nullchecker

**Npm**

    $ npm install nullchecker

# Sample usage

    let  person  = {
        name "Guilherme Costa",
        document: {
           type: "CPF",
           value: "08002424913"
        }
    }
    
    const _ = require("nullchecker"); 
    
    let name = _.get("document.value", person, "");
    console.log(name);
    // Guilherme Costa
    
    let invalidProperty = _.get("document.type.kind", person, "default value");
    console.log(invalidProperty);
    // default value
    







