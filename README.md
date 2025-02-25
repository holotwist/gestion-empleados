# Gestión de Empleados

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Este proyecto es una aplicación web para la gestión de empleados, departamentos y proyectos, desarrollada como solución al problema planteado por el profesor Raúl Yulbraynner Rivera Gálvez en el programa Programación II (2025-1).  Se ha puesto especial énfasis en la aplicación de los principios SOLID y el uso de las mejores prácticas de desarrollo.

## Problema Planteado

Se solicitó la creación de una aplicación para gestionar empleados, departamentos y proyectos, permitiendo la asignación de empleados a departamentos y proyectos, así como la visualización de la contribución de cada empleado a los proyectos.

## Solución Implementada

Se desarrolló una aplicación web utilizando Spring Boot y Vaadin, con interfaz de usuario y funcionalidades para gestionar empleados, departamentos y proyectos. Se implementaron servicios para contener la lógica de negocio, repositorios JPA para la persistencia y una estrategia de contribución para determinar cómo cada empleado contribuye a un proyecto.

## Tecnologías Utilizadas

*   **Spring Boot:**  Framework de Java que simplifica la creación de aplicaciones basadas en Spring.  Su uso permite un rápido desarrollo, configuración mínima y la capacidad de crear aplicaciones independientes y listas para producción.

*   **Vaadin:** Framework de código abierto para construir interfaces de usuario web modernas con Java.

*   **Lombok:**  Librería de Java que reduce la cantidad de código boilerplate (repetitivo) que necesita ser escrito. A través de anotaciones, Lombok genera automáticamente métodos como getters, setters, `equals`, `hashCode`, y `toString`, haciendo el código más limpio y legible.

*   **H2:** Base de datos en memoria, ideal para el desarrollo y las pruebas. Permite tener una base de datos funcional sin necesidad de configurar un servidor de base de datos separado.

*   **Spring Data JPA:**  Módulo de Spring que simplifica el acceso a datos usando el API de Java Persistence (JPA), antes Javax, pero desde versiones nuevas de Spring Boot es Jakarta. Permite interactuar con bases de datos relacionales de una manera más sencilla y con menos código. Spring Data JPA usa las caracteristicas de las interfaces y la introspección de Java para generar automáticamente la implementación de los repositorios en tiempo de ejecución. Cuando la aplicación se inicia, Spring escanea las interfaces que extienden `JpaRepository` y crea clases proxy que implementan la lógica de acceso a datos. Esto significa que no se necesita escribir ninguna clase concreta para implementar estas interfaces.

## Arquitectura

El proyecto sigue una arquitectura en capas:

*   **Capa de Presentación (View):**  Implementada con Vaadin, proporciona la interfaz de usuario para interactuar con la aplicación.

*   **Capa de Control (Controller):**  Gestiona la interacción entre la capa de presentación y la capa de servicio.  Recibe las solicitudes del usuario, invoca los servicios apropiados y actualiza la interfaz de usuario.

*   **Capa de Servicio (Service):** Contiene la lógica de negocio de la aplicación.  Coordina las operaciones entre los repositorios y realiza las validaciones necesarias.

*   **Capa de Acceso a Datos (Repository):**  Implementada con Spring Data JPA, proporciona una interfaz para interactuar con la base de datos.

*   **Capa de Modelo (Model):**  Representa las entidades de dominio (Empleado, Departamento, Proyecto), representa la forma de los datos.

## Principios SOLID

Este proyecto se adhiere a los principios SOLID de la siguiente manera:

*   **Single Responsibility Principle (SRP):** Cada clase tiene una única responsabilidad.  Por ejemplo, `Empleado`, `Departamento`, y `Proyecto` se centran en representar sus respectivas entidades, mientras que los servicios asociados gestionan la lógica de negocio.

*   **Open/Closed Principle (OCP):** Las clases están abiertas para la extensión pero cerradas para la modificación.  Se utilizan interfaces y abstracciones para permitir la extensión de la funcionalidad sin modificar el código existente.  Ejemplo: La interfaz `Contribuyente` permite agregar nuevas estrategias de contribución sin alterar las clases existentes.

*   **Liskov Substitution Principle (LSP):** Las subclases (`Gerente`, `Tecnico`) se comportan como `Empleado` en todos los contextos. Esto asegura la consistencia y la predictibilidad del programa.

*   **Interface Segregation Principle (ISP):** Se prefieren múltiples interfaces específicas a una única interfaz general.  Las interfaces `AdministradorDeProyectos` y `ColaboradorTecnico` definen roles específicos, evitando que las clases implementen métodos innecesarios.

*   **Dependency Inversion Principle (DIP):** Los módulos de alto nivel no dependen de los módulos de bajo nivel. Ambos dependen de abstracciones.  Se utiliza la inyección de dependencias (DI) de Spring para lograr esto.  Por ejemplo, los controladores dependen de las interfaces de los servicios en lugar de las implementaciones concretas.

## Modificaciones al Problema Original para Cumplir con SOLID

Para mejorar el cumplimiento de los principios SOLID, se realizaron las siguientes modificaciones:

*   **Separación de la Lógica de Negocio y la Persistencia:** La lógica de negocio se encapsuló en servicios (`EmpleadoService`, `DepartamentoService`, `ProyectoService`), mientras que la persistencia se gestionó mediante los repositorios de Spring Data JPA.

*   **Interfaces para Roles:** Se definieron interfaces para los roles que pueden desempeñar los empleados (`AdministradorDeProyectos`, `ColaboradorTecnico`), en lugar de depender directamente de las clases `Gerente` y `Tecnico` para determinar su comportamiento.

*   **Estrategias de Contribución:** Se implementó la interfaz `Contribuyente` mediante clases de estrategia (`EstrategiaContribucionGerente`, `EstrategiaContribucionTecnico`) que definen cómo un empleado contribuye a un proyecto. Esto permite cambiar la estrategia de contribución en tiempo de ejecución sin modificar las clases `Gerente` o `Tecnico`. La inyección de dependencias es clave para este punto, ya que permite reemplazar la estrategia por otra, sin necesidad de re compilación

## Configuración e Instalación

1.  **Requisitos:**

    *   Java 17 o superior
    *   Maven
    *   Un IDE (IntelliJ IDEA, Eclipse, etc. Recomendado IntelliJ Ultimate o CE)

2.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/holotwist/gestion-empleados
    cd gestion-empleados
    ```

3.  **Generar JAR de producción y ejecutar:**

    ```bash
    mvn clean package -Pproduction
    java -jar target/gestionempleados-0.0.1-SNAPSHOT.jar # El nombre puede diferir
    ```

4.  **Acceder a la aplicación:**

    Abrir el navegador y acceder a `http://localhost:8080/main`

## Uso

La aplicación permite:

*   Gestionar empleados (crear, editar, eliminar).
*   Gestionar departamentos (crear, editar, eliminar).
*   Gestionar proyectos (crear, editar, eliminar).
*   Asignar empleados a departamentos y proyectos.
*   Visualizar la contribución de cada empleado a los proyectos.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

