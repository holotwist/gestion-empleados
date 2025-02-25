package com.unilabs.gestionempleados.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(of = "id")
@Inheritance(strategy = InheritanceType.JOINED) // Para la herencia (Gerente, Tecnico)
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @ManyToOne(fetch = FetchType.EAGER) // HACK: No es recomendable usar EAGER
                                        // ya que puede hacer las consultas más pesadas,
                                        // pero así solucionamos rapidamente un error, más adelante cambiar a Lazy
    @JoinColumn(name = "departamento_id")
    private Departamento departamento;

}
