package com.unilabs.gestionempleados.strategy;

import com.unilabs.gestionempleados.interfaces.Contribuyente;
import com.unilabs.gestionempleados.model.Proyecto;
import org.springframework.stereotype.Component;

@Component
public class EstrategiaContribucionTecnico implements Contribuyente {

    @Override
    public String contribuir(Proyecto proyecto) {
        return "Técnico: Contribuye con la implementación técnica y el desarrollo en el proyecto '" + proyecto.getNombre() + "'.";
    }
}