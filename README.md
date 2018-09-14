# Nullchecker 0.1.0

This library was created in order to avoid tedious null-check validations in js language.

**Contributors**

 - [Marcelo Junior](https://github.com/marceloadsj)

# Installation

**Yarn**

    $ yarn install nullchecker

**Npm**

    $ npm install nullchecker

# Sample usage passing nested properties as String

    let  person  = {
        name "Guilherme Costa",
        document: {
           type: "CPF",
           value: "00000000000"
        }
    }

    const _ = require("nullchecker"); 
    
    let name = _.get("document.value", person, "");
    console.log(name);
    // Guilherme Costa
    
    let invalidProperty = _.get("document.type.kind", person, "default value");
    console.log(invalidProperty);
    // default value
    

# Sample usage passing nested properties as Array

    let  person  = {
        name "Guilherme Costa",
        document: {
           type: "CPF",
           value: "00000000000"
        }
    }

    const _ = require("nullchecker"); 
    
    let name = _.get(["document", "value"], person, "");
    console.log(name);
    // Guilherme Costa




