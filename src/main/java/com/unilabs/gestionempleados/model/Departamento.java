package com.unilabs.gestionempleados.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode(of = "id")
public class Departamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String codigo;

    @OneToMany(mappedBy = "departamento", fetch = FetchType.EAGER) // HACK: No es recomendable usar EAGER
                                                                    // ya que puede hacer las consultas más pesadas,
                                                                    // pero así solucionamos rapidamente un error, más adelante cambiar a Lazy
    private List<Empleado> empleados;  // Lista de empleados en este departamento

}