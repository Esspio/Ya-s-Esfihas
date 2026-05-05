package com.esp.yas_esfihas.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.esp.yas_esfihas.dto.ItemCardapioDTO;
import com.esp.yas_esfihas.repository.CardapioRepository;

@Service
public class CardapioService {

	private CardapioRepository repository;
	
	private CardapioService(CardapioRepository repository) {
		this.repository = repository;
	}
	
	public List<ItemCardapioDTO> getAllItemCardapioList(){
		return repository.findAll().stream().map(item -> new ItemCardapioDTO(item.getId(), item.getNome(), item.getPreco(), item.getQuantidadeDisponivel())).toList();
	}
}