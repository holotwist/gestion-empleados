package com.unilabs.gestionempleados.service;

import com.unilabs.gestionempleados.model.Empleado;
import com.unilabs.gestionempleados.model.Proyecto;
import com.unilabs.gestionempleados.repository.EmpleadoRepository;
import com.unilabs.gestionempleados.repository.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    private final EmpleadoRepository empleadoRepository;
    private final ProyectoRepository proyectoRepository;

    @Autowired
    public EmpleadoService(EmpleadoRepository empleadoRepository, ProyectoRepository proyectoRepository) {
        this.empleadoRepository = empleadoRepository;
        this.proyectoRepository = proyectoRepository;
    }

    public List<Empleado> obtenerTodosLosEmpleados() {
        return empleadoRepository.findAll();
    }

    public Optional<Empleado> obtenerEmpleadoPorId(Long id) {
        return empleadoRepository.findById(id);
    }

    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Transactional
    public void eliminarEmpleado(Long id) {
        Empleado empleado = empleadoRepository.findById(id).orElse(null);
        if (empleado != null) {
            // Se usa el método personalizado, optimizando la búsqueda
            List<Proyecto> proyectos = proyectoRepository.findByEmpleadosContaining(empleado);
            for (Proyecto proyecto : proyectos) {
                proyecto.getEmpleados().remove(empleado);
                proyectoRepository.save(proyecto);  // Guarda el proyecto actualizado
            }
            empleadoRepository.deleteById(id);
        }
    }
}