package com.esp.yas_esfihas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esp.yas_esfihas.dto.EncomendaDTO;
import com.esp.yas_esfihas.service.EncomendarService;

@RestController
@RequestMapping("/encomendar")
public class EncomendarController {

	private final EncomendarService service;

    public EncomendarController(EncomendarService service) {
        this.service = service;
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insertEncomenda(@RequestBody EncomendaDTO dto) {
    	service.insertEncomenda(dto);
        return ResponseEntity.ok().build();
    }
}
