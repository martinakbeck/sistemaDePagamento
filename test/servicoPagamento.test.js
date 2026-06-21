import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'assert';

describe('Classe de Servico Pagamento', () => {

    it('deve registrar pagamento com categoria "cara" quando valor for maior que 100', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('098776563475', 'Samar', 156.87);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        assert.equal(ultimoPagamento.codigoBarras, '098776563475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('deve registrar pagamento com categoria "padrão" quando valor for igual a 100', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('123456789012', 'Energia', 100);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        assert.equal(ultimoPagamento.codigoBarras, '123456789012');
        assert.equal(ultimoPagamento.empresa, 'Energia');
        assert.equal(ultimoPagamento.valor, 100);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

        it('deve registrar pagamento com categoria "padrão" quando valor for menor que 100', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('123456789012', 'Energia', 99.99);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        assert.equal(ultimoPagamento.codigoBarras, '123456789012');
        assert.equal(ultimoPagamento.empresa, 'Energia');
        assert.equal(ultimoPagamento.valor, 99.99);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('deve retornar apenas o último pagamento realizado', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('111', 'Empresa A', 50);
        servico.pagar('222', 'Empresa B', 200);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        assert.equal(ultimoPagamento.codigoBarras, '222');
        assert.equal(ultimoPagamento.empresa, 'Empresa B');
        assert.equal(ultimoPagamento.valor, 200);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('deve retornar null quando não houver pagamentos', () => {
        const servico = new ServicoDePagamento();

        assert.equal(
            servico.consultarUltimoPagamento(),
            null
        );
    });

});