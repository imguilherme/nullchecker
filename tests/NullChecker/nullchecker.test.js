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
            value: "08002424913"
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


test('check a null object', () => {
    let person = {}
    expect(_.get("documents.type", person, false)).toBe(false);
});


