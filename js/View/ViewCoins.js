class ViewCoins extends View{
    constructor(element){
        super(element);
    }
    template(coins){
        return `
        <h2 class="texto titulo">Resultado</h2>
        <table class="table">
            <thead >
                <tr class="table__titulo">
                    <td class="texto">Valor da Moeda</td>
                    <td class="texto">Quantidade</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="list__atributo">R$1,00</span></td>
                    <td><span class="list__atributo-output">${coins.realCoin}</span></td>
                </tr>
                <tr>
                    <td><span class="list__atributo">R$0,50</span></td>
                    <td><span class="list__atributo-output">${coins.coin50}</span></td>
                </tr>
                <tr>
                    <td><span class="list__atributo">R$0,25</span></td>
                    <td><span class="list__atributo-output">${coins.coin25}</span></td>
                </tr>
                <tr>
                    <td><span class="list__atributo">R$0,10</span></td>
                    <td><span class="list__atributo-output">${coins.coin10}</span></td>
                </tr>
                <tr>
                    <td><span class="list__atributo">R$0,05</span></td>
                    <td><span class="list__atributo-output">${coins.coin5}</span></td>
                </tr>
                <tr>
                    <td><span class="list__atributo">R$0,01</span></td>
                    <td><span class="list__atributo-output">${coins.coin1}</span></td>
                </tr>
            </tbody>
        </table>
        `
    }
}