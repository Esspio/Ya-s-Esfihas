package com.esp.yas_esfihas.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "encomenda")
public class Encomenda {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column(name = "txt_nomeEvento")
	private String nomeEvento;
	
	@Column(name = "dt_evento")
	private String data;
	
	@Column(name = "cd_tipoEvento")
	private String codigoTipoEvento;
	
	@Column(name = "CRIAR_COLUNA_BANCO")
	private int quantidadeConvidados;
	
	@Column(name = "CRIAR_COLUNA_BANCO")
	private String observacoes;
}