package com.esp.yas_esfihas.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EncomendaDTO {
	private String nomeEvento;
	private String data;
	private String codigoTipoEvento;
	private int quantidadeConvidados;
	private String observacoes;
}
