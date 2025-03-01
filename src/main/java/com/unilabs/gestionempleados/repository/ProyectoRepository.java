package com.unilabs.gestionempleados.repository;

import com.unilabs.gestionempleados.model.Empleado;
import com.unilabs.gestionempleados.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProyectoRepository extends JpaRepository<Proyecto, Long> {

    // Método personalizado para encontrar proyectos por empleado, solución a errores SQL de claves foráneas
    @Query("SELECT p FROM Proyecto p JOIN p.empleados e WHERE e = :empleado")
    List<Proyecto> findByEmpleadosContaining(Empleado empleado);
}