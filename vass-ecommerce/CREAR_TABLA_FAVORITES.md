# 🔧 Crear Tabla Favorites en Supabase

## Tu Proyecto Supabase

**URL**: `https://qmxycsmtzrbokdgdupyf.supabase.co`

Las credenciales están en `src/.env.local` - ✅ Configuradas correctamente

---

## 📋 Pasos para Crear la Tabla

### Paso 1: Abre Supabase Dashboard
1. Ve a https://supabase.com
2. Login con tu cuenta
3. Selecciona el proyecto (debería mostrar `qmxycsmtzrbokdgdupyf`)

### Paso 2: Abre SQL Editor
En el menú izquierdo:
- Click en **"SQL Editor"**
- Luego **"New Query"**

### Paso 3: Copia y Ejecuta este SQL

```sql
-- Crear tabla Favorites
CREATE TABLE IF NOT EXISTS public.Favorites (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Habilitar Row Level Security
ALTER TABLE public.Favorites ENABLE ROW LEVEL SECURITY;

-- Política para SELECT (usuarios ven sus favoritos)
CREATE POLICY "Users can see their own favorites"
  ON public.Favorites
  FOR SELECT
  USING (auth.uid() = user_id);

-- Política para INSERT (usuarios insertan favoritos)
CREATE POLICY "Users can insert their own favorites"
  ON public.Favorites
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Política para DELETE (usuarios eliminan favoritos)
CREATE POLICY "Users can delete their own favorites"
  ON public.Favorites
  FOR DELETE
  USING (auth.uid() = user_id);

-- Política para UPDATE
CREATE POLICY "Users can update their own favorites"
  ON public.Favorites
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

### Paso 4: Ejecuta
1. Pega el SQL completo
2. Click en **"Run"** (botón verde)
3. Deberías ver: **✅ Success. No rows returned**

### Paso 5: Verifica
1. En el menú, click en **"Table Editor"**
2. Deberías ver la tabla **"Favorites"** en la lista
3. Click en ella para ver las columnas

---

## ✅ Después de Crear la Tabla

1. **Recarga tu app**: http://localhost:5173
2. **Agrega un favorito nuevo**
3. **Abre la consola** (F12)
4. Deberías ver:
   ```
   ✅ Favorito sincronizado con Supabase
   ```
5. **Ve a Supabase → Table Editor → Favorites**
6. Deberías ver tu favorito en la tabla

---

## 🆘 Si Algo Sale Mal

### Error: "syntax error"
- Asegúrate de haber copiado TODO el SQL
- Sin espacios extra ni caracteres raros

### Error: "already exists"
- La tabla ya existe (no es malo)
- Solo verifica las políticas:
  - Ve a **Authentication → Policies**
  - Deberías ver 4 políticas para "Favorites"

### Error: "permission denied"
- Ve a **Project Settings → Database**
- Verifica permisos de usuario

---

## 📊 Resultado Final

**Antes**:
- Favoritos guardados solo en localStorage
- Error 404 en consola (tabla no existe)

**Después**:
- Favoritos se guardan en localStorage ✅
- Favoritos se sincroniza en Supabase ✅
- Puedes ver favoritos desde otros dispositivos ✅
- Consola limpia sin errores 404 ✅

---

## 💡 Próximo Paso

Copia el SQL anterior, ve a Supabase SQL Editor y ejecuta.

¿Necesitas ayuda? Dime si ves algún error.
