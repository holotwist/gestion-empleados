package com.unilabs.gestionempleados.service;

import com.unilabs.gestionempleados.model.Departamento;
import com.unilabs.gestionempleados.repository.DepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartamentoService {

    private final DepartamentoRepository departamentoRepository;

    @Autowired
    public DepartamentoService(DepartamentoRepository departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }

    public List<Departamento> obtenerTodosLosDepartamentos() {
        return departamentoRepository.findAll();
    }

    public Optional<Departamento> obtenerDepartamentoPorId(Long id) {
        return departamentoRepository.findById(id);
    }

    public Departamento guardarDepartamento(Departamento departamento) {
        return departamentoRepository.save(departamento);
    }

    public void eliminarDepartamento(Long id) {
        departamentoRepository.deleteById(id);
    }

    // TODO: agregar más métodos de lógica de negocio relacionados con departamentos
    // Ejemplo:
    // public Departamento obtenerDepartamentoPorCodigo(String codigo) { ... }
}