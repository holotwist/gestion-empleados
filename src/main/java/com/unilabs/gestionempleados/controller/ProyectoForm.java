package com.unilabs.gestionempleados.controller;

import com.unilabs.gestionempleados.model.Empleado;
import com.unilabs.gestionempleados.model.Proyecto;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import java.util.List;
import com.vaadin.flow.component.select.Select;

public class ProyectoForm extends FormLayout {

    public TextField nombre = new TextField("Nombre");
    public TextField codigo = new TextField("Código");
    public Select<Empleado> empleadosSelect = new Select<>(); // MODF: Cambia a Select para selección única

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

        binder.bindInstanceFields(this); // Se puede volver a poner bindInstanceFields, debido a que se hicieron publicos los campos
    }

    public void setProyecto(Proyecto proyecto) {
        binder.setBean(proyecto);
        // Establecer el valor del Select.  Si no se hace, el componente no muestra la selección actual.
        if (proyecto != null && proyecto.getEmpleados() != null && !proyecto.getEmpleados().isEmpty()) {
            empleadosSelect.setValue(proyecto.getEmpleados().get(0)); // Suponiendo selección única.
        } else {
            empleadosSelect.clear(); // Limpia la selección si no hay empleados.
        }
    }
}