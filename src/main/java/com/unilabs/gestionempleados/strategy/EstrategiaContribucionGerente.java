package com.unilabs.gestionempleados.strategy;

import com.unilabs.gestionempleados.interfaces.Contribuyente;
import com.unilabs.gestionempleados.model.Proyecto;
import org.springframework.stereotype.Component;

@Component
public class EstrategiaContribucionGerente implements Contribuyente {

    @Override
    public String contribuir(Proyecto proyecto) {
        return "Gerente: Contribuye con planificación y gestión de recursos para el proyecto '" + proyecto.getNombre() + "'.";
    }
}