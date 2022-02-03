var data = 
{
    "title": "In the forest",
    "data": {
        "stitches": {
            "loTerminasMatand": {
                "content": [
                    "Lo terminas matando y agarras su carne (+35 de comida)"
                ]
            },
            "teDespiertasEnUn": {
                "content": [
                    ".Te despiertas en un bosque sin saber nada-donde estoy? Te preguntas, luego te da hambre, abres tu mochila y hay una barrita",
                    {
                        "option": "Comerla",
                        "linkPath": "teLlenasMuyBienY",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "option": "No comerla",
                        "linkPath": "teMueresDeHambre",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "pageNum": 1
                    }
                ]
            },
            "teLlenasMuyBienY": {
                "content": [
                    "Te llenas muy bien y te vas a dormir",
                    {
                        "option": "Siguiente dia",
                        "linkPath": "unLoboApareciCer",
                        "ifConditions": null,
                        "notIfConditions": null
                    }
                ]
            },
            "teMueresDeHambre": {
                "content": [
                    "Te mueres de hambre al día siguiente"
                ]
            },
            "unLoboApareciCer": {
                "content": [
                    "Un lobo apareció cerca de tu campamento ",
                    {
                        "option": "Atcarlo",
                        "linkPath": "loMatasComida",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "option": "Huir",
                        "linkPath": "elLoboEsMsRpidoY",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "pageNum": 2
                    }
                ]
            },
            "loMatasComida": {
                "content": [
                    "Lo matas (+30 comida)",
                    {
                        "option": "Comes (-10 comida) Y día siguiente",
                        "linkPath": "estsAburrido",
                        "ifConditions": null,
                        "notIfConditions": null
                    }
                ]
            },
            "elLoboEsMsRpidoY": {
                "content": [
                    "El lobo  es más rápido y te alcanza mueres ante el",
                    {
                        "option": "",
                        "linkPath": null,
                        "ifConditions": null,
                        "notIfConditions": null
                    }
                ]
            },
            "estsAburrido": {
                "content": [
                    "Estás aburrido",
                    {
                        "option": "Salir a pasear",
                        "linkPath": "encuentrasUnViej",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "option": "Quedarte (-40 moral)",
                        "linkPath": null,
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "pageNum": 3
                    }
                ]
            },
            "encuentrasUnViej": {
                "content": [
                    "Encuentras un viejo cuchillo (+40 armamento)",
                    {
                        "option": "Siguiente día (-10 comida)",
                        "linkPath": "escuchasUnLadrid",
                        "ifConditions": null,
                        "notIfConditions": null
                    }
                ]
            },
            "escuchasUnLadrid": {
                "content": [
                    "Escuchas un ladrido afuera",
                    {
                        "option": "Investigar",
                        "linkPath": "encuentrasUnPerr",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "option": "Quedarte ",
                        "linkPath": "teMueresDeDepres",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "pageNum": 4
                    }
                ]
            },
            "encuentrasUnPerr": {
                "content": [
                    "Encuentras un perro, el te ayudará en los combates pero consume 5 comida",
                    {
                        "option": "Siguiente día -15 de comida",
                        "linkPath": "noHayEventoPeroS",
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "option": "Ignorar",
                        "linkPath": "teMueresDeDepres1",
                        "ifConditions": null,
                        "notIfConditions": null
                    }
                ]
            },
            "teMueresDeDepres": {
                "content": [
                    "Te mueres de depresión"
                ]
            },
            "teMueresDeDepres1": {
                "content": [
                    "Te mueres de depresión"
                ]
            },
            "noHayEventoPeroS": {
                "content": [
                    "No hay evento pero si decicion",
                    {
                        "option": "Ir de caza +30 comida",
                        "linkPath": null,
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "option": "Siguiente día (-15 comida)",
                        "linkPath": null,
                        "ifConditions": null,
                        "notIfConditions": null
                    },
                    {
                        "pageNum": 5
                    }
                ]
            }
        },
        "initial": "teDespiertasEnUn",
        "optionMirroring": true,
        "allowCheckpoints": false,
        "editorData": {
            "playPoint": "noHayEventoPeroS",
            "libraryVisible": false,
            "authorName": "Tomy",
            "textSize": 0
        }
    },
    "url_key": 103939
}
