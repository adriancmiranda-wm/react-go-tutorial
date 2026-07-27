// Script de seed para a collection "todos" do banco "golang_db".
//
// Como rodar:
//   mongosh "$MONGODB_URI" scripts/seed.js
//
// $MONGODB_URI vem do seu arquivo .env (a mesma URI que o main.go usa).
// Se preferir, pode colar a URI direto no lugar de "$MONGODB_URI".

const dbName = "golang_db";
const database = db.getSiblingDB(dbName);
const collection = database.getCollection("todos");

const seedTodos = [
	{ body: "Aprender Go", completed: true },
	{ body: "Estudar React Query", completed: false },
	{ body: "Configurar MongoDB Atlas", completed: true },
	{ body: "Revisar ChakraUI", completed: false },
];

print(`Limpando a collection "todos" em "${dbName}"...`);
const deleted = collection.deleteMany({});
print(`${deleted.deletedCount} documento(s) removido(s).`);

print("Inserindo todos de exemplo...");
const inserted = collection.insertMany(seedTodos);
print(`${Object.keys(inserted.insertedIds).length} documento(s) inserido(s):`);
seedTodos.forEach((todo) => print(` - [${todo.completed ? "x" : " "}] ${todo.body}`));

print("Seed concluído.");
