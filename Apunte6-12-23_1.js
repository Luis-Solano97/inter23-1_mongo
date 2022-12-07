db.direcciones.find()
//$type
db.direcciones.find({ cp:{$type:1} })
db.direcciones.find({ cp:{$type:"double"} })

db.direcciones.find({ cp:{$type:2} })
db.direcciones.find({ cp:{$type:"string"} })

db.direcciones.find({ cp:{$type:3} })
db.direcciones.find({ cp:{$type:"object"} })

db.direcciones.find({ cp:{$type:4} })
db.direcciones.find({ cp:{$type:"array"} })

db.direcciones.find({ cp:{$type:7} })
db.direcciones.find({ cp:{$type:"objectId"} })

db.direcciones.find({ cp:{$type:8} })
db.direcciones.find({ cp:{$type:"bool"} })

db.direcciones.find({ cp:{$type:9} })
db.direcciones.find({ cp:{$type:"date"} })

db.direcciones.find({ cp:{$type:16} }) //entero de 32 bits
db.direcciones.find({ cp:{$type:"int"} })

db.direcciones.find({ cp:{$type:18} }) //entero de 64 bits
db.direcciones.find({ cp:{$type:"long"} })

db.direcciones.find({ cp:{$type:19} }) 
db.direcciones.find({ cp:{$type:"decimal"} })

db.direcciones.find({ cp:{$type:"number"} })
//incluye doble, int, long y decimales

db.direcciones.find({ cp:{$type:["number", "string"]} })
//con un arreglo puedes busacar diferentes tipos de elementos

db.direcciones.find({ cp:{$not:{$type:["number", "string"]} }})
//los que no son numericos y no son String
//el not niega qlo que siga

db.direcciones.find({"preferecias.seguimientoEmails":{$type:"bool"}})
db.direcciones.find({"preferecias.seguimientoEmails":{$type:"number"}})

//localizar direcciones, con CP numerico o que tenga un campo posgrado
db.direcciones.find({ $or:[{cp:{$type:"number"}},{posgrado:{$exists:1}}] })
db.direcciones.find({ $or:[{cp:{$type:"number"}},{fecha:{$exists:1}}] })
db.direcciones.find({ $and:[{cp:{$type:"number"}},{fecha:{$exists:1}}] })

