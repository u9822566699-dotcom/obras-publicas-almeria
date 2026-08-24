
    const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycby6Uf6MnURI2X47Pk3mMXZwmtGAWbq_sqBc401DUndWn-bNRpUk_xyyzPOzlugzAboDdw/exec";

    const mapaOficiosUsuarios = {
        "fontaneria": "Fontanería",
        "fontanería": "Fontanería",
        "albanileria": "Albañilería",
        "albañileria": "Albañilería",
        "albañilería": "Albañilería",
        "electricidad": "Electricidad",
        "pintura": "Pintura",
        "persianas": "Persianas",
        "vidrios": "Vidrios",
        "carpinteria_madera": "Carpintería de madera",
        "carpinteria_metalica": "Carpintería metálica",
        "vallado": "Vallado exterior"
    };

    const centrosEducativos = {
        "CEIP Adela Díaz": { direccion: "Av. Padre Méndez, 35", cp: "04006", localidad: "Almería", municipio: "Almería" },
        "CEIP Alfredo Molina Martín": { direccion: "C. Fernando de Rojas, 4", cp: "04008", localidad: "Almería", municipio: "Almería" },
        "CEIP Ángel Suquía": { direccion: "C. Sierra de Bacares, 1", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Ave María del Diezmo": { direccion: "Carrera del Mamí, 110", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Ave María del Quemadero": { direccion: "C. Barranco Bolas, 7", cp: "04003", localidad: "Almería", municipio: "Almería" },
        "CEIP Colonia Araceli": { direccion: "C. Virgen de la Piedad, 26", cp: "04008", localidad: "Almería", municipio: "Almería" },
        "CEIP El Puche": { direccion: "Avda. Mare Nostrum, 56", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Europa José Ramos Santander": { direccion: "C. Madre María Aznar, 272", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Francisco de Goya": { direccion: "C. Cruz de Caravaca, 34", cp: "04008", localidad: "Almería", municipio: "Almería" },
        "CEIP Freinet": { direccion: "Ctra. de Ronda, 100", cp: "04006", localidad: "Almería", municipio: "Almería" },
        "CEIP Giner de los Ríos": { direccion: "C. Cervantes, s/n", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP Ginés Morata": { direccion: "C. Sahara, 137", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP Indalo": { direccion: "C. Granada, 249", cp: "04008", localidad: "Almería", municipio: "Almería" },
        "CEIP Inés Relaño": { direccion: "C. Gral. Luque, 31", cp: "04002", localidad: "Almería", municipio: "Almería" },
        "CEIP Josefina Baro Soler": { direccion: "C. Mare Nostum, s/n", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Juan Ramón Jiménez": { direccion: "C. Alfarerías, 43", cp: "04008", localidad: "Almería", municipio: "Almería" },
        "CEIP La Chanca": { direccion: "Avda. del Mar, s/n", cp: "04002", localidad: "Almería", municipio: "Almería" },
        "CEIP Lope de Vega": { direccion: "C. de Chile, 42", cp: "04003", localidad: "Almería", municipio: "Almería" },
        "CEIP Los Almendros": { direccion: "C. Buen Amigo, s/n", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Los Millares": { direccion: "Avda. Santa Isabel, s/n", cp: "04006", localidad: "Almería", municipio: "Almería" },
        "CEIP Luis Siret": { direccion: "Avda. Santa Isabel, 29", cp: "04002", localidad: "Almería", municipio: "Almería" },
        "CEIP Madre de la Luz": { direccion: "C. Calzada de Castro, 3", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP Mar Mediterráneo": { direccion: "C. Jose Morales Abad, 9", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP Nueva Almería": { direccion: "C. Fernando Fernán Gómez, 33", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP Rafael Alberti": { direccion: "C. Marina, 9", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP San Fernando": { direccion: "C. Rodrigo Vivas Miras, 28", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP San Gabriel": { direccion: "C. Villa de Artés, 13", cp: "04005", localidad: "Almería", municipio: "Almería" },
        "CEIP San Luis": { direccion: "C. San Luis, s/n", cp: "04005", localidad: "Almería", municipio: "Almería" },
        "CEIP San Valentín": { direccion: "C. de las Alpujarras, s/n", cp: "04005", localidad: "Almería", municipio: "Almería" },
        "CEIP Santa Isabel": { direccion: "C. de la Molineta, s/n", cp: "04009", localidad: "Almería", municipio: "Almería" },
        "CEIP Virgen del Loreto": { direccion: "C. de la Traíña, 24", cp: "04002", localidad: "Almería", municipio: "Almería" },
        "CEIP Virgen del Mar": { direccion: "C. Granada, 159", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEP Padre Méndez": { direccion: "Av. Padre Méndez, 18", cp: "04006", localidad: "Almería", municipio: "Almería" },
        "CEIP San Bernardo": { direccion: "C. Manuel del Águila Ortega, s/n", cp: "04130", localidad: "El Alquián", municipio: "Almería" },
        "CEIP San Vicente": { direccion: "C. de la Iglesia, s/n", cp: "04130", localidad: "El Alquián", municipio: "Almería" },
        "CEIP Virgen del Mar. Cabo de Gata": { direccion: "C. de la Iglesia, s/n", cp: "04150", localidad: "Cabo de Gata", municipio: "Almería" },
        "CEIP Ferrer Guardia": { direccion: "Paraje del Charco s/n", cp: "04120", localidad: "La Cañada de San Urbano", municipio: "Almería" },
        "CEIP San Indalecio": { direccion: "C. de la Mar de la Cañada, s/n", cp: "04120", localidad: "La Cañada de San Urbano", municipio: "Almería" },
        "CEIP Torremar": { direccion: "Av. de los Juegos del Mediterráneo, s/n", cp: "04131", localidad: "El Toyo, Retamar", municipio: "Almería" },
        "CEE Princesa Sofía": { direccion: "C. Pablo Neruda, 5", cp: "04008", localidad: "Almería", municipio: "Almería" },
        "CEI Mar de Alborán": { direccion: "C. Padre Mendez, s/n", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "CEIP Rodríguez Espinosa": { direccion: "C. Principal, s/n", cp: "04131", localidad: "Cuevas de los Medina", municipio: "Almería" },
        "CEI Maestro Padilla": { direccion: "C. Grecia, 1", cp: "04007", localidad: "Almería", municipio: "Almería" },
        "Guardería De El Alquián": { direccion: "Calle Américo Vespucio, s/n", cp: "04130", localidad: "El Alquián", municipio: "Almería" },
        "Guardería De Los Almendros": { direccion: "Calle Sierra de Gredos, s/n", cp: "04008", localidad: "Almería", municipio: "Almería" }
    };

    const tiposPorOficio = {
        "Albañilería": ["Fuentes", "Solados / Azulejos", "Tabiquería / Paramentos", "Arquetas", "OTROS"],
        "Carpintería de madera": ["Puertas", "Armarios / Mobiliario", "Cerraduras madera", "OTROS"],
        "Carpintería metálica": ["Cerrajería", "Rejas", "Puertas metálicas", "OTROS"],
        "Electricidad": ["Alumbrado / Lámparas", "Cuadros eléctricos", "Enchufes / Interruptores", "OTROS"],
        "Fontanería": ["Atascos / Saneamiento", "Grifería", "Cisternas / Sanitarios", "Fugas de agua", "OTROS"],
        "Persianas": ["Cintas / Recogedores", "Lamas", "Tornoy polea", "OTROS"],
        "Pintura": ["Pintura interior", "Pintura exterior", "Repasos", "OTROS"],
        "Vallado exterior": ["Reparación valla", "Sustitución tramo", "OTROS"],
        "Vidrios": ["Sustitución cristal ventana", "Sustitución cristal puerta", "OTROS"]
    };

    let usuarioActual = {
        rol: 'PUBLICO',
        nombre: 'Acceso Público',
        oficioAsignado: ''
    };

    let todasLasIncidenciasTecnico = [];

    function ejecutarJSONP(urlBase, paramsObj, timeoutMs = 12000) {
        return new Promise((resolve, reject) => {
            const callbackName = 'jsonp_cb_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);
            const script = document.createElement('script');

            let queryString;
            try {
                queryString = new URLSearchParams(paramsObj).toString();
            } catch (e) {
                reject(new Error('No se pudieron preparar los datos para el servidor.'));
                return;
            }

            // JSONP es exclusivamente para datos pequeños. Evita que una imagen
            // Base64 vuelva a entrar accidentalmente en una petición GET.
            if (queryString.length > 6000) {
                reject(new Error('La petición es demasiado grande para JSONP. Las imágenes deben subirse primero a Drive.'));
                return;
            }

            const timer = setTimeout(() => {
                cleanup();
                reject(new Error("Tiempo de respuesta agotado. Compruebe la conexión o el servidor."));
            }, timeoutMs);

            function cleanup() {
                clearTimeout(timer);
                if (window[callbackName]) delete window[callbackName];
                if (script.parentNode) script.parentNode.removeChild(script);
            }

            window[callbackName] = function(data) {
                cleanup();
                resolve(data);
            };

            script.onerror = function() {
                cleanup();
                reject(new Error("Error al conectar con la pasarela de datos."));
            };

            const params = new URLSearchParams(paramsObj);
            params.append('callback', callbackName);
            script.src = urlBase + '?' + params.toString();
            document.body.appendChild(script);
        });
    }

    function ocultarTodasLasVistas() {
        document.getElementById('vista-portada').classList.add('oculto');
        document.getElementById('vista-formulario').style.display = 'none';
        document.getElementById('vista-login').classList.add('oculto');
        document.getElementById('vista-tecnico').classList.add('oculto');
        document.getElementById('vista-empresa').classList.add('oculto');
    }

    function mostrarPortada() {
        ocultarTodasLasVistas();
        document.getElementById('vista-portada').classList.remove('oculto');
        window.scrollTo(0, 0);
    }

    function resetearFormulario() {
        document.getElementById('centro-select').value = "";
        document.getElementById('direccion').value = "";
        document.getElementById('codigo_postal').value = "";
        document.getElementById('localidad').value = "";
        document.getElementById('municipio').value = "";
        document.getElementById('responsable').value = "";
        document.getElementById('email_responsable').value = "";
        document.getElementById('telefono').value = "";
        document.getElementById('oficio-select').value = "";
        document.getElementById('tipo-select').innerHTML = '<option value="">Elija primero un oficio...</option>';
        document.getElementById('observaciones_incidencia').value = "";
        document.getElementById('notificada_antes').value = "No";
        toggleFechaNotificacion();
        
        document.getElementById('observaciones_adicionales').value = "";
        document.getElementById('caja-referencia').style.display = 'none';
        
        const btnEnviar = document.querySelector('.btn-send');
        if (btnEnviar) {
            btnEnviar.disabled = false;
            btnEnviar.textContent = "Enviar Notificación";
            btnEnviar.parentElement.style.display = 'flex';
        }
    }

    function mostrarFormulario() {
        ocultarTodasLasVistas();
        resetearFormulario();
        document.getElementById('vista-formulario').style.display = 'block';
        window.scrollTo(0, 0);
    }

    function mostrarLogin() {
        ocultarTodasLasVistas();
        document.getElementById('vista-login').classList.remove('oculto');
        window.scrollTo(0, 0);
    }

    function gestionarBotonSesion() {
        if (usuarioActual.rol === 'PUBLICO') {
            mostrarLogin();
        } else {
            usuarioActual = { rol: 'PUBLICO', nombre: 'Acceso Público', oficioAsignado: '' };
            actualizarBarraUsuario();
            mostrarPortada();
            alert("Sesión cerrada correctamente.");
        }
    }

    function actualizarBarraUsuario() {
        const infoSpan = document.getElementById('user-session-info');
        const btnSesion = document.getElementById('btn-login-logout');

        if (usuarioActual.rol === 'PUBLICO') {
            infoSpan.textContent = "Acceso Público";
            btnSesion.textContent = "🔐 Acceso Personal (Técnicos / Empresas)";
            btnSesion.style.background = "#495057";
        } else {
            infoSpan.textContent = "👤 " + usuarioActual.nombre;
            btnSesion.textContent = "🚪 Cerrar Sesión";
            btnSesion.style.background = "#d9251d";
        }
    }

    function procesarLogin(e) {
        e.preventDefault();
        const userRaw = document.getElementById('usuario-input').value.trim().toLowerCase();
        const pass = document.getElementById('password-input').value.trim();
        const errorDiv = document.getElementById('login-error');

        errorDiv.style.display = 'none';

        if (userRaw === "admin" && pass === "1234") {
            usuarioActual = { rol: 'TECNICO', nombre: 'Técnico Municipal', oficioAsignado: 'TODOS' };
            actualizarBarraUsuario();
            mostrarPanelTecnico();
        } else if (userRaw.startsWith("emp_") && pass === "1234") {
            const claveOficio = userRaw.replace("emp_", "");
            const oficioNormalizado = mapaOficiosUsuarios[claveOficio] || (claveOficio.charAt(0).toUpperCase() + claveOficio.slice(1));
            
            usuarioActual = { 
                rol: 'EMPRESA', 
                nombre: 'Empresa ' + oficioNormalizado, 
                oficioAsignado: oficioNormalizado 
            };
            actualizarBarraUsuario();
            mostrarPanelEmpresa();
        } else {
            errorDiv.style.display = 'block';
        }
    }

    function actualizarCentro() {
        const centro = document.getElementById("centro-select").value;
        if (centro && centrosEducativos[centro]) {
            document.getElementById("direccion").value = centrosEducativos[centro].direccion;
            document.getElementById("codigo_postal").value = centrosEducativos[centro].cp;
            document.getElementById("localidad").value = centrosEducativos[centro].localidad;
            document.getElementById("municipio").value = centrosEducativos[centro].municipio;
        } else {
            document.getElementById("direccion").value = "";
            document.getElementById("codigo_postal").value = "";
            document.getElementById("localidad").value = "";
            document.getElementById("municipio").value = "";
        }
    }

    function actualizarTipos() {
        const oficio = document.getElementById("oficio-select").value;
        const tipoSelect = document.getElementById("tipo-select");
        tipoSelect.innerHTML = '<option value="">Elija el trabajo correspondiente...</option>';
        
        if (oficio && tiposPorOficio[oficio]) {
            tiposPorOficio[oficio].forEach(tipo => {
                const opt = document.createElement("option");
                opt.value = tipo;
                opt.textContent = tipo;
                tipoSelect.appendChild(opt);
            });
        }
    }

    function toggleFechaNotificacion() {
        const opcion = document.getElementById("notificada_antes").value;
        const grupoFecha = document.getElementById("grupo-fecha");
        
        if (opcion === "Sí") {
            grupoFecha.classList.remove("oculto");
        } else {
            grupoFecha.classList.add("oculto");
            document.getElementById("fecha-campo").value = "";
            document.getElementById("ref-anterior-campo").value = "";
        }
    }

    async function consultarEstado() {
        const ref = document.getElementById('ref-buscar').value.trim();
        const pin = document.getElementById('pin-buscar').value.trim();
        const resDiv = document.getElementById('resultado-consulta');

        if (!ref || !pin) {
            alert("Por favor, introduzca la Referencia y el PIN de 5 dígitos.");
            return;
        }

        resDiv.style.display = "block";
        resDiv.style.background = "#eef2f5";
        resDiv.style.color = "#333";
        resDiv.style.textAlign = "center";
        resDiv.innerHTML = "🔍 Verificando datos en el servidor...";

        try {
            const respuesta = await ejecutarJSONP(URL_GOOGLE_SCRIPT, {
                action: 'consultar',
                ref: ref,
                pin: pin
            });

            if (respuesta.status === "FOUND") {
                resDiv.style.background = "#ffffff";
                resDiv.style.border = "1px solid #198754";
                resDiv.style.color = "#212529";
                resDiv.style.textAlign = "left";
                resDiv.style.padding = "15px";
                
                resDiv.innerHTML = `
                    <div style="border-bottom: 1px solid #eee; padding-bottom: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <strong style="color: #d9251d; font-size: 16px;">${respuesta.ref}</strong>
                        <span style="background: #e8f5e9; color: #0f5132; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
                            📅 Registrada: ${respuesta.fecha}
                        </span>
                    </div>
                    <div style="font-size: 13px; line-height: 1.6;">
                        <p style="margin: 4px 0;"><strong>Centro:</strong> ${respuesta.centro}</p>
                        <p style="margin: 4px 0;"><strong>Oficio / Trabajo:</strong> ${respuesta.oficio} — <em>${respuesta.trabajo}</em></p>
                        <p style="margin: 4px 0;"><strong>Estado actual:</strong> <span style="font-weight:bold; color:#d9251d;">${respuesta.estado}</span></p>
                        <hr style="border: 0; border-top: 1px dashed #ccc; margin: 10px 0;">
                        <p style="margin: 4px 0; color: #555;"><strong>Observaciones técnicas del parte:</strong></p>
                        <div style="background: #f8f9fa; padding: 8px 12px; border-left: 3px solid #0d6efd; border-radius: 4px; font-style: italic; font-size: 12px; margin-top: 4px;">
                            ${respuesta.obsTecnico || 'Sin observaciones registradas por el momento.'}
                        </div>
                    </div>
                `;
            } else if (respuesta.status === "WRONG_PIN") {
                resDiv.style.background = "#fff3cd";
                resDiv.style.border = "1px solid #ffebaa";
                resDiv.style.color = "#664d03";
                resDiv.style.textAlign = "center";
                resDiv.innerHTML = "⚠️ El PIN introducido no es correcto para esta referencia.";
            } else {
                resDiv.style.background = "#f8d7da";
                resDiv.style.border = "1px solid #f5c2c7";
                resDiv.style.color = "#842029";
                resDiv.style.textAlign = "center";
                resDiv.innerHTML = "❌ No se ha encontrado ninguna incidencia con esa referencia.";
            }
        } catch (err) {
            resDiv.style.background = "#f8d7da";
            resDiv.style.color = "#842029";
            resDiv.style.textAlign = "center";
            resDiv.innerHTML = "❌ Error de comunicación con la base de datos.";
        }
    }

    async function enviarPorCorreo() {
        const centro = document.getElementById('centro-select').value;
        const oficio = document.getElementById('oficio-select').value;
        const tipo = document.getElementById('tipo-select').value;
        const responsable = document.getElementById('responsable').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const emailResponsable = document.getElementById('email_responsable').value.trim();

        if (!centro || !oficio || !tipo) {
            alert("Por favor, seleccione el Centro, el Oficio y el Tipo de incidencia.");
            return;
        }

        if (!responsable || !telefono || !emailResponsable || !emailResponsable.includes('@')) {
            alert("Por favor, complete Responsable, Teléfono y un correo electrónico válido.");
            return;
        }

        const btnEnviar = document.querySelector('.btn-send');
        btnEnviar.disabled = true;
        btnEnviar.textContent = "Registrando incidencia...";

        const datos = {
            action: 'crearIncidencia',
            centro: centro,
            direccion: document.getElementById('direccion').value,
            cp: document.getElementById('codigo_postal').value,
            localidad: document.getElementById('localidad').value,
            municipio: document.getElementById('municipio').value,
            responsable: responsable,
            emailResponsable: emailResponsable,
            telefono: telefono,
            oficio: oficio,
            tipo: tipo,
            obsIncidencia: document.getElementById('observaciones_incidencia').value,
            notificadaAntes: document.getElementById('notificada_antes').value,
            fecha: document.getElementById('fecha-campo').value,
            refAnterior: document.getElementById('ref-anterior-campo').value,
            obsAdicionales: document.getElementById('observaciones_adicionales').value,
        };

        try {
            const respuesta = await ejecutarJSONP(URL_GOOGLE_SCRIPT, datos, 20000);

            if (respuesta.status === "SUCCESS") {
                document.getElementById('num-referencia-display').textContent = respuesta.ref;
                document.getElementById('pin-display').textContent = respuesta.pin;
                document.getElementById('caja-referencia').style.display = 'block';
                btnEnviar.parentElement.style.display = 'none';
                alert("Notificación registrada con éxito.\n\nReferencia: " + respuesta.ref + "\nPIN: " + respuesta.pin);

                setTimeout(() => window.print(), 300);
            } else {
                throw new Error(respuesta.message || "El servidor no pudo registrar la incidencia.");
            }
        } catch (err) {
            console.error("Fallo al registrar la incidencia:", err);
            alert("❌ No se ha podido registrar la incidencia.\n\n" + (err.message || err));
            btnEnviar.disabled = false;
            btnEnviar.textContent = "Enviar Notificación";
        }
    }

    function mostrarPanelTecnico() {
        ocultarTodasLasVistas();
        cargarTablaTecnicoDesdeSheet();
        document.getElementById('vista-tecnico').classList.remove('oculto');
        window.scrollTo(0, 0);
    }

    async function cargarTablaTecnicoDesdeSheet() {
        const tbody = document.getElementById('tabla-tecnico-body');
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#666;">⏳ Cargando panel global...</td></tr>';

        try {
            const respuesta = await ejecutarJSONP(URL_GOOGLE_SCRIPT, { action: 'listarTodoTecnico' });
            if (respuesta.status === "SUCCESS") {
                todasLasIncidenciasTecnico = ordenarIncidenciasPorPrioridadYFinalizacion(respuesta.data || []);
                actualizarKpis(todasLasIncidenciasTecnico);
                renderizarTablaTecnico(todasLasIncidenciasTecnico);
            } else {
                tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#d9251d;">❌ Error al obtener datos.</td></tr>';
            }
        } catch (err) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#d9251d;">❌ Error de conexión al cargar datos.</td></tr>';
        }
    }

    function actualizarKpis(datos) {
        document.getElementById('kpi-total').textContent = datos.length;
        document.getElementById('kpi-pendientes').textContent = datos.filter(i => i.estado === 'Pendiente').length;
        document.getElementById('kpi-completadas').textContent = datos.filter(i => i.estado === 'Completada').length;
    }

    function ordenarIncidenciasPorPrioridadYFinalizacion(datos) {
        return [...(datos || [])].sort((a, b) => {
            const completadaA = String(a.estado || '').toLowerCase() === 'completada';
            const completadaB = String(b.estado || '').toLowerCase() === 'completada';

            // Las completadas siempre al final.
            if (completadaA && !completadaB) return 1;
            if (!completadaA && completadaB) return -1;

            // Entre completadas: fecha de terminación, de más antigua a más reciente.
            if (completadaA && completadaB) {
                const fechaA = a.fechaFinalizacion ? new Date(a.fechaFinalizacion).getTime() : Number.MAX_SAFE_INTEGER;
                const fechaB = b.fechaFinalizacion ? new Date(b.fechaFinalizacion).getTime() : Number.MAX_SAFE_INTEGER;
                return fechaA - fechaB;
            }

            // Entre no completadas: las urgentes primero.
            const urgenteA = String(a.prioridad || '').toUpperCase() === 'URGENTE';
            const urgenteB = String(b.prioridad || '').toUpperCase() === 'URGENTE';
            return Number(urgenteB) - Number(urgenteA);
        });
    }

    function renderizarTablaTecnico(datos) {
        const tbody = document.getElementById('tabla-tecnico-body');
        tbody.innerHTML = '';

        if (!datos || datos.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#777;">No hay incidencias registradas.</td></tr>';
            return;
        }

        datos.forEach((inc, idx) => {
            const tr = document.createElement('tr');
            const esUrgente = inc.prioridad === 'URGENTE';
            const badgePrioridad = esUrgente 
                ? '<span class="badge badge-urgente">🚨 URGENTE</span>' 
                : '<span class="badge badge-normal">NORMAL</span>';

            let badgeEstado = `<span class="badge badge-pendiente">PENDIENTE</span>`;
            if (inc.estado === 'Aceptada por la empresa') badgeEstado = `<span class="badge badge-aceptada">ACEPTADA EMPRESA</span>`;
            if (inc.estado === 'Inicio') badgeEstado = `<span class="badge badge-inicio">EN INICIO</span>`;
            if (inc.estado === 'Completada') badgeEstado = `<span class="badge badge-completada">✓ COMPLETADA</span>`;

            let botonInforme = '';
            if (inc.estado === 'Completada') {
                botonInforme = `
                    <button class="btn-accion-tabla" style="background:#2c3e50; color:white; margin-top:5px;" onclick="prepararInformePdf(${idx})">
                        📄 Informe PDF
                    </button>
                `;
            }

            tr.innerHTML = `
                <td><strong>${inc.ref}</strong><br><small style="color:#0d6efd; font-weight:bold;">PIN: ${inc.pin}</small><br>${badgePrioridad}</td>
                <td><strong>${inc.colegio}</strong><br><small style="color:#666;">${inc.direccion}</small></td>
                <td><strong>${inc.oficio}</strong><br><small style="color:#666;">${inc.tipo}</small></td>
                <td>
                    <strong>Resp:</strong> ${inc.responsable} (${inc.telefono})<br>
                    <small style="color:#444;">${inc.observaciones}</small>
                </td>
                <td>${badgeEstado}</td>
                <td style="text-align:center;">
                    <button class="btn-accion-tabla" style="background:#6c757d; color:white;" onclick="cambiarPrioridadTecnico('${inc.ref}', '${esUrgente ? 'NORMAL' : 'URGENTE'}')">
                        ${esUrgente ? 'Bajar Prioridad' : '⚡ Hacer Urgente'}
                    </button>
                    ${botonInforme}
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    function filtrarTablaTecnico() {
        const oficio = document.getElementById('filtro-tecnico-oficio').value;
        const estado = document.getElementById('filtro-tecnico-estado').value;
        const texto = document.getElementById('filtro-tecnico-texto').value.toLowerCase().trim();

        const filtrados = todasLasIncidenciasTecnico.filter(inc => {
            const cumpleOficio = (oficio === 'TODOS' || inc.oficio === oficio);
            const cumpleEstado = (estado === 'TODOS' || inc.estado === estado);
            const cumpleTexto = (texto === '' || 
                                 inc.colegio.toLowerCase().includes(texto) || 
                                 inc.ref.toLowerCase().includes(texto) ||
                                 (inc.pin && inc.pin.toString().includes(texto)) ||
                                 inc.responsable.toLowerCase().includes(texto));

            return cumpleOficio && cumpleEstado && cumpleTexto;
        });

        renderizarTablaTecnico(filtrados);
    }

    async function cambiarPrioridadTecnico(ref, nuevaPrioridad) {
        try {
            const respuesta = await ejecutarJSONP(URL_GOOGLE_SCRIPT, {
                action: 'actualizarPrioridad',
                ref: ref,
                prioridad: nuevaPrioridad
            });

            if (respuesta.status === "SUCCESS") {
                cargarTablaTecnicoDesdeSheet();
            } else {
                alert("Error al actualizar la prioridad.");
            }
        } catch (err) {
            alert("Error de conexión al intentar cambiar la prioridad.");
        }
    }

    function prepararInformePdf(indexEnMemoria) {
        const inc = todasLasIncidenciasTecnico[indexEnMemoria];
        if (!inc) return;
        generarInformePdfIncidencia(inc);
    }

    function calcularDiferenciaDias(fechaInicio, fechaFin) {
        if (!fechaInicio || !fechaFin || fechaInicio === "No consta" || fechaFin === "No consta") return "N/D";
        const f1 = new Date(fechaInicio);
        const f2 = new Date(fechaFin);
        const diffTiempo = Math.abs(f2 - f1);
        const diffDias = Math.ceil(diffTiempo / (1000 * 60 * 60 * 24));
        return diffDias === 0 ? "Mismo día" : `${diffDias} día(s)`;
    }

    function generarInformePdfIncidencia(inc) {
        const fechaRegistro = inc.fechaRegistro || "No consta";
        const fechaAceptado = inc.fechaAceptado || "No consta";
        const fechaFinalizacion = inc.fechaFinalizacion || new Date().toISOString().split('T')[0];

        const diasEnEspera = calcularDiferenciaDias(fechaRegistro, fechaAceptado);
        const diasResolucion = calcularDiferenciaDias(fechaAceptado, fechaFinalizacion);
        const diasTotales = calcularDiferenciaDias(fechaRegistro, fechaFinalizacion);

        const ventanaImpresion = window.open('', '_blank', 'width=850,height=1100');
        
        ventanaImpresion.document.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Informe de Resolución de Incidencia - ${inc.ref}</title>
                <style>
                    body { font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; color: #333; line-height: 1.5; }
                    .header-pdf { display: flex; justify-content: space-between; align-items: center; gap: 18px; border-bottom: 3px solid #d9251d; padding-bottom: 15px; margin-bottom: 20px; }
                    .header-pdf-brand { display: flex; align-items: center; gap: 15px; }
                    .header-pdf-brand img { width: 86px; height: auto; object-fit: contain; }
                    .header-pdf h1 { margin: 0; color: #d9251d; font-size: 19px; text-transform: uppercase; }
                    .header-pdf h2 { margin: 5px 0 0 0; font-size: 12px; color: #555; }
                    .header-pdf h3 { margin: 4px 0 0 0; font-size: 11px; color: #333; }
                    .ref-box { background: #f8f9fa; border: 1px solid #ddd; padding: 10px; text-align: right; border-radius: 4px; }
                    .section-title { background: #f4f4f4; padding: 6px 10px; font-weight: bold; color: #333; border-left: 4px solid #d9251d; margin-top: 20px; margin-bottom: 10px; font-size: 13px; text-transform: uppercase; }
                    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                    .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; }
                    .card-metric { background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 12px; text-align: center; }
                    .card-metric .title { font-size: 11px; color: #666; font-weight: bold; display: block; text-transform: uppercase; }
                    .card-metric .value { font-size: 18px; color: #2c3e50; font-weight: bold; margin-top: 5px; }
                    p { margin: 4px 0; font-size: 13px; }
                    .obs-box { background: #fafafa; border: 1px solid #eee; padding: 12px; border-radius: 4px; font-size: 13px; }
                    .footer-pdf { margin-top: 40px; text-align: center; font-size: 11px; color: #777; border-top: 1px solid #ddd; padding-top: 15px; }
                </style>
            </head>
            <body>
                <div class="header-pdf">
                    <div class="header-pdf-brand">
                        <img src="data:image/png;base64,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" alt="Ayuntamiento de Almería">
                        <div>
                            <h1>Ayuntamiento de Almería</h1>
                            <h2>Área de Obras Públicas, Mantenimiento, Accesibilidad y Economía Azul</h2>
                            <h3>Sección de Conservación y Mantenimiento · Informe Técnico de Incidencia</h3>
                        </div>
                    </div>
                    <div class="ref-box">
                        <strong>Nº Ref:</strong> <span style="color:#d9251d; font-size:16px;">${inc.ref}</span><br>
                        <small>Estado: <strong style="color:#28a745;">COMPLETADA</strong></small>
                    </div>
                </div>

                <div class="section-title">1. Información del Centro Educativo</div>
                <div class="grid-2">
                    <p><strong>Centro:</strong> ${inc.colegio}</p>
                    <p><strong>Dirección:</strong> ${inc.direccion || 'N/D'}</p>
                    <p><strong>Responsable del aviso:</strong> ${inc.responsable || 'N/D'}</p>
                    <p><strong>Teléfono de contacto:</strong> ${inc.telefono || 'N/D'}</p>
                </div>

                <div class="section-title">2. Clasificación del Trabajo</div>
                <div class="grid-2">
                    <p><strong>Oficio Asignado:</strong> ${inc.oficio}</p>
                    <p><strong>Tipo de Incidencia:</strong> ${inc.tipo}</p>
                    <p><strong>Nivel de Prioridad:</strong> ${inc.prioridad || 'NORMAL'}</p>
                </div>

                <div class="section-title">3. Tiempos de Respuesta y Gestión</div>
                <div class="grid-3" style="margin-bottom: 15px;">
                    <div><p><strong>Fecha Registro:</strong> ${fechaRegistro}</p></div>
                    <div><p><strong>Fecha Aceptación:</strong> ${fechaAceptado}</p></div>
                    <div><p><strong>Fecha Finalización:</strong> ${fechaFinalizacion}</p></div>
                </div>

                <div class="grid-3">
                    <div class="card-metric">
                        <span class="title">Tiempo en Espera</span>
                        <div class="value">${diasEnEspera}</div>
                    </div>
                    <div class="card-metric">
                        <span class="title">Tiempo de Ejecución</span>
                        <div class="value">${diasResolucion}</div>
                    </div>
                    <div class="card-metric">
                        <span class="title">Tiempo Total de Resolución</span>
                        <div class="value">${diasTotales}</div>
                    </div>
                </div>

                <div class="section-title">4. Detalle y Observaciones</div>
                <p><strong>Descripción inicial de la incidencia (Colegio):</strong></p>
                <div class="obs-box" style="margin-bottom: 10px;">${inc.observaciones || 'Sin observaciones de origen.'}</div>

                <p><strong>Observaciones y Parte de Trabajo del Técnico / Empresa:</strong></p>
                <div class="obs-box" style="border-left: 3px solid #28a745;">${inc.obsTecnico || 'Trabajo completado y verificado conforme por el servicio técnico.'}</div>


                <div class="footer-pdf">
                    Este documento es un informe oficial emitido por el Área de Obras Públicas, Mantenimiento, Accesibilidad y Economía Azul, a través de la Sección de Conservación y Mantenimiento, del Ayuntamiento de Almería.
                </div>
</body>
            </html>
        `);
        ventanaImpresion.document.close();
        setTimeout(() => { try { ventanaImpresion.focus(); ventanaImpresion.print(); } catch (e) {} }, 350);
    }

    function mostrarPanelEmpresa() {
        ocultarTodasLasVistas();
        document.getElementById('empresa-titulo-oficio').textContent = "INCIDENCIAS ASIGNADAS - OFICIO: " + usuarioActual.oficioAsignado.toUpperCase();
        cargarTablaEmpresaDesdeSheet();
        document.getElementById('vista-empresa').classList.remove('oculto');
        window.scrollTo(0, 0);
    }

    async function cargarTablaEmpresaDesdeSheet() {
        const tbody = document.getElementById('tabla-empresa-body');
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#666;">⏳ Cargando incidencias asignadas...</td></tr>';

        try {
            const respuesta = await ejecutarJSONP(URL_GOOGLE_SCRIPT, {
                action: 'listarPorOficio',
                oficio: usuarioActual.oficioAsignado
            });

            tbody.innerHTML = '';

            if (respuesta.status === "SUCCESS" && respuesta.data && respuesta.data.length > 0) {
                // Las COMPLETADAS siempre van al final y se ordenan por fecha de terminación.
                // Entre las no completadas, las URGENTES van primero.
                const incidenciasOrdenadas = ordenarIncidenciasPorPrioridadYFinalizacion(respuesta.data);

                incidenciasOrdenadas.forEach(inc => {
                    const tr = document.createElement('tr');
                    const badgePrioridad = inc.prioridad === 'URGENTE' 
                        ? '<span class="badge badge-urgente">🚨 URGENTE</span>' 
                        : '<span class="badge badge-normal">NORMAL</span>';

                    let columnaAcciones = '';

                    if (inc.estado === 'Pendiente') {
                        columnaAcciones = `
                            <span class="badge badge-pendiente" style="display:block; margin-bottom: 8px;">PENDIENTE</span>
                            <button class="btn-accion-tabla btn-acc-aceptar" onclick="cambiarEstadoIncidenciaSheet('${inc.ref}', 'Aceptada por la empresa')">✓ Aceptar</button>
                            <button class="btn-accion-tabla btn-acc-rechazar" onclick="rechazarTrabajoEmpresa('${inc.ref}')">✕ Rechazar</button>
                        `;
                    } else if (inc.estado === 'Aceptada por la empresa') {
                        columnaAcciones = `
                            <span class="badge badge-aceptada" style="display:block; margin-bottom: 8px;">ACEPTADA</span>
                            <button class="btn-accion-tabla btn-acc-inicio" onclick="cambiarEstadoIncidenciaSheet('${inc.ref}', 'Inicio')">▶ Iniciar Trabajo</button>
                        `;
                    } else if (inc.estado === 'Inicio') {
                        columnaAcciones = `
                            <span class="badge badge-inicio" style="display:block; margin-bottom: 8px;">EN INICIO</span>
                            <button class="btn-accion-tabla btn-acc-completar" onclick="abrirModalCompletar('${inc.ref}')">✓ Completar Trabajo</button>
                        `;
                    } else if (inc.estado === 'Completada') {
                        columnaAcciones = `<span class="badge badge-completada" style="display:block;">✓ COMPLETADA</span>`;
                    }

                    tr.innerHTML = `
                        <td><strong>${inc.ref}</strong><br>${badgePrioridad}</td>
                        <td><strong>${inc.oficio}</strong><br><small style="color:#666;">${inc.tipo}</small></td>
                        <td><strong>${inc.colegio}</strong><br><small style="color:#666;">${inc.direccion}</small></td>
                        <td><strong>${inc.responsable}</strong><br><small style="color:#0d6efd;">📞 ${inc.telefono}</small></td>
                        <td style="font-size:12px; color:#444;">${inc.observaciones}</td>
                        <td style="text-align:center;">${columnaAcciones}</td>
                    `;

                    tbody.appendChild(tr);
                });
            } else {
                tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color: #777;">No se han encontrado incidencias asignadas.</td></tr>';
            }
        } catch (err) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color: #d9251d;">Error al cargar incidencias.</td></tr>';
        }
    }

    function rechazarTrabajoEmpresa(ref) {
        const motivo = prompt("Motivo del rechazo (ej: Mal redactada, error en el oficio asignado, etc.):");
        if (motivo !== null) {
            cambiarEstadoIncidenciaSheet(ref, 'Pendiente', 'RECHAZADA POR EMPRESA: ' + motivo);
        }
    }

    function abrirModalCompletar(ref) {
        document.getElementById('modal-ref-incidencia').value = ref;
        document.getElementById('modal-obs-cierre').value = "Trabajo finalizado correctamente.";
        document.getElementById('modal-completar').classList.remove('oculto');
    }

    function cerrarModalCompletar() {
        document.getElementById('modal-completar').classList.add('oculto');
    }

    async function guardarCierreIncidencia() {
        const ref = document.getElementById('modal-ref-incidencia').value;
        const obs = document.getElementById('modal-obs-cierre').value.trim();

        cerrarModalCompletar();
        await cambiarEstadoIncidenciaSheet(ref, 'Completada', obs);
    }

    async function cambiarEstadoIncidenciaSheet(ref, nuevoEstado, obsTecnico = "") {
        try {
            const params = {
                action: 'actualizarEstado',
                ref: ref,
                nuevoEstado: nuevoEstado,
                obsTecnico: obsTecnico
            };

            const respuesta = await ejecutarJSONP(URL_GOOGLE_SCRIPT, params, 20000);

            if (respuesta.status === "SUCCESS") {
                await cargarTablaEmpresaDesdeSheet();
                return respuesta;
            }

            throw new Error(respuesta.message || "El servidor no pudo actualizar la incidencia.");
        } catch (err) {
            console.error("Error en cambio de estado:", err);
            alert("❌ No se pudo actualizar el estado en el servidor.\n\n" + (err.message || err));
            return null;
        }
    }


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err =>
            console.warn('No se pudo registrar el Service Worker:', err)
        );
    });
}
(function () {
    const note = document.getElementById('pwa-offline-note');
    function estado() { if (note) note.style.display = navigator.onLine ? 'none' : 'block'; }
    window.addEventListener('online', estado);
    window.addEventListener('offline', estado);
    estado();
})();
