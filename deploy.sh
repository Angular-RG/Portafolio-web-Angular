#!/bin/bash

# 🚀 Script de Deployment para Netlify
# Este script automatiza el proceso de deployment

echo "🚀 Iniciando proceso de deployment..."

# 1. Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci

# 2. Ejecutar build de producción
echo "🔨 Generando build de producción..."
npm run build

# 3. Verificar que el build fue exitoso
if [ -d "dist" ]; then
    echo "✅ Build generado exitosamente en /dist"

    # 4. Mostrar archivos generados
    echo "📁 Archivos generados:"
    ls -la dist/

    echo "🎉 ¡Deployment listo para Netlify!"
    echo "📂 Directorio a deployar: dist/"

else
    echo "❌ Error: No se pudo generar el build"
    exit 1
fi
