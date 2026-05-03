package com.esp.yas_esfihas.enums;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.esp.yas_esfihas.dto.TipoEventoDTO;

import lombok.Getter;

public enum TipoEventoEnum {
	ANIVERSARIO(1, "Aniversário"),
	CASAMENTO(2, "Casamento"),
	CORPORATIVO(3, "Corporativo");
	
	@Getter
	private final int codigo;
	@Getter
	private final String nome;
	
	TipoEventoEnum(int codigo, String nome) {
		this.codigo = codigo;
		this.nome = nome;
	}
	
	public static List<TipoEventoDTO> getAllTipoEventoList() {
		return Arrays.stream(TipoEventoEnum.values())
						.map(tipo -> new TipoEventoDTO(tipo.getCodigo(), tipo.getNome()))
						.collect(Collectors.toList());
	}
	
	public static TipoEventoEnum getTipoEventoByCodigo(final int codigoTipoEvento) {
		for (TipoEventoEnum tipo : TipoEventoEnum.values()) {
			if (tipo.getCodigo() == codigoTipoEvento) {
				return tipo;
			}
		}
		
		throw new IllegalArgumentException("O valor informado é inválido!");
	}
}
