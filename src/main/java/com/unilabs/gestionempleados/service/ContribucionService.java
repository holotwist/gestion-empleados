package com.unilabs.gestionempleados.service;

import com.unilabs.gestionempleados.interfaces.Contribuyente;
import com.unilabs.gestionempleados.model.Empleado;
import com.unilabs.gestionempleados.model.Proyecto;
import com.unilabs.gestionempleados.strategy.EstrategiaContribucionGerente;
import com.unilabs.gestionempleados.strategy.EstrategiaContribucionTecnico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ContribucionService {

    private final Map<String, Contribuyente> estrategiasContribucion;

    @Autowired
    public ContribucionService(List<Contribuyente> estrategias) {
        this.estrategiasContribucion = estrategias.stream().collect(
                Collectors.toMap(e -> e.getClass().getSimpleName(), Function.identity()));
    }

    public String obtenerContribucion(Empleado empleado, Proyecto proyecto) {
        String estrategiaKey = "";

        if (empleado instanceof com.unilabs.gestionempleados.model.Gerente) {
            estrategiaKey = EstrategiaContribucionGerente.class.getSimpleName();
        } else if (empleado instanceof com.unilabs.gestionempleados.model.Tecnico) {
            estrategiaKey = EstrategiaContribucionTecnico.class.getSimpleName();
        } else {
            return "Empleado no definido";
        }

        Contribuyente estrategia = estrategiasContribucion.get(estrategiaKey);

        if (estrategia != null) {
            return estrategia.contribuir(proyecto);
        } else {
            return "No se encontró estrategia de contribución para este empleado.";
        }
    }
}
