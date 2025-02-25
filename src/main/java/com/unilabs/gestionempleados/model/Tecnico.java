package com.unilabs.gestionempleados.model;

import com.unilabs.gestionempleados.interfaces.ColaboradorTecnico;
import lombok.Data;
import lombok.EqualsAndHashCode;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@PrimaryKeyJoinColumn(name = "id")
public class Tecnico extends Empleado implements ColaboradorTecnico {

    private String especialidad; // Ejemplo: "Desarrollo Backend", "Administración de Redes"

    @Override
    public void realizarAnalisis(String analisis) {
        System.out.println("Técnico realizando análisis: " + analisis);
    }

    @Override
    public void implementarSolucion(String solucion) {
        System.out.println("Técnico implementando solución: " + solucion);
    }
}