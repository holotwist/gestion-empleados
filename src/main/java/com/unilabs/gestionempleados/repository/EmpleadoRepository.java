package com.unilabs.gestionempleados.repository;

import com.unilabs.gestionempleados.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
    // TODO: Los métodos personalizados para consultas específicas
    // Ej: List<Empleado> findByNombreContainingIgnoreCase(String nombre);
}