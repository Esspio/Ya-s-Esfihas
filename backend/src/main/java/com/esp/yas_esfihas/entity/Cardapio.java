package com.esp.yas_esfihas.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "cardapio")
public class Cardapio {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cd_id")
    private Long id;
	
	@Column(name = "txt_nome")
	private String nome;
	
	@Column(name = "num_preco")
	private double preco;
	
	@Column(name = "num_quantidade_disponivel")
	private int quantidadeDisponivel;
}