const common_relations = {
  created_by: {
    identifier: "id_usuario",
    data_type: "integer",
    filter_type: "dropdown",
    table_name: "usuarios_empleados",
    display_field:
      "CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno)",
    database: "vm_general",
  },
  updated_by: {
    identifier: "id_usuario",
    data_type: "integer",
    filter_type: "dropdown",
    table_name: "usuarios_empleados",
    display_field:
      "CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno)",
    database: "vm_general",
  },
  deleted_by: {
    identifier: "id_usuario",
    data_type: "integer",
    filter_type: "dropdown",
    table_name: "usuarios_empleados",
    display_field:
      "CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno)",
    database: "vm_general",
  },
};

//departamento: 1:VENTAS, 2:CONTABILIDAD, 3:RECURSOS HUMANOS, 4:ADMINISTRACION, 5:INVENTARIO 6:MESA DE CONTROL
//entidad: 1:VELVER_MOTOS
//rank: 1:DIRECTOR, 2:ADMINISTRADOR, 3:DISTRIBUIDOR, 4:VENDEDOR
//tipo_acceso: 1:LECTURA, 2:ESCRITURA, 3:MODIFICACION, 4:ELIMINACION
//tipo: 1:TRANSACCIONAL, 2:CATALOGO
//alcance: 1:ALL, 2:OWN

