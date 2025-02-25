INSERT INTO departamento (nombre, codigo) VALUES ('Desarrollo', 'DEV');
INSERT INTO departamento (nombre, codigo) VALUES ('Marketing', 'MKT');

INSERT INTO empleado (nombre, departamento_id) VALUES ('Juan Pérez', 1);
INSERT INTO empleado (nombre, departamento_id) VALUES ('María Gómez', 2);

INSERT INTO gerente (id, nivel_de_autoridad) VALUES (1, 'Departamento');
INSERT INTO tecnico (id, especialidad) VALUES (2, 'Backend');

INSERT INTO proyecto (nombre, codigo) VALUES ('Proyecto A', 'PA');
INSERT INTO proyecto (nombre, codigo) VALUES ('Proyecto B', 'PB');

INSERT INTO proyecto_empleado (proyecto_id, empleado_id) VALUES (1, 1);
INSERT INTO proyecto_empleado (proyecto_id, empleado_id) VALUES (2, 2);