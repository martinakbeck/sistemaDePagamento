export default class ServicoDePagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = []
    }

    pagar(codigoBarras, empresa, valor) {
        this.#pagamentos.push ({
            codigoBarras,
            empresa,
            valor,
            categoria: valor > 100 ? 'cara' : 'padrão'
        });

        
    }

    consultarUltimoPagamento() {
        if (this.#pagamentos.length === 0) {
            return null
        }

        return this.#pagamentos[this.#pagamentos.length - 1]
    }
}