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
import java.util.stream.Collectors;

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
    private Button addEmpleadoButton = new Button("Añadir Empleado");
    private Button editEmpleadoButton = new Button("Editar Empleado");
    private Button deleteEmpleadoButton = new Button("Eliminar Empleado");
    private Button addDepartamentoButton = new Button("Añadir Departamento");
    private Button editDepartamentoButton = new Button("Editar Departamento");
    private Button deleteDepartamentoButton = new Button("Eliminar Departamento");
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

        List<Departamento> departamentos = departamentoService.obtenerTodosLosDepartamentos();
        List<Empleado> empleados = empleadoService.obtenerTodosLosEmpleados();

        empleadoForm = new EmpleadoForm(departamentos);
        departamentoForm = new DepartamentoForm();
        proyectoForm = new ProyectoForm(empleados);

        mostrarContribucionButton.addClickListener(event -> mostrarContribucion());
        addEmpleadoButton.addClickListener(event -> addEmpleado());
        editEmpleadoButton.addClickListener(event -> editEmpleado());
        deleteEmpleadoButton.addClickListener(event -> deleteEmpleado());
        addDepartamentoButton.addClickListener(event -> addDepartamento());
        editDepartamentoButton.addClickListener(event -> editDepartamento());
        deleteDepartamentoButton.addClickListener(event -> deleteDepartamento());
        addProyectoButton.addClickListener(event -> addProyecto());
        editProyectoButton.addClickListener(event -> editProyecto());
        deleteProyectoButton.addClickListener(event -> deleteProyecto());

        HorizontalLayout empleadoButtonsLayout = new HorizontalLayout(addEmpleadoButton, editEmpleadoButton, deleteEmpleadoButton);
        HorizontalLayout departamentoButtonsLayout = new HorizontalLayout(addDepartamentoButton, editDepartamentoButton, deleteDepartamentoButton);
        HorizontalLayout proyectoButtonsLayout = new HorizontalLayout(addProyectoButton, editProyectoButton, deleteProyectoButton);

        add(empleadoGrid, empleadoButtonsLayout, departamentoGrid, departamentoButtonsLayout, proyectoGrid, proyectoButtonsLayout, mostrarContribucionButton);
    }

    private void configurarGrids() {
        // setColumns() reemplaza las columnas por defecto.
        empleadoGrid.setColumns("id", "nombre");
        empleadoGrid.addColumn(empleado -> empleado.getDepartamento() != null ? empleado.getDepartamento().getNombre() : "")
                .setHeader("Departamento");

        // Departamentos: Botón de detalles.
        departamentoGrid.setColumns("id", "nombre", "codigo");
        departamentoGrid.addComponentColumn(this::createEmpleadoDetailsButton)
                .setHeader("Empleados"); // Usamos el método creado.

        // Proyectos: Botón de detalles.
        proyectoGrid.setColumns("id", "nombre", "codigo");
        proyectoGrid.addComponentColumn(this::createProyectoDetailsButton)
                .setHeader("Empleados");
    }

    private Button createEmpleadoDetailsButton(Departamento departamento) {
        Button detailsButton = new Button("View Details");
        detailsButton.addClickListener(event -> showEmpleadoDetails(departamento.getEmpleados()));
        return detailsButton;
    }

    private Button createProyectoDetailsButton(Proyecto proyecto) {
        Button detailsButton = new Button("View Details");
        detailsButton.addClickListener(event -> showEmpleadoDetails(proyecto.getEmpleados()));
        return detailsButton;
    }


    private void showEmpleadoDetails(List<Empleado> empleados) {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        // Crea una nueva grilla dentro del diálogo.
        Grid<Empleado> detailsGrid = new Grid<>(Empleado.class);
        detailsGrid.setColumns("id", "nombre");
        detailsGrid.setItems(empleados);

        dialog.add(detailsGrid);
        dialog.open();
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

    private void addEmpleado() {
        Dialog dialog = new Dialog();
        empleadoForm.setEmpleado(new Empleado());
        dialog.add(empleadoForm);

        Button saveButton = new Button("Guardar", event -> {
            Empleado empleado = empleadoForm.binder.getBean();
            empleadoService.guardarEmpleado(empleado);
            configurarDatosGrids();
            dialog.close();
        });
        dialog.add(saveButton);
        dialog.open();
    }

    private void editEmpleado() {
        Empleado empleadoSeleccionado = empleadoGrid.asSingleSelect().getValue();

        if (empleadoSeleccionado != null) {
            Dialog dialog = new Dialog();
            empleadoForm.setEmpleado(empleadoSeleccionado);
            dialog.add(empleadoForm);

            Button saveButton = new Button("Guardar", event -> {
                Empleado empleado = empleadoForm.binder.getBean();
                empleadoService.guardarEmpleado(empleado);
                configurarDatosGrids();
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

    private void addDepartamento() {
        Dialog dialog = new Dialog();
        departamentoForm.setDepartamento(new Departamento());
        dialog.add(departamentoForm);

        Button saveButton = new Button("Guardar", event -> {
            Departamento departamento = departamentoForm.binder.getBean();
            departamentoService.guardarDepartamento(departamento);
            configurarDatosGrids();

            // Actualiza la lista de departamentos en el formulario de empleados
            List<Departamento> departamentos = departamentoService.obtenerTodosLosDepartamentos();
            empleadoForm.departamento.setItems(departamentos);

            dialog.close();
        });
        dialog.add(saveButton);
        dialog.open();
    }

    private void editDepartamento() {
        Departamento departamentoSeleccionado = departamentoGrid.asSingleSelect().getValue();

        if (departamentoSeleccionado != null) {
            Dialog dialog = new Dialog();
            departamentoForm.setDepartamento(departamentoSeleccionado);
            dialog.add(departamentoForm);

            Button saveButton = new Button("Guardar", event -> {
                Departamento departamento = departamentoForm.binder.getBean();
                departamentoService.guardarDepartamento(departamento);
                configurarDatosGrids();
                // Actualiza la lista de departamentos en el formulario de empleados
                List<Departamento> departamentos = departamentoService.obtenerTodosLosDepartamentos();
                empleadoForm.departamento.setItems(departamentos);

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

            // Actualiza la lista de departamentos en el formulario de empleados
            List<Departamento> departamentos = departamentoService.obtenerTodosLosDepartamentos();
            empleadoForm.departamento.setItems(departamentos);

        } else {
            Notification.show("Selecciona un departamento para eliminar.");
        }
    }

    private void addProyecto() {
        Dialog dialog = new Dialog();
        proyectoForm.setProyecto(new Proyecto());
        dialog.add(proyectoForm);

        Button saveButton = new Button("Guardar", event -> {
            Proyecto proyecto = proyectoForm.binder.getBean();

            // Obtener el empleado seleccionado del Select en ProyectoForm
            Empleado empleadoSeleccionado = proyectoForm.empleadosSelect.getValue();

            // Asegurarse de que se seleccionó un empleado
            if (empleadoSeleccionado != null) {
                // Asignar el empleado al proyecto (si aún no está en la lista)
                if (proyecto.getEmpleados() == null ) { // Si no se inicializo antes, hay que hacerlo
                    proyecto.setEmpleados(new java.util.ArrayList<>()); // Inicializar para evitar NullPointerException
                }
                if (!proyecto.getEmpleados().contains(empleadoSeleccionado)) {
                    proyecto.getEmpleados().add(empleadoSeleccionado);
                }
            }

            proyectoService.guardarProyecto(proyecto);
            configurarDatosGrids();
            dialog.close();
        });
        dialog.add(saveButton);
        dialog.open();
    }


    private void editProyecto() {
        Proyecto proyectoSeleccionado = proyectoGrid.asSingleSelect().getValue();

        if (proyectoSeleccionado != null) {
            Dialog dialog = new Dialog();
            proyectoForm.setProyecto(proyectoSeleccionado);
            dialog.add(proyectoForm);

            Button saveButton = new Button("Guardar", event -> {
                Proyecto proyecto = proyectoForm.binder.getBean();
                proyectoService.guardarProyecto(proyecto);
                configurarDatosGrids();
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