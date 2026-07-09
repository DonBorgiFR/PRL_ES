# 🤖 Guía de Integración con LLM Local (Ollama)

Esta guía explica cómo utilizar un modelo de lenguaje local (como Llama 3 o Qwen 2.5) a través de **Ollama** para explotar el conocimiento contenido en este repositorio.

---

## 🏗️ Configuración Recomendada

1.  **Instalar Ollama:** Descargar de [ollama.com](https://ollama.com).
2.  **Modelo Sugerido:** `llama3.1:8b` (o `70b` si el hardware lo permite).
    ```bash
    ollama run llama3.1
    ```

---

## ✅ Estado Actual de Integración (implementado)

La integración de Ollama ya está montada dentro de la aplicación en la ruta:

* `/consultor-ia`

Capacidades implementadas:

* Chat local contra Ollama (`/api/chat`) usando proxy de Vite.
* Selector de modelo en tiempo real (ej. `llama3.1:8b`, `qwen2.5:7b`).
* Contexto normativo automático desde `src/data/`:
    * `searchAll(query)` para recuperar coincidencias.
    * `buildNormativeContext(query)` para comprimir artículos/fichas relevantes.
* Prompt de sistema orientado a:
    * respuesta técnica aplicable,
    * cita de artículos,
    * no invención cuando falte evidencia.

Archivos clave:

* `src/App.tsx` (UI del consultor + lógica de consulta)
* `src/data/index.ts` (`buildNormativeContext`)
* `vite.config.ts` (proxy `/api/ollama`)

---

## 🔧 Troubleshooting rápido

### Error: "No pude conectar con Ollama local"

Comprobar:

```bash
ollama serve
ollama list
```

Si el modelo no existe:

```bash
ollama pull llama3.1:8b
```

### Error HTTP 404/500 en `/api/ollama/chat`

Verificar que la app se ejecuta en modo Vite dev (`npm run dev`) y que `vite.config.ts` contiene el proxy.

### Respuestas poco precisas

1. Activar casilla "Usar contexto normativo interno (RAG)".
2. Preguntar de forma concreta: sector, artículo, obligación, colectivo.
3. Reducir temperatura o cambiar modelo a uno más grande.

---

## 📝 Plantillas de Prompts

Para obtener los mejores resultados, use estos prompts estructurados pegando el contenido JSON de `src/data/`.

### 1. Generador de Píldoras Formativas (Talks)
> "Actúa como un experto en Prevención de Riesgos Laborales. Analizando el artículo 15 de la LPRL (Ley 31/1995), redacta una píldora formativa de 1 minuto para trabajadores de almacén, usando un lenguaje divulgativo y cercano. Enfócate en la aplicación práctica de 'evitar los riesgos' y 'sustituir lo peligroso por lo que entrañe poco o ningún peligro'."

### 2. Auditor de Referencias Cruzadas
> "Revisa nuestro mapeo de referencias cruzadas entre la LPRL y el RD 1627/1997. Basándote en el texto del Plan de Seguridad y Salud (Art. 7 RD 1627), ¿qué otras 3 conexiones críticas sugieres añadir para un técnico que trabaje en sector construcción?"

---

## 🛠️ Automatización (Scripts)

Puedes alimentar los archivos de `src/data/*.ts` directamente a un script de Python que use la API de Ollama para:
- Generar resúmenes por capítulo.
- Crear preguntas tipo test para validar la comprensión de cada ficha.
- Traducir los resúmenes a otros idiomas para equipos internacionales.
