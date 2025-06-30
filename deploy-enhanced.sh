#!/bin/bash

# Script de deployment para Portafolio Angular
# Autor: Héctor Saavedra
# Versión: 2.0

set -e

echo "🚀 Iniciando proceso de deployment..."

# Verificar que estamos en el directorio correcto
if [ ! -f "angular.json" ]; then
    echo "❌ Error: Este script debe ejecutarse desde la raíz del proyecto Angular"
    exit 1
fi

# Verificar dependencias
echo "📦 Verificando dependencias..."
if ! command -v ng &> /dev/null; then
    echo "❌ Angular CLI no encontrado. Instalando..."
    npm install -g @angular/cli
fi

# Instalar dependencias del proyecto
echo "📥 Instalando dependencias del proyecto..."
npm ci

# Ejecutar linter
echo "🔍 Ejecutando análisis de código..."
ng lint --fix || echo "⚠️  Advertencias de linting encontradas"

# Ejecutar tests
echo "🧪 Ejecutando pruebas..."
ng test --watch=false --browsers=ChromeHeadless || echo "⚠️  Algunos tests fallaron"

# Compilar para producción
echo "🔨 Compilando para producción..."
ng build --configuration production

# Verificar que la compilación fue exitosa
if [ ! -d "dist" ]; then
    echo "❌ Error: La compilación falló"
    exit 1
fi

echo "✅ Compilación exitosa!"

# Optimizar assets
echo "🎨 Optimizando assets..."
cd dist/*

# Comprimir archivos CSS y JS si están disponibles
if command -v gzip &> /dev/null; then
    find . -type f \( -name '*.js' -o -name '*.css' \) -exec gzip -k {} \;
    echo "✅ Archivos comprimidos con gzip"
fi

cd ../..

# Mostrar tamaño de archivos
echo "📊 Tamaño de archivos generados:"
du -sh dist/*

# Configurar para deployment específico
echo "🌐 Configurando para deployment..."

# Para GitHub Pages
if [ "$1" = "gh-pages" ]; then
    echo "📤 Preparando para GitHub Pages..."
    cp dist/*/index.html dist/*/404.html
    echo "✅ Configurado para GitHub Pages"
fi

# Para Netlify
if [ "$1" = "netlify" ]; then
    echo "📤 Preparando para Netlify..."
    echo "/*    /index.html   200" > dist/*/_redirects
    echo "✅ Configurado para Netlify"
fi

# Para Vercel
if [ "$1" = "vercel" ]; then
    echo "📤 Preparando para Vercel..."
    cat > dist/*/vercel.json << EOF
{
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOF
    echo "✅ Configurado para Vercel"
fi

echo "🎉 Deployment completado exitosamente!"
echo "📁 Los archivos están listos en: dist/"
echo ""
echo "📋 Próximos pasos:"
echo "   1. Subir los archivos del directorio dist/ a tu servidor"
echo "   2. Configurar tu servidor web para servir index.html como fallback"
echo "   3. Verificar que las rutas funcionen correctamente"
echo ""
echo "🔗 Enlaces útiles:"
echo "   - GitHub Pages: https://pages.github.com/"
echo "   - Netlify: https://www.netlify.com/"
echo "   - Vercel: https://vercel.com/"
echo ""
echo "✨ ¡Tu portafolio está listo para impresionar a los reclutadores!"
