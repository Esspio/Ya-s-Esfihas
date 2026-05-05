package com.esp.yas_esfihas.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ItemCardapioDTO {
	private Long id;
	private String nome;
	private double preco;
	private int quantidadeDisponivel;
}