export const databaseStructure = {
  vm_entidad_velver_motos_velver: {
    tables: {
      empleados: {
        display_table_name: "Empleados",
        editable: true,
        id_entidad: 1,
        id_departamento: [3, 4],
        validations: {
          nomina: {
            data_type: "integer",
            required: true,
          },
          rfc: {
            data_type: "string",
            filter_type: "text-input",
            regex:
              "^([A-ZÑ&]{3,4})(\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01]))([A-Z\\d]{2})([A\\d])$",
          },
          curp: {
            data_type: "string",
            filter_type: "text-input",
            regex: "^[A-Z]{4}[0-9]{6}[H,M][A-Z]{5}[0-9]{2}$",
          },
        },
        foreign_keys: {
          id_usuario: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "usuarios",
            display_field: "username",
          },
          id_sucursal: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "sucursales",
            display_field: "nombre",
          },

          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_usuario",
          "nombre",
          "apellido_paterno",
          "apellido_materno",
          "id_sucursal",
          "entrada",
          "salida",
          "nomina",
          "rfc",
          "curp",
          "fecha_nacimiento",
          "genero",
          "telefono",
          "correo",
          "cv",
          "estatus", //activo, inactivo
          "fecha_contratacion",
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "nomina",
          "nombre",
          "apellido_paterno",
          "apellido_materno",
          "telefono",
          "correo",
          "rfc",
          "curp",
          "estatus",
        ],
        encrypted_fields: [],
        enum_fields: {
          estatus: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "estatus",
            display_field: "estatus",
            is_native_enum: true,
          },
          genero: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "genero",
            display_field: "genero",
            is_native_enum: true,
          },
        },
      },

      clientes: {
        display_table_name: "Clientes",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 3, 4],
        validations: {
          rfc: {
            data_type: "string",
            filter_type: "text-input",
            regex:
              "^([A-ZÑ&]{3,4})(\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01]))([A-Z\\d]{2})([A\\d])$",
          },
          curp: {
            data_type: "string",
            filter_type: "text-input",
            regex: "^[A-Z]{4}[0-9]{6}[H,M][A-Z]{5}[0-9]{2}$",
          },
        },
        foreign_keys: {
          id_usuario: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "usuarios",
            display_field: "username",
          },
          id_direccion: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "catalogo_direcciones",
            display_field: "direccion",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_usuario",
          "nombre",
          "apellido_paterno",
          "apellido_materno",
          "rfc",
          "curp",
          "fecha_nacimiento",
          "genero",
          "telefono",
          "id_direccion",
          "estado_civil",
          "ine_frontal",
          "ine_trasera",
          "correo",
          "medio_entero",
          "sector_industrial",
          "situacion_laboral",
          "ingreso_mensual",
          "actividad_economica",
          "entrada_trabajo",
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "curp",
          "nombre",
          "apellido_paterno",
          "apellido_materno",
          "telefono",
          "rfc",
          "correo",
          "telefono",
        ],
        encrypted_fields: [],
        enum_fields: {
          genero: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "genero",
            display_field: "genero",
            is_native_enum: true,
          },
          estado_civil: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "estado_civil",
            display_field: "estado_civil",
            is_native_enum: true,
          },
          medio_entero: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "medio_entero",
            display_field: "medio_entero",
            is_native_enum: true,
          },
          sector_industrial: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "sector_industrial",
            display_field: "sector_industrial",
            is_native_enum: true,
          },
        },
      },

      productos: {
        display_table_name: "Catálogo de Productos",
        editable: true,
        id_entidad: 2,
        id_departamento: [1, 4, 5],
        validations: {
          costo: {
            data_type: "decimal",
            required: true,
          },
          precio_publico: {
            data_type: "decimal",
            required: true,
          },
          precio_contado: {
            data_type: "decimal",
            required: true,
          },
        },
        foreign_keys: {
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "categoria", // vehiculo, accesorios, refacciones
          "nombre",
          "marca",
          "modelo",
          "costo",
          "precio_publico",
          "precio_contado",
          "descripcion",
          "estatus", //activo, inactivo, agotado
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "nombre",
          "categoria",
          "marca",
          "modelo",
          "estatus",
          "descripcion",
        ],
        encrypted_fields: [],
        enum_fields: {
          estatus: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "estatus",
            display_field: "estatus",
            is_native_enum: true,
          },
          categoria: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "categoria",
            display_field: "categoria",
            is_native_enum: true,
          },
        },
        chart_config: {},
      },

      inventario: {
        display_table_name: "Inventario",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 4, 5],
        validations: {
          sku: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          id_producto: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "productos",
            display_field: "nombre",
          },
          ultima_ubicacion: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "sucursales",
            display_field: "nombre",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_producto",
          "sku",
          "ultima_ubicacion", //sucursal
          "tipo", // scooter, carga, deportiva
          "chasis",
          "no_motor",
          "repuve",
          "leyenda", //leyenda de la placa moticleta nueva
          "no_serie",
          "color",
          "año",
          "pedimento_importacion",
          "aduana",
          "via", //terrestre, maritima, aerea
          "status", //activo, inactivo, vendido
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "id_producto",
          "ultima_ubicacion",
          "sku",
          "status",
          "tipo",
          "color",
          "chasis",
          "no_motor",
          "no_serie",
        ],
        encrypted_fields: [],
        enum_fields: {
          tipo: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "tipo",
            display_field: "tipo",
            is_native_enum: true,
          },
        },
      },

      transacciones: {
        display_table_name: "Transacciones",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4],
        validations: {
          tipo: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          id_producto: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "productos",
            display_field: "nombre",
          },
          id_empleado: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "usuarios_empleados",
            display_field: "nombre",
          },
          id_cliente: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "usuarios_clientes",
            display_field: "nombre",
          },
          id_sucursal: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "sucursales",
            display_field: "nombre",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_producto",
          "id_empleado",
          "id_cliente",
          "id_sucursal",
          "tipo", //venta, consulta
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "id_producto",
          "id_empleado",
          "id_cliente",
          "id_sucursal",
          "tipo",
        ],
        encrypted_fields: [],
        enum_fields: {
          tipo: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "tipo",
            display_field: "tipo",
            is_native_enum: true,
          },
        },
      },

      ventas: {
        display_table_name: "Ventas",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4, 5],
        validations: {
          metodo_pago: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          id_transaccion: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "transacciones",
            display_field: "id",
          },
          id_inventario: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "inventario",
            display_field: "id",
          },
          id_credito: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "creditos",
            display_field: "id",
          },
          id_consulta: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "consultas",
            display_field: "id",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_transaccion",
          "id_inventario",
          "metodo_pago", //efectivo, tarjeta, transferencia, credito
          "origen", //venta directa, venta por consulta
          "id_consulta", //se realizo venta por medio de consulta financiera
          "id_credito",
          "imagen", //foto de la venta
          "factura", //pdf y xml de la factura
          "estatus", //pagado, pendiente, cancelado
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "id_transaccion",
          "id_inventario",
          "id_credito",
          "estatus",
          "metodo_pago",
        ],
        encrypted_fields: [],
        enum_fields: {
          metodo_pago: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "metodo_pago",
            display_field: "metodo_pago",
            is_native_enum: true,
          },
        },
      },

      consultas: {
        display_table_name: "Consultas",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4, 5],
        validations: {
          estatus: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          id_transaccion: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "transacciones",
            display_field: "id",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_transaccion",
          "fecha_expiracion",
          "estatus", //vencida, activa, cancelada
          "notas",
          "created_at",
          "updated_at",
        ],
        searchable_fields: ["id_transaccion", "estatus", "preferente"],
        encrypted_fields: [],
        enum_fields: {
          metodo_pago: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "metodo_pago",
            display_field: "metodo_pago",
            is_native_enum: true,
          },
        },
      },

      financieras: {
        display_table_name: "Financieras",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4],
        validations: {
          nombre: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          ...common_relations,
        },
        allowed_fields: ["id", "nombre", "created_at", "updated_at"],
        searchable_fields: ["nombre"],
      },

      cotizaciones_financiera: {
        display_table_name: "Financieras",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4],
        validations: {
          cantidad_financiada: {
            data_type: "decimal",
            required: true,
          },
          plazo: {
            data_type: "integer",
            required: true,
          },
          pago: {
            data_type: "decimal",
            required: true,
          },
          monto_total: {
            data_type: "decimal",
            required: true,
          },
        },
        foreign_keys: {
          id_consulta: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "consultas",
            display_field: "id",
          },
          id_financiera: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "financieras",
            display_field: "nombre",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_consulta",
          "id_financiera",
          "cantidad_financiada",
          "plazo",
          "pago",
          "monto_total",
          "preferente", //cotizacion preferente (true o false)
          "estatus", //pendiente, aprobado, rechazado
          "created_at",
          "updated_at",
        ],
        searchable_fields: ["nombre"],
      },

      creditos: {
        display_table_name: "Créditos",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4],
        validations: {
          enganche: {
            data_type: "decimal",
            required: true,
          },
          enganche_status: {
            data_type: "string",
            required: true,
          },
          codigo_abono: {
            data_type: "string",
            required: true,
          },
          fecha_deposito: {
            data_type: "date",
            required: true,
          },
          credito_status: {
            data_type: "string",
            required: true,
          },
          vencimiento: {
            data_type: "date",
            required: true,
          },
        },
        foreign_keys: {
          cotizacion: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "cotizaciones_financiera",
            display_field: "id",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "cotizacion",
          "enganche",
          "enganche_status",
          "codigo_abono",
          "fecha_deposito",
          "credito_status",
          "vencimiento",
          "created_at",
          "updated_at",
        ],
        searchable_fields: [
          "enganche",
          "enganche_status",
          "codigo_abono",
          "fecha_deposito",
          "credito_status",
          "vencimiento",
        ],
        encrypted_fields: [],
        enum_fields: {
          enganche_status: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "enganche_status",
            display_field: "enganche_status",
            is_native_enum: true,
          },
          credito_status: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "credito_status",
            display_field: "credito_status",
            is_native_enum: true,
          },
        },
      },

      pagos: {
        //enganche o abono, pago financiera, tarjeta de credito y en efectivo, 100 tarjeta de credito, 100 transferencia,
        display_table_name: "Pagos",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 2, 4],
        validations: {
          monto: {
            data_type: "decimal",
            required: true,
          },
          tipo_pago: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          id_credito: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "creditos",
            display_field: "id",
          },
          id_usuario: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "usuarios_clientes",
            display_field:
              "CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno)",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_credito",
          "id_cliente",
          "id_empleado",
          "tipo_pago", //(abono, ape)
          "monto",
          "comprobante",
          "created_at",
          "updated_at",
        ],
        searchable_fields: ["id_credito", "monto", "id_usuario"],
        encrypted_fields: [],
      },

      catalogo_direcciones: {
        display_table_name: "Catálogo de Direcciones",
        editable: true,
        id_entidad: 1,
        id_departamento: [3, 4],
        validations: {
          estado: {
            data_type: "string",
            required: true,
          },
          ciudad: {
            data_type: "string",
            required: true,
          },
          calle: {
            data_type: "string",
            required: true,
          },
          num_interior: {
            data_type: "string",
            required: true,
          },
          num_exterior: {
            data_type: "string",
            required: true,
          },
          colonia: {
            data_type: "string",
            required: true,
          },
          codigo_postal: {
            data_type: "string",
            required: true,
          },
        },
        foreign_keys: {
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "estado",
          "ciudad",
          "calle",
          "num_interior",
          "num_exterior",
          "colonia",
          "codigo_postal",
          "tipo", //cliente o sucursal
          "created_at",
          "updated_at",
        ],
        searchable_fields: ["direccion", "codigo_postal"],
        encrypted_fields: [],
        enum_fields: {
          tipo: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "tipo",
            display_field: "tipo",
            is_native_enum: true,
          },
        },
      },

      sucursales: {
        display_table_name: "Sucursales",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 4, 5],
        validations: {
          nombre: {
            data_type: "string",
            required: true,
          },
          telefono: {
            data_type: "string",
            required: true,
          },
          latitud: {
            data_type: "decimal",
            required: true,
          },
          longitud: {
            data_type: "decimal",
            required: true,
          },
        },
        foreign_keys: {
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "nombre",
          "id_direccion",
          "referencia",
          "telefono",
          "latitud",
          "longitud",
          "estatus",
          "tipo",
          "created_at",
          "updated_at",
        ],
        searchable_fields: {},
        encrypted_fields: [],
        enum_fields: {},
      },

      movimientos_inventario: {
        display_table_name: "Movimientos de Inventario",
        editable: true,
        id_entidad: 1,
        id_departamento: [1, 4, 5],
        validations: {
          tipo: {
            data_type: "string",
            required: true,
          },
          cantidad: {
            data_type: "integer",
            required: true,
          },
        },
        foreign_keys: {
          id_inventario: {
            data_type: "integer",
            filter_type: "dropdown",
            table_name: "inventario",
            display_field: "id",
          },
          ...common_relations,
        },
        allowed_fields: [
          "id",
          "id_inventario",
          "tipo", //entrada, salida
          "cantidad",
          "created_at",
          "updated_at",
        ],
        searchable_fields: ["id_inventario", "tipo", "cantidad"],
        encrypted_fields: [],
        enum_fields: {
          tipo: {
            data_type: "enum",
            filter_type: "dropdown",
            col_name: "tipo",
            display_field: "tipo",
            is_native_enum: true,
          },
        },
      },
    },
  },
};
