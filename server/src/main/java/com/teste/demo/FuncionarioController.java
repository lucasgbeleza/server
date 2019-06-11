package com.teste.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
class CoolFuncionarioController {
    private FuncionarioRepository repository;

    public CoolFuncionarioController(FuncionarioRepository repository){
        this.repository = repository;
    }

    @GetMapping("/cool-funcionarios")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Funcionario> coolFuncionario(){
        return repository
        .findAll()
        .stream()
        .collect(Collectors.toList());
    }

    

}