package com.unilabs.gestionempleados.controller;

import com.unilabs.gestionempleados.model.Empleado;
import com.unilabs.gestionempleados.model.Proyecto;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import java.util.List;
import com.vaadin.flow.component.select.Select;

public class ProyectoForm extends FormLayout {

    private TextField nombre = new TextField("Nombre");
    private TextField codigo = new TextField("Código");
    private Select<Empleado> empleadosSelect = new Select<>(); // MODF: Cambia a Select para selección única

    Binder<Proyecto> binder = new Binder<>(Proyecto.class);

    public ProyectoForm(List<Empleado> empleadosList) {
        empleadosSelect.setItems(empleadosList);
        empleadosSelect.setItemLabelGenerator(Empleado::getNombre);
        empleadosSelect.setLabel("Empleado Asignado");

        add(nombre, codigo, empleadosSelect);

        // Enlaza manualmente los campos del formulario a las propiedades de la entidad Proyecto
        binder.forField(nombre)
                .bind(Proyecto::getNombre, Proyecto::setNombre);

        binder.forField(codigo)
                .bind(Proyecto::getCodigo, Proyecto::setCodigo);

      /*  binder.forField(empleadosSelect)
                .bind(Proyecto::getEmpleados, Proyecto::setEmpleados);*/

        //binder.bindInstanceFields(this); // HACK: Se elimina esta línea, ya que no se puede enlazar automáticamente la lista de empleados, Vaadin da error
    }

    public void setProyecto(Proyecto proyecto) {
        binder.setBean(proyecto);
    }
}