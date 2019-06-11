package com.teste.demo;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	ApplicationRunner init(FuncionarioRepository repository){
		return args -> {
			Stream.of("José Maria", "Lucas", "Murilo", "Raian", "Thiago").forEach(name -> {
				Funcionario func = new Funcionario();
				func.setName(name.toUpperCase());
				repository.save(func); 
			});
			repository.findAll().forEach(System.out::println);
		};
	}

}
