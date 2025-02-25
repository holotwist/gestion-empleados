package com.unilabs.gestionempleados.controller;

import com.unilabs.gestionempleados.model.Departamento;
import com.unilabs.gestionempleados.model.Empleado;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;

import java.util.List;

public class EmpleadoForm extends FormLayout {

    private TextField nombre = new TextField("Nombre");
    private ComboBox<Departamento> departamento = new ComboBox<>("Departamento");

    Binder<Empleado> binder = new Binder<>(Empleado.class);

    public EmpleadoForm(List<Departamento> departamentos) {
        departamento.setItems(departamentos);
        departamento.setItemLabelGenerator(Departamento::getNombre);

        add(nombre, departamento);

        binder.bindInstanceFields(this);
    }

    public void setEmpleado(Empleado empleado) {
        binder.setBean(empleado);
    }
}