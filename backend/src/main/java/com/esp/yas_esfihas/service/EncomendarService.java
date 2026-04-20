package com.esp.yas_esfihas.service;

import org.springframework.stereotype.Service;

import com.esp.yas_esfihas.dto.EncomendaDTO;
import com.esp.yas_esfihas.entity.Encomenda;
import com.esp.yas_esfihas.repository.EncomendarRepository;

@Service
public class EncomendarService {

	private final EncomendarRepository repository;

    public EncomendarService(EncomendarRepository repository) {
        this.repository = repository;
    }
    
	public void insertEncomenda(EncomendaDTO dto) {
		Encomenda encomenda = new Encomenda();
		encomenda.setNomeEvento(dto.getNomeEvento());
		encomenda.setData(dto.getData());
		encomenda.setCodigoTipoEvento(dto.getCodigoTipoEvento());
		
		repository.save(encomenda);
	}
}
