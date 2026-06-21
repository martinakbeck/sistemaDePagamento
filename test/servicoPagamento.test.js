import { test, expect } from '@playwright/test';
import ServicoDePagamento from '../src/ServicoDePagamento.js';

test.describe('Classe de Servico Pagamento', () => {

    test('deve registrar pagamento com categoria "cara" quando valor for maior que 100', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('098776563475', 'Samar', 156.87);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        expect(ultimoPagamento.codigoBarras).toBe('098776563475');
        expect(ultimoPagamento.empresa).toBe('Samar');
        expect(ultimoPagamento.valor).toBe(156.87);
        expect(ultimoPagamento.categoria).toBe('cara');
    });

    test('deve registrar pagamento com categoria "padrão" quando valor for igual a 100', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('123456789012', 'Energia', 100);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        expect(ultimoPagamento.codigoBarras).toBe('123456789012');
        expect(ultimoPagamento.empresa).toBe('Energia');
        expect(ultimoPagamento.valor).toBe(100);
        expect(ultimoPagamento.categoria).toBe('padrão');
    });

    test('deve registrar pagamento com categoria "padrão" quando valor for menor que 100', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('123456789012', 'Energia', 99.99);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        expect(ultimoPagamento.codigoBarras).toBe('123456789012');
        expect(ultimoPagamento.empresa).toBe('Energia');
        expect(ultimoPagamento.valor).toBe(99.99);
        expect(ultimoPagamento.categoria).toBe('padrão');
    });

    test('deve retornar apenas o último pagamento realizado', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('111', 'Empresa A', 50);
        servico.pagar('222', 'Empresa B', 200);

        const ultimoPagamento = servico.consultarUltimoPagamento();

        expect(ultimoPagamento.codigoBarras).toBe('222');
        expect(ultimoPagamento.empresa).toBe('Empresa B');
        expect(ultimoPagamento.valor).toBe(200);
        expect(ultimoPagamento.categoria).toBe('cara');
    });

    test('deve retornar null quando não houver pagamentos', () => {
        const servico = new ServicoDePagamento();

        expect(servico.consultarUltimoPagamento()).toBe(null);
    });

});