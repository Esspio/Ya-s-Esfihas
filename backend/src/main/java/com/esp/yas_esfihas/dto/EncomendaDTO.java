package com.esp.yas_esfihas.dto;

import java.time.Instant;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EncomendaDTO {
	private String nomeEvento;
	private String data;
	private int codigoTipoEvento;
	private int quantidadeConvidados;
	private String observacoes;
	private Long codigoUsuario;
	private Instant dataHoraPedido;
}
