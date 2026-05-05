package com.esp.yas_esfihas.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esp.yas_esfihas.dto.ItemCardapioDTO;
import com.esp.yas_esfihas.service.CardapioService;

@RestController
@RequestMapping("/cardapio")
public class CardapioController {

	private final CardapioService service;
	
	public CardapioController(CardapioService service) {
		this.service = service;
	}
	
	 @GetMapping("/get-item-cardapio-list")
	 public List<ItemCardapioDTO> getAllItemCardapioList() {
		 return service.getAllItemCardapioList();
	 }
}