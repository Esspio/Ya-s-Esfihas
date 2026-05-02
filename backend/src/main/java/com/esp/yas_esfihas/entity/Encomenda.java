package com.esp.yas_esfihas.entity;

import java.time.Instant;
import java.time.LocalDate;

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
@Table(name = "encomenda")
public class Encomenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "txt_nome_evento")
	private String nomeEvento;
	
	@Column(name = "dt_evento")
	private LocalDate data;
	
	@Column(name = "cd_tipo_evento")
	private String codigoTipoEvento;
	
	@Column(name = "num_quantidade_convidados")
	private int quantidadeConvidados;
	
	@Column(name = "txt_observacoes")
	private String observacoes;
	
	@Column(name = "cd_usuario")
	private String codigoUsuario;
	
	@Column(name = "dt_hr_pedido")
	private Instant dataHoraPedido;
}