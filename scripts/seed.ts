const {PrismaClient} = require("@prisma/client");

const database = new PrismaClient();

async function main(){
    try{
        await database.category.createMany({
            data: [
                {name: "Computer science"},
                {name: "Salud"},
                {name: "Psicología"},
                {name: "Producción audiovisual"},
                {name: "Ingeniería Pesquera"},
                {name: "Café"},
                {name: "Crecimiento Personal"},
            ]
        });

        console.log("success")
    }catch(error){
        console.log("Error seeding the database categories", error);
    }finally{
        await database.$disconnect();
    }
}

main();