db.direcciones.insertMany(
[
  {"_id":1, direccion:"Av Rancho seco SN", cp: "57200", "alumnos": [ "Juan", "Ana", "Pedro" ]},
  {"_id":2, direccion:"Av Universidad 3000", cp: 30300},
  {"_id":3, direccion:"Av Central 5000", cp: NumberLong(56234), "posgrado": true},
  {"_id":4, direccion:"Las Palmas 4", cp: NumberInt(56330), "preferencias": {
        "seguimientoEmails": false,
        "idioma": "Español",
        "zonaHoraria": 5
    }},
  {"_id":5, direccion:"Bosques de Africa 2", cp: ["57200", "57201"], "fecha" : ISODate("2020-01-08T08:52:30.038Z")},
  {"_id":6, direccion:"Bosques de Africa 2", cp: {codigo:"57200", zp:"57201"}}
]
)


db.direcciones.insert(
  {"_id":7, 
  direccion:"Bosques de Africa 2", cp: [
   {codigo:"57200", zp:"57201"},
   {codigo:"58200", zp:"58201"},
   {codigo:"59200", zp:"59201"}
   ]
  }
)
  
db.direcciones.insertMany(
  [
  {"_id":8, 
  direccion:"Bosques de Africa 2", cp: [
   ["57200", 57201],
   ["58200", 58201],
   ["59200", 59201]
   ]
  },
  {"_id":9, direccion:"Bosques de Africa 2", "cp" : ISODate("2020-01-08T08:52:30.038Z")},
  {"_id":10, direccion:"Av Universidad 3000", cp: "30300", fecha:"2020-01-08 08:52:30"}
  ]
)
  
db.direcciones.find({})