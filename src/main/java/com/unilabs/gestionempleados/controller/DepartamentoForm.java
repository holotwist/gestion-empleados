package com.unilabs.gestionempleados.controller;

import com.unilabs.gestionempleados.model.Departamento;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;

public class DepartamentoForm extends FormLayout {

    private TextField nombre = new TextField("Nombre");
    private TextField codigo = new TextField("Código");

    Binder<Departamento> binder = new Binder<>(Departamento.class);

    public DepartamentoForm() {
        add(nombre, codigo);

        binder.bindInstanceFields(this);
    }

    public void setDepartamento(Departamento departamento) {
        binder.setBean(departamento);
    }
}