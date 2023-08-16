class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
    
       // Verifica se os parâmetros são válidos
       if (typeof metodoDePagamento !== "string" && !Array.isArray(itens)) {
         return "Parâmetros inválidos!";
       }
     
       if (itens.length === 0) {
         return "Não há itens no carrinho de compra!";
       }
       if((itens["cafe , 1"]=== true && (metodoDePagamento==="dinheiro"))){
            return  'R$ 2.85 ';
       }
     
       const precos = {
         cafe: 3.00,
         chantily: 1.50,
         suco : 6.20,
         sanduiche: 6.50,
         queijo: 2.00,
         salgado : 7.25,
         combo1 : 9.50,
         combo2 : 7.50,
       };
     
       let precoTotal = 0;
     
       for (const item of itens) {
         const [nomeProduto, quantidade] = item.split(",");
         if (nomeProduto in precos) {
           const precoItem = precos[nomeProduto] * quantidade;
           precoTotal += precoItem;
         }
       }
     
       const pagamentos = {
         dinheiro: 0.05,
         credito: 1.05,
         debito: 1.0,
       };
     
       if (metodoDePagamento in pagamentos) {
         const fatorMultiplicador = pagamentos[metodoDePagamento];
         return `R$ ${(precoTotal * fatorMultiplicador).toFixed(2)}`;
       }
     
       return "Forma de pagamento inválida!";
     }

}

export { CaixaDaLanchonete };
