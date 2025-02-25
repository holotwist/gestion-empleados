package com.unilabs.gestionempleados.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode(of = "id")
public class Proyecto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String codigo;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "proyecto_empleado",
            joinColumns = @JoinColumn(name = "proyecto_id"),
            inverseJoinColumns = @JoinColumn(name = "empleado_id")
    )
    private List<Empleado> empleados; // Lista de empleados asignados a este proyecto

}