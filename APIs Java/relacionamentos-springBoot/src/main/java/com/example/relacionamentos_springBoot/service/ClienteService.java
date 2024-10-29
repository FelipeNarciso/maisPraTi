package com.example.relacionamentos_springBoot.service;

import com.example.relacionamentos_springBoot.model.Cliente;
import com.example.relacionamentos_springBoot.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvarCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public Cliente buscarCliente(UUID id){
        return clienteRepository.findById(id).orElse(null);
    }
}
