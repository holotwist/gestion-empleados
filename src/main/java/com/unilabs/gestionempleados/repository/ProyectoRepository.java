package com.unilabs.gestionempleados.repository;

import com.unilabs.gestionempleados.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProyectoRepository extends JpaRepository<Proyecto, Long> {

    // TODO: Los métodos personalizados para consultas específicas
    // Ejemplo:
    // List<Proyecto> findByNombreContainingIgnoreCase(String nombre);
}