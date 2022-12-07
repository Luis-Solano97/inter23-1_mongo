db.getCollection('alumnos').find({})

db.alumnos.find( {"clave_alu":11030180})

db.alumnos.updateOne({"clave_alu":11030180}, //filtro
    {$set:{'edad':{'anios':31, 'meses':8, 'dias':29}}}//LO QUE SE METERA
    )
db.alumnos.find({'edad':{$exists:0}})

db.alumnos.updateOne({"clave_alu":11030178}, //filtro
    {$set:{'edad':{'anios':28, 'meses':6, 'dias':3}}}
    )
db.alumnos.find( {"clave_alu":11030178})

db.alumnos.updateOne({"clave_alu":11030178}, //filtro
    {$set:{'materias':['ESPAÑOL','MATEMATICAS','HISTORIA','QUIMICA']}}
    )
db.alumnos.find({'sexo':{$exists:0}}).toArray()

db.alumnos.updateMany( //cambia muchos registros al mismo tiempo
    {'sexo':{$exists:0}},
    {$set:{'genero':'no binario', 'otro campo':1}}
    )

db.alumnos.updateMany( 
    {'sexo':{$exists:0}},
    {$set:{'genero':'no bin'}}
    )

db.alumnos.updateMany( 
    {'sexo':{$exists:0}},
    {$inc:{'otrocampo':10}}
    )

db.alumnos.updateMany( 
    {'sexo':{$exists:0}},
    [
    {$set:{'status':'aspirante', 'niveles':['secundaria','bachillrato'],'actualizado':'$$NOW'}},
    {$unset:['genero', 'otrocampo']} //se usa para quitar campos
    ])
//now hace referencia a la hora del sistema/servidor
//trae dos $$ porque es un operador que se usara como constante

db.alumnos.find({'sexo':{$exists:0}}).toArray()

db.alumnos.updateMany( 
    {'sexo':{$exists:0}},
    {$rename:{'actualizado':'modificado'}}
    )
//renombrar un campo, aunque en realidad copia el compo, 
//lo pega con otro nombre y elimina el original, por eso aparece al final
    
db.alumnos.updateMany( 
    {'sexo':{$exists:0}},
    {$push:{'niveles':'licenciatura'}}
    )
//areglale algo a un campo existente
// en este caso se le agrega un sub campo licenciatura

db.alumnos.updateMany( 
    {'sexo':{$exists:0}},
    {$pull:{'niveles':'licenciatura'}}
    )
//pull quita valores a un rreglo/campo
db.alumnos.find({'sexo':{$exists:0}}).toArray()

#elimina los documentos que conincidan con el filtro
db.alumnos.deleteMany({'sexo':{$exists:0})
//elimina todos los elemntos uqe coincidan
db.alumnos.deleteOne({'sexo':{$exists:0})
//elimina el primer elemento que coincida
//como no se sabe cual es el primero se dice que elimina uno nadams

#operadores
#$in $nin
db.alumnos.find({'nombre':{$in:['ALDO','FABIOLA','HECTOR']}},
    {nombre:1,ap_paterno:1,_id:0}).toArray()
//busqueda en un arreglo
db.alumnos.find({'nombre':{$nin:['ALDO','FABIOLA','HECTOR']}},
    {nombre:1,ap_paterno:1,_id:0}).toArray()
//busquedas que no estan en el arreglo

db.alumnos.find({'edad.meses':{$in:[2,4,6,8]}},
    {nombre:1,ap_paterno:1,_id:0,edad:1}).toArray()

db.alumnos.find({'edad.meses':{$nin:[2,4,6,8]},'edad':{$exists:1}},
    {nombre:1,ap_paterno:1,_id:0,edad:1}).toArray()
//asi solo aparecen los que tengan el campo edad


db.alumnos.find({'materias':{$all:['ESPAÑOL','MATEMATICAS']}},
    {nombre:1,ap_paterno:1,_id:0,'materias':1}).toArray()

db.alumnos.find({'materias':{$all:['ESPAÑOL','MAT']}},
    {nombre:1,ap_paterno:1,_id:0,'materias':1}).toArray()
//&all busca que coincidan todos
    
db.alumnos.find({'materias':{$size:3}},
    {nombre:1,ap_paterno:1,_id:0,'materias':1}).toArray()
db.alumnos.find({'materias':{$size:4}},
    {nombre:1,ap_paterno:1,_id:0,'materias':1}).toArray()
//size busca los que concidan con el tamano

#variables
m={'materias':{$size:5}}
p={nombre:1,ap_paterno:1,_id:0,'materias':1}

db.alumnos.find(m,p).toArray()
//se deben definir las variables primero para usar primero












