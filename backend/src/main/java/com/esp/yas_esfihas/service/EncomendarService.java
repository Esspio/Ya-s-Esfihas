package com.esp.yas_esfihas.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.esp.yas_esfihas.dto.EncomendaDTO;
import com.esp.yas_esfihas.dto.TipoEventoDTO;
import com.esp.yas_esfihas.entity.Encomenda;
import com.esp.yas_esfihas.enums.TipoEventoEnum;
import com.esp.yas_esfihas.repository.EncomendarRepository;

@Service
public class EncomendarService {

	private final EncomendarRepository repository;

    public EncomendarService(EncomendarRepository repository) {
        this.repository = repository;
    }
    
    public List<TipoEventoDTO> getAllTipoEventoList(){
    	return TipoEventoEnum.getAllTipoEventoList();
    }
    
	public void insertEncomenda(EncomendaDTO dto) {
		Encomenda encomenda = new Encomenda();
		encomenda.setNomeEvento(dto.getNomeEvento());
		encomenda.setData(LocalDate.parse(dto.getData()));
		encomenda.setCodigoTipoEvento(dto.getCodigoTipoEvento());
		encomenda.setQuantidadeConvidados(dto.getQuantidadeConvidados());
		encomenda.setObservacoes(dto.getObservacoes());
		encomenda.setCodigoUsuario(dto.getCodigoUsuario());
		encomenda.setDataHoraPedido(dto.getDataHoraPedido());
		
		repository.save(encomenda);
	}
}