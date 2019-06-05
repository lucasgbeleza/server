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
        .filter(this::isCool)
        .collect(Collectors.toList());
    }

    private boolean isCool (Funcionario func) {
        return func.getName().equals("José Maria") ||
                func.getName().equals("Lucas") ||
                func.getName().equals("Murilo") ||
                func.getName().equals("Raian") ||
                func.getName().equals("Thiago");
    }

}