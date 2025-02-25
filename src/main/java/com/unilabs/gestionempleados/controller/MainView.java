package com.unilabs.gestionempleados.controller;

import com.unilabs.gestionempleados.model.Departamento;
import com.unilabs.gestionempleados.model.Empleado;
import com.unilabs.gestionempleados.model.Proyecto;
import com.unilabs.gestionempleados.service.ContribucionService;
import com.unilabs.gestionempleados.service.DepartamentoService;
import com.unilabs.gestionempleados.service.EmpleadoService;
import com.unilabs.gestionempleados.service.ProyectoService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

// Se define la ruta de acceso a este View
@Route("main")
public class MainView extends VerticalLayout {

    private final EmpleadoService empleadoService;
    private final DepartamentoService departamentoService;
    private final ProyectoService proyectoService;
    private final ContribucionService contribucionService;

    private Grid<Empleado> empleadoGrid = new Grid<>(Empleado.class);
    private Grid<Departamento> departamentoGrid = new Grid<>(Departamento.class);
    private Grid<Proyecto> proyectoGrid = new Grid<>(Proyecto.class);

    private Button mostrarContribucionButton = new Button("Mostrar Contribución");

    //Botones para empleados
    private Button addEmpleadoButton = new Button("Añadir Empleado");
    private Button editEmpleadoButton = new Button("Editar Empleado");
    private Button deleteEmpleadoButton = new Button("Eliminar Empleado");

    //Botones para departamentos
    private Button addDepartamentoButton = new Button("Añadir Departamento");
    private Button editDepartamentoButton = new Button("Editar Departamento");
    private Button deleteDepartamentoButton = new Button("Eliminar Departamento");

    //Botones para proyectos
    private Button addProyectoButton = new Button("Añadir Proyecto");
    private Button editProyectoButton = new Button("Editar Proyecto");
    private Button deleteProyectoButton = new Button("Eliminar Proyecto");

    private EmpleadoForm empleadoForm;
    private DepartamentoForm departamentoForm;
    private ProyectoForm proyectoForm;

    @Autowired
    public MainView(EmpleadoService empleadoService, DepartamentoService departamentoService, ProyectoService proyectoService, ContribucionService contribucionService) {
        this.empleadoService = empleadoService;
        this.departamentoService = departamentoService;
        this.proyectoService = proyectoService;
        this.contribucionService = contribucionService;

        configurarGrids();
        configurarDatosGrids();

        //Configuracion de los formularios
        List<Departamento> departamentos = departamentoService.obtenerTodosLosDepartamentos();
        List<Empleado> empleados = empleadoService.obtenerTodosLosEmpleados();

        empleadoForm = new EmpleadoForm(departamentos);
        departamentoForm = new DepartamentoForm();
        proyectoForm = new ProyectoForm(empleados);

        mostrarContribucionButton.addClickListener(event -> mostrarContribucion());

        //Listeners para empleados
        addEmpleadoButton.addClickListener(event -> addEmpleado());
        editEmpleadoButton.addClickListener(event -> editEmpleado());
        deleteEmpleadoButton.addClickListener(event -> deleteEmpleado());

        //Listeners para departamentos
        addDepartamentoButton.addClickListener(event -> addDepartamento());
        editDepartamentoButton.addClickListener(event -> editDepartamento());
        deleteDepartamentoButton.addClickListener(event -> deleteDepartamento());

        //Listeners para proyectos
        addProyectoButton.addClickListener(event -> addProyecto());
        editProyectoButton.addClickListener(event -> editProyecto());
        deleteProyectoButton.addClickListener(event -> deleteProyecto());


        //Layout para los botones de empleados
        HorizontalLayout empleadoButtonsLayout = new HorizontalLayout(addEmpleadoButton,editEmpleadoButton,deleteEmpleadoButton);

        //Layout para los botones de departamentos
        HorizontalLayout departamentoButtonsLayout = new HorizontalLayout(addDepartamentoButton,editDepartamentoButton,deleteDepartamentoButton);

        //Layout para los botones de proyectos
        HorizontalLayout proyectoButtonsLayout = new HorizontalLayout(addProyectoButton,editProyectoButton,deleteProyectoButton);

        add(empleadoGrid, empleadoButtonsLayout, departamentoGrid, departamentoButtonsLayout, proyectoGrid, proyectoButtonsLayout, mostrarContribucionButton);
    }

    private void configurarGrids() {
        // Configura las columnas que se mostrarán en la grilla de empleados
        empleadoGrid.addColumn(Empleado::getId).setHeader("ID");
        empleadoGrid.addColumn(Empleado::getNombre).setHeader("Nombre");
        empleadoGrid.addColumn(empleado -> empleado.getDepartamento() != null ? empleado.getDepartamento().getNombre() : "").setHeader("Departamento");

        // Configura las columnas que se mostrarán en la grilla de departamentos
        departamentoGrid.addColumn(Departamento::getId).setHeader("ID");
        departamentoGrid.addColumn(Departamento::getNombre).setHeader("Nombre");
        departamentoGrid.addColumn(Departamento::getCodigo).setHeader("Código");

        // Configura las columnas que se mostrarán en la grilla de proyectos
        proyectoGrid.addColumn(Proyecto::getId).setHeader("ID");
        proyectoGrid.addColumn(Proyecto::getNombre).setHeader("Nombre");
        proyectoGrid.addColumn(Proyecto::getCodigo).setHeader("Código");
    }

