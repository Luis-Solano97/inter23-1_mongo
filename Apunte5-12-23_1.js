db.getCollectionInfos()
show databases
use fundamentosMongo

db.datos.insertOne(
{
    "nombre":"luis",
    paterno:"marin",
    materno:"solano",
    mail:"luissolano80@aragon.unam.mx",
    edad:25
}
)

show collections

db.createCollection("agenda", {})

db.agenda.insertOne(
{
    "nombre":"luis",
    paterno:"marin",
    materno:"solano",
    mail:"luissolano80@aragon.unam.mx",
    direccion:{
        calle:"Av rancho seco",
        numero:"S/N",
        ciudad:"Neza"
        }
}
)

db.agenda.insertOne(
{
    "nombre":"oscar",
    paterno:"marin",
    materno:"solano",
    mail:"luissolano80@aragon.unam.mx",
    telefono:"555555"
}
)

db.agenda.find({})  //select * from agenda

