const main_db = "main_db";
const produtos_tb = "produtos";
const vendas_tb = "vendas";
const version = 5;
function createDB(event){
    console.log("createDB");
    var db = event.target.result;
    
    
    // Criando as tabelas
    // mas somente quando n houver nenhuma versão antes
    if(event.oldVersion){
        var req = indexedDB.deleteDatabase("main_db");
        req.onsuccess = function () {
            console.log("Deleted database successfully");
            db.createObjectStore(produtos_tb, { keyPath: "id", autoIncrement:true });
        
            v_tb = db.createObjectStore(vendas_tb, { keyPath: "id",   autoIncrement:true });
            
            v_tb.createIndex("date", "date", { unique: false });
        };
        
    }else{
        db.createObjectStore(produtos_tb, { keyPath: "id", autoIncrement:true });
        
            v_tb = db.createObjectStore(vendas_tb, { keyPath: "id",   autoIncrement:true });
            
            v_tb.createIndex("date", "date", { unique: false });
        
    }
}



// function registerServiceWorker() {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/sw.js');
//     }else{
//         console.log("Service Worker not supported");
//     }
      
// }
// registerServiceWorker()