    private void configurarDatosGrids() {
        empleadoGrid.setItems(empleadoService.obtenerTodosLosEmpleados());
        departamentoGrid.setItems(departamentoService.obtenerTodosLosDepartamentos());
        proyectoGrid.setItems(proyectoService.obtenerTodosLosProyectos());
    }

    private void mostrarContribucion() {
        Empleado empleadoSeleccionado = empleadoGrid.asSingleSelect().getValue();
        Proyecto proyectoSeleccionado = proyectoGrid.asSingleSelect().getValue();

        if (empleadoSeleccionado != null && proyectoSeleccionado != null) {
            String contribucion = contribucionService.obtenerContribucion(empleadoSeleccionado, proyectoSeleccionado);
            Notification.show(contribucion);
        } else {
            Notification.show("Selecciona un empleado y un proyecto para ver la contribución.");
        }
    }

    //Metodos para empleados
    private void addEmpleado() {
        Dialog dialog = new Dialog();
        empleadoForm.setEmpleado(new Empleado());
        dialog.add(empleadoForm);

        Button saveButton = new Button("Guardar", event -> {
            Empleado empleado = empleadoForm.binder.getBean();
            empleadoService.guardarEmpleado(empleado);
            configurarDatosGrids(); //Refresca los datos
            dialog.close();
        });
        dialog.add(saveButton);
        dialog.open();
    }

    private void editEmpleado() {
        Empleado empleadoSeleccionado = empleadoGrid.asSingleSelect().getValue();

        if (empleadoSeleccionado != null){
            Dialog dialog = new Dialog();
            empleadoForm.setEmpleado(empleadoSeleccionado);
            dialog.add(empleadoForm);

            Button saveButton = new Button("Guardar", event -> {
                Empleado empleado = empleadoForm.binder.getBean();
                empleadoService.guardarEmpleado(empleado);
                configurarDatosGrids(); //Refresca los datos
                dialog.close();
            });
            dialog.add(saveButton);
            dialog.open();

        } else {
            Notification.show("Selecciona un empleado para editar.");
        }
    }

    private void deleteEmpleado() {
        Empleado empleadoSeleccionado = empleadoGrid.asSingleSelect().getValue();
        if (empleadoSeleccionado != null) {
            empleadoService.eliminarEmpleado(empleadoSeleccionado.getId());
            configurarDatosGrids();
        } else {
            Notification.show("Selecciona un empleado para eliminar.");
        }
    }

    //Metodos para departamentos
    private void addDepartamento() {
        Dialog dialog = new Dialog();
        departamentoForm.setDepartamento(new Departamento());
        dialog.add(departamentoForm);

        Button saveButton = new Button("Guardar", event -> {
            Departamento departamento = departamentoForm.binder.getBean();
            departamentoService.guardarDepartamento(departamento);
            configurarDatosGrids(); //Refresca los datos
            dialog.close();
        });
        dialog.add(saveButton);
        dialog.open();
    }

    private void editDepartamento() {
        Departamento departamentoSeleccionado = departamentoGrid.asSingleSelect().getValue();

        if (departamentoSeleccionado != null){
            Dialog dialog = new Dialog();
            departamentoForm.setDepartamento(departamentoSeleccionado);
            dialog.add(departamentoForm);

            Button saveButton = new Button("Guardar", event -> {
                Departamento departamento = departamentoForm.binder.getBean();
                departamentoService.guardarDepartamento(departamento);
                configurarDatosGrids(); //Refresca los datos
                dialog.close();
            });
            dialog.add(saveButton);
            dialog.open();

        } else {
            Notification.show("Selecciona un departamento para editar.");
        }
    }

    private void deleteDepartamento() {
        Departamento departamentoSeleccionado = departamentoGrid.asSingleSelect().getValue();
        if (departamentoSeleccionado != null) {
            departamentoService.eliminarDepartamento(departamentoSeleccionado.getId());
            configurarDatosGrids();
        } else {
            Notification.show("Selecciona un departamento para eliminar.");
        }
    }

    //Metodos para proyectos
    private void addProyecto() {
        Dialog dialog = new Dialog();
        proyectoForm.setProyecto(new Proyecto());
        dialog.add(proyectoForm);

        Button saveButton = new Button("Guardar", event -> {
            Proyecto proyecto = proyectoForm.binder.getBean();
            proyectoService.guardarProyecto(proyecto);
            configurarDatosGrids(); //Refresca los datos
            dialog.close();
        });
        dialog.add(saveButton);
        dialog.open();
    }

    private void editProyecto() {
        Proyecto proyectoSeleccionado = proyectoGrid.asSingleSelect().getValue();

        if (proyectoSeleccionado != null){
            Dialog dialog = new Dialog();
            proyectoForm.setProyecto(proyectoSeleccionado);
            dialog.add(proyectoForm);

            Button saveButton = new Button("Guardar", event -> {
                Proyecto proyecto = proyectoForm.binder.getBean();
                proyectoService.guardarProyecto(proyecto);
                configurarDatosGrids(); //Refresca los datos
                dialog.close();
            });
            dialog.add(saveButton);
            dialog.open();

        } else {
            Notification.show("Selecciona un proyecto para editar.");
        }
    }

    private void deleteProyecto() {
        Proyecto proyectoSeleccionado = proyectoGrid.asSingleSelect().getValue();
        if (proyectoSeleccionado != null) {
            proyectoService.eliminarProyecto(proyectoSeleccionado.getId());
            configurarDatosGrids();
        } else {
            Notification.show("Selecciona un proyecto para eliminar.");
        }
    }
}