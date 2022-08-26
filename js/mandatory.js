const main_db = "main_db";
const produtos_tb = "produtos";
const vendas_tb = "vendas";
const version = 3;


window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }
});



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
        
    }
    // faça uma query para a table vefdas_tb

    



//     // this will disable dragging of all images
//     $("img").mousedown(function(e){
//             e.preventDefault()
//     });

//     window.oncontextmenu = function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         return false;
//    };
   
//    $("a").touchStart(function(e){
//         e.preventDefault()
//     });




    /*
        // to considerando que se o produto atualizar o preço, o preço da venda continua o mesmo
        {produto_id, preco, time}
    */
    
}
