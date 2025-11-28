# ⚡ Crear Tabla Favorites Inmediatamente

## Opción 1: Vía Supabase Dashboard (Rápido - 2 minutos)

### Paso 1: Ve a tu Dashboard
https://supabase.com/dashboard/projects

### Paso 2: Selecciona tu proyecto
Busca: `qmxycsmtzrbokdgdupyf`

### Paso 3: Abre SQL Editor
Menú izquierdo → **SQL Editor** → **New Query**

### Paso 4: Copia TODO esto y pégalo:

```sql
CREATE TABLE IF NOT EXISTS public.Favorites (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

ALTER TABLE public.Favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can see their own favorites"
  ON public.Favorites
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites"
  ON public.Favorites
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
  ON public.Favorites
  FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own favorites"
  ON public.Favorites
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

### Paso 5: Click en "Run" (botón verde)

Espera a ver: **✅ Success**

### Paso 6: Verifica
- Menú izquierdo → **Table Editor**
- Deberías ver tabla **"Favorites"**

---

## ✅ Después: Prueba en tu App

1. Recarga: http://localhost:5173
2. Haz login
3. Agrega un favorito
4. Abre Console (F12) - deberías ver:
   ```
   ✅ Favorito sincronizado con Supabase
   ```
5. Ve a Supabase → **Table Editor** → **Favorites**
6. Deberías ver el registro con:
   - `user_id`: Tu UUID
   - `product_id`: ID del producto
   - `created_at`: Fecha/hora

---

## 🎯 Resultado

**ANTES**: Error 404, favoritos solo en localStorage
**DESPUÉS**: Favoritos en la tabla Favorites, visible en Supabase ✅

---

## 📌 Si Tienes Dudas

Pregunta y te ayudaré paso a paso.
