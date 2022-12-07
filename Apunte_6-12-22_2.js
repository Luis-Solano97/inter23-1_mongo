db.getCollection('alumnos').find({})
db.getCollection('alumnos').find({}).count()

db.alumnos.findOne({ })
//regresa solo un elemento, como un limit:1

db.alumnos.findOne({evaluaciones:{$exists:1} })
db.alumnos.find({_id:{$type:7}}).count()
//ObjectId

db.alumnos.find({curp:{$exists:1}}).count()
//cuantos tienen curpo
db.alumnos.find({curp:{$exists:0}}).count()
//los que no tienen curp

db.alumnos.find({curp:{$type:"number"}}).count()
db.alumnos.find({curp:{$type:"number"}})
// conocer datos, en este caso estos curps serian invalidos

db.alumnos.find({materias:{$exists:1}}).count()
//se puede seleccionar solo una aprte del codigo para ejecutarlo
//no toda la linea
db.alumnos.find({materias:{$exists:1}})

db.alumnos.find({evaluaciones:{$exists:1}}).count()
db.alumnos.find({evaluaciones:{$exists:1}})
db.alumnos.find({edad:{$exists:1}}).count()
db.alumnos.find({sexo:{$exists:1}}).count()
db.alumnos.find({ciudad:{$exists:1}}).count()

db.alumnos.find({
    $and:[{materias:{$exists:1}},
    {evaluaciones:{$exists:1}},
    {edad:{$exists:1} 
    }] 
    })
#terminar, abajo del profe    
db.alumnos.find({ 
    $and:[{materias:{ $exists: 1 }}, 
    {evaluaciones:{ $exists: 1 }}, 
    {edad:{ $exists: 1 }
    }] 
    }).count()

//buscar alumnos que tangan materias,evaluaciones o edad y que tengan curp no numerico 562
db.alumnos.find({ 
   $and:[
    {$or:[{materias:{ $exists: 1 }}, 
    {evaluaciones:{ $exists: 1 }},
    {edad:{ $exists: 1 }}]},
    {$and:[ {curp:{$exists:1}}, {curp:{$not:{$type:"number"}}} ]}
     ]}).count()
     
//proyeccion
db.alumnos.find({},{clave_alu:1, nombre:1, ap_paterno:1, sexo:1, "edad.anios":1})
#primera llaves, paramatro de busqueda
db.alumnos.find({},{clave_alu:1, nombre:1, ap_paterno:1, sexo:1, "edad.anios":1,_id:0})

db.alumnos.find({},{clave_alu:0,_id:0})

db.alumnos.find({},{nombre:1,_id:0}).sort({nombre:1})
//select nombre from alumnos order by nombre
//ordendar por nombre ascendente
db.alumnos.find({},{nombre:1,_id:0}).sort({nombre:-1})
//select nombre from alumnos order by nombre desc
//ordendar por nombre descendente

db.alumnos.find({},{nombre:1,sexo:1,_id:0}).sort({sexo:1, nombre:-1})
//ordendar por sexo ascedente y luego nombre descendente
db.alumnos.find({ciudad:{$exists:1}, sexo:{$exists:1}},
{nombre:1,sexo:1,ciudad:1,_id:0}).sort({ciudad:1,sexo:1, nombre:1})

db.alumnos.find({},{nombre:1,_id:0}).sort({nombre:-1}).limit(5)
//limit
db.alumnos.find({sexo:"F"},{nombre:1,_id:0}).sort({nombre:1}).limit(5)
//primero 5 nombres de mujeres

db.alumnos.find().count()

db.alumnos.find({sexo:"F"},{nombre:1,_id:0}).sort({nombre:1}).limit(5)

db.alumnos.find({sexo:"F"},{nombre:1,_id:0}).sort({nombre:1}).limit(5).toArray()

db.alumnos.find().toArray()

#jsonapi.org, standar que se usa un monton aunque no es oficial aun
# https://jsonapi.org/

//distinc, traer unicos
db.alumnos.distinct("sexo")
db.alumnos.distinct("nombre")
db.alumnos.distinct("ciudad")

db.alumnos.distinct("edad.anios")
db.alumnos.distinct("clave_alu")

db.alumnos.distinct("nombre", {sexo:"F"})
//primer campo que quiero, segundo parametros en donde
db.alumnos.distinct("nombre", {sexo:"F", ciudad:"QUERETARO"})
//condiciones en and
db.alumnos.distinct("nombre", {$or:[{sexo:"F", ciudad:"QUERETARO"}] })
//condiciones en or

