package com.unilabs.gestionempleados.model;

import com.unilabs.gestionempleados.interfaces.AdministradorDeProyectos;
import lombok.Data;
import lombok.EqualsAndHashCode;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@PrimaryKeyJoinColumn(name = "id")
public class Gerente extends Empleado implements AdministradorDeProyectos {

    private String nivelDeAutoridad;  // Ejemplo: "Departamento", "Proyecto"

    @Override
    public void asignarTareas(String tarea, String responsable) {
        System.out.println("Gerente asignando tarea: " + tarea + " a " + responsable);
    }

    @Override
    public void gestionarRecursos() {
        System.out.println("Gerente gestionando recursos.");
    }
}