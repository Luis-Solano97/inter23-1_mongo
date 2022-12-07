db.direcciones.find({})

db.direcciones.count()

db.direcciones.insertOne({"_id":11, direccion:"Bosques de Africa 2", "cp" : true})

db.direcciones.find({"direccion" : "Bosques de Africa 2"}) //dentro de las llaves lo que se busca, primero nombre del cmapo y lo que se busca

db.direcciones.find({"direccion" : "Bosques de Africa 2"}, {direccion:1, cp:1, _id:0})
//select de direccion, cp from direcciones where direccion="Bosques de Africa 2"
//primer parametro es el filtro y el segundo la proyeccion

db.direcciones.find({"direccion" : "Bosques de Africa 2"}, {direccion:0})
//aqui le pongo que no muestre una cosa, direcicon en este caso, ya no tiene homologo en sql

db.direcciones.count({"direccion" : "Bosques de Africa 2"})
//count con un paramatro, lo busca
db.direcciones.find({"direccion" : "Bosques de Africa 2"}, {direccion:0}).count()
//count con el resultado del fin
//son metodos diferentes

//$exists, los operadores empiezan con $
//$type 

db.direcciones.find({direccion:{$exists:1}})
db.direcciones.find({direccion:{$exists:true}})

db.direcciones.find({direccion:{$exists:0}})
db.direcciones.find({direccion:{$exists:false}})
// representan lo mismo 1=true 0=False

db.direcciones.find({fecha:{$exists:1}}})

db.direcciones.find({fecha:{$exists:1}, alumnos:{$exists:1}})
//son 2 condiciones separadas por , en el primer parametro
//la coma funciona and
db.direcciones.find({fecha:{$exists:1}, alumnos:{$exists:1}, libro:{$exists:1}})
db.direcciones.find({$and:[{fecha:{$exists:1}}, {alumno:{$exists:1}}, {libro:{$exists:1}}]}) 
//los dos son equivalentes

db.direcciones.find({$or:[{fecha:{ $exists:1}}, {alumnos:{ $exists:1}}, {libros:{ $exists:1}}] })
//este es con or

db.direcciones.find({$or:[{fecha:{ $exists:1}}, {alumnos:{ $exists:1}}, {libros:{ $exists:1}}] }).count()


