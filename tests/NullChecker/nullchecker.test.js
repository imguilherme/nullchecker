const _ = require('../../NullChecker');


test('check a simple object', () => {
    let person = {
        name: "Guilherme"
    }
    expect(_.get("name", person)).toBe("Guilherme");
});


test('check a simple nested object', () => {
    let person = {
        name: "Guilherme",
        documents: {
            type: "CPF",
            value: "0000000000"
        }
    }
    expect(_.get("documents.type", person, "")).toBe("CPF");
});


test('check a mega nested object', () => {
    let person = {
        name: "Guilherme",
        address: {
            type:{
                name: "billing",
            },
            state : {
                name: "UF",
                status: {
                    active: false
                }
            }
        }

    }
    expect(_.get("address.state.status.active", person, "")).toBe(false);
});


test('check a null object with default value', () => {
    let person = {}
    expect(_.get("documents.type", person, false)).toBe(false);
});


test('check a object passing an array of nested properties', () => {
    let person = {
        document: {
            type: 'CPF'
        }
    }
    expect(_.get(["document", "type"], person, '')).toBe("CPF");
});

test('check a object passing an empty array', () => {
    let person = {
        document: {
            type: 'CPF'
        }
    }
    expect(_.get([], person, '')).toBe("");
});


test('check a object passing an empty string', () => {
    let person = {
        document: {
            type: 'CPF'
        }
    }
    expect(_.get('', person, '')).toBe("");
});
