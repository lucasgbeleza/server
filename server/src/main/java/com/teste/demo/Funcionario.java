package com.teste.demo;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class Funcionario {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
    private int salario = 1400;
}