#operadores logicos
//$and $or $not
//condicionales > < ==
//$eq(==) $ne(!=) $gt(>) $gte(>=) $lt(<) $lte(<=) 

db.alumnos.find({ciudad:"QUERETARO"})
db.alumnos.find({ciudad:{$eq:"QUERETARO"}})
//son lo mismo, la maquina lo manda a llamar de la seugnda forma

db.alumnos.find({ciudad:{$ne:"QUERETARO"}})
//diferente de !=
db.alumnos.find({"edad.anios":{$gt:30} })
//mayor que >
db.alumnos.find({"edad.anios":{$gte:30} })
//mayor que >=
db.alumnos.find({"nombre":{$gt:"OSCAR"} })
//tambien se puede por cadena, alfabeticamente

db.alumnos.find({"evaluaciones.fecha":{$gt:ISODate("2020-06-01T00:00:00.000Z")}})
//con un elemento que coincida en un arreglo, se trae todo

db.alumnos.find({"edad.anios":{$lt:30} })
//mayor que <
db.alumnos.find({"edad.anios":{$lte:30} })
//mayor que <=
db.alumnos.find({"nombre":{$lt:"OSCAR"} })
//tambien se puede por cadena, alfabeticamente

db.alumnos.find({"evaluaciones.fecha":{$lt:ISODate("2020-06-01T00:00:00.000Z")}})
//con un elemento que coincida en un arreglo, se trae todo

db.alumnos.find({},{nombre:1, ap_paterno:1, _id:0}).sort({nombre:1}).toArray()
db.alumnos.find({nombre:"adrian"},{nombre:1, ap_paterno:1, _id:0}).sort({nombre:1}).toArray()
//distingue por mayusculas o minusculas

#expresiones regulares
#la / sirve para buscar patrones la 
#i es para que no busque mayusculas

db.alumnos.find({nombre:/adrian/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()
//el nombre contiene adrian
db.alumnos.find({nombre:{$regex:"adrian", $options:"i"} },
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()
//es lo mismo que arriba, solo que este es su operador real
    
db.alumnos.find({nombre:/^adrian/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()  
//nombre comienza con adrian no sencible a mayusculas   
db.alumnos.find({nombre:{$regex:"^adrian", $options:"i"} },
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()
    
db.alumnos.find({nombre:/adrian$/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()     
//Termina con cadena adrian    
    
db.alumnos.find({nombre:/^adrian$/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()         
//la acdena solo tiene adrian    
    
db.alumnos.find({nombre:/(adrian|maria)/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()
// el | funciona como un or

db.alumnos.find({nombre:/(adrian|^maria)/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()
//contiene adrian y contiene comeinza con maria
 
db.alumnos.find({nombre:/(adrian$|^maria|luis)/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()   
//termina con adrian o comienza con maria o contiene luis

db.alumnos.find({nombre:{$not:/(adrian$|^maria|luis)/i} },
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray() 
//negar la expresion regular

db.alumnos.find({nombre:/[zxy]/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray() 
//el nombre contiene los caracteres z x y

db.alumnos.find({nombre:/[az]/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray() 
//contiene en un rango, de a-z

db.alumnos.find({nombre:/[wz]/i},
    {nombre:1, ap_paterno:1, _id:0})
    .sort({nombre:1})
    .toArray()

db.alumnos.find({email:/[0-9]/i},
    {nombre:1, email:1, _id:0})
    .sort({nombre:1})
    .toArray()
//cuando el email contiene caracteres numerico

db.alumnos.find({email:/^[0-9]/i},
    {nombre:1, email:1, _id:0})
    .sort({nombre:1})
    .toArray()
//email comienza con un caracter numerico

db.alumnos.find({email:/[0-9]$/i},
    {nombre:1, email:1, _id:0})
    .sort({nombre:1})
    .toArray()
//email termina con un caracter numerico

db.alumnos.find({email:/.net$/i},
    {nombre:1, email:1, _id:0})
    .sort({nombre:1})
    .toArray()
//emial termina con .net

db.alumnos.find({email:/\D/i},
    {nombre:1, email:1, _id:0})
    .sort({nombre:1})
    .toArray()
//emial no contiene un caracter numerico

#para validar curps
db.alumnos.find({curp:/[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]/},{nombre:1, curp:1, _id:0});
//estructura del curp, 

