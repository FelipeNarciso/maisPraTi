package com.example.atividade_testesUnitarios;

import com.example.atividade_testesUnitarios.controller.ProdutoController;
import com.example.atividade_testesUnitarios.model.Produto;
import com.example.atividade_testesUnitarios.service.ProdutoService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProdutoControllerTest {

    @Mock
    private ProdutoService produtoService;

    @InjectMocks
    private ProdutoController produtoController;

    @Test
    public void testAdicionarProduto() {
        Produto produto = new Produto();
        produto.setId(1L);
        produto.setNome("Produto Teste");
        produto.setPreco(10.0F);
        produto.setDescricao("Teste produto");
        produto.setQuantidadeEstoque(100);

        when(produtoService.adicionarProduto(any(Produto.class))).thenReturn(produto);

        Produto produtoCriado = produtoController.adicionarProduto(produto);

        assertEquals(produto, produtoCriado);
        verify(produtoService, times(1)).adicionarProduto(produto);
    }

    @Test
    public void testListarProdutos() {
        List<Produto> produtos = new ArrayList<>();
        Produto produto1 = new Produto();
        produto1.setId(1L);
        produto1.setNome("Produto Teste");
        produto1.setPreco(10.0F);
        produto1.setDescricao("Teste produto");
        produto1.setQuantidadeEstoque(100);
        produtos.add(produto1);

        Produto produto2 = new Produto();
        produto2.setId(1L);
        produto2.setNome("Produto Teste");
        produto2.setPreco(10.0F);
        produto2.setDescricao("Teste produto");
        produto2.setQuantidadeEstoque(100);

        produtos.add(produto2);

        when(produtoService.listarProdutos()).thenReturn(produtos);

        List<Produto> produtosRetornados = produtoController.listarProdutos();

        assertEquals(produtos, produtosRetornados);
        verify(produtoService, times(1)).listarProdutos();
    }

    @Test
    public void testBuscarProdutoPorId_Sucesso() {
        Produto produto = new Produto();
        produto.setId(1L);
        produto.setNome("Produto Teste");
        produto.setPreco(10.0F);
        produto.setDescricao("Teste produto");
        produto.setQuantidadeEstoque(100);

        when(produtoService.buscarProdutoPorId(produto.getId())).thenReturn(Optional.of(produto));

        ResponseEntity<Produto> response = produtoController.buscarProdutoPorId(produto.getId());

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(produto, response.getBody());
        verify(produtoService, times(1)).buscarProdutoPorId(produto.getId());
    }

    @Test
    public void testBuscarProdutoPorId_NaoEncontrado() {
        Long id = 1L;

        when(produtoService.buscarProdutoPorId(id)).thenReturn(Optional.empty());

        ResponseEntity<Produto> response = produtoController.buscarProdutoPorId(id);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNull(response.getBody());
        verify(produtoService, times(1)).buscarProdutoPorId(id);
    }

    @Test
    public void testAtualizarProduto() {
        Produto produto = new Produto();
        produto.setId(1L);
        produto.setNome("Produto Teste");
        produto.setPreco(10.0F);
        produto.setDescricao("Teste produto");
        produto.setQuantidadeEstoque(100);

        when(produtoService.atualizarProduto(produto.getId(), produto)).thenReturn(produto);

        ResponseEntity<Produto> response = produtoController.atualizarProduto(produto.getId(), produto);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(produto, response.getBody());
        verify(produtoService, times(1)).atualizarProduto(produto.getId(), produto);
    }

    @Test
    public void testDeletarProduto() {
        Long id = 1L;

        doNothing().when(produtoService).deletarProduto(id);

        ResponseEntity<Void> response = produtoController.deletarProduto(id);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertNull(response.getBody());
        verify(produtoService, times(1)).deletarProduto(id);
    }
}