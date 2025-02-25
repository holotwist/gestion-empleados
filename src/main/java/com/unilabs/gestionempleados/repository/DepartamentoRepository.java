package com.unilabs.gestionempleados.repository;

import com.unilabs.gestionempleados.model.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartamentoRepository extends JpaRepository<Departamento, Long> {

    // TODO: Los métodos personalizados para consultas específicas
    // Ejemplo:
    // Departamento findByCodigo(String codigo);
}