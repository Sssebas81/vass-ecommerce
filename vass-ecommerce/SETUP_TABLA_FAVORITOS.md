# 🔧 Cómo Crear la Tabla Favorites en Supabase

## Paso 1: Accede a tu Dashboard de Supabase

1. Ve a https://supabase.com
2. Inicia sesión con tu cuenta
3. Selecciona tu proyecto `vass-ecommerce`

## Paso 2: Abre SQL Editor

1. En el menú izquierdo, haz click en **"SQL Editor"**
2. Haz click en **"New Query"**

## Paso 3: Copia el SQL

Copia **TODO ESTO**:

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

-- Política para SELECT (usuarios pueden ver sus propios favoritos)
CREATE POLICY "Users can see their own favorites"
  ON public.Favorites
  FOR SELECT
  USING (auth.uid() = user_id);

-- Política para INSERT (usuarios pueden insertar sus propios favoritos)
CREATE POLICY "Users can insert their own favorites"
  ON public.Favorites
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Política para DELETE (usuarios pueden eliminar sus propios favoritos)
CREATE POLICY "Users can delete their own favorites"
  ON public.Favorites
  FOR DELETE
  USING (auth.uid() = user_id);

-- Política para UPDATE (usuarios pueden actualizar sus propios favoritos)
CREATE POLICY "Users can update their own favorites"
  ON public.Favorites
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

## Paso 4: Ejecuta el SQL

1. Pega el SQL en la caja de texto
2. Haz click en **"Run"** (botón verde con triángulo)
3. Deberías ver: **✅ Success. No rows returned**

## Paso 5: Verifica que Funcionó

1. En el menú izquierdo, haz click en **"Table Editor"**
2. En la lista de tablas, deberías ver **"Favorites"**
3. Abre la tabla y verifica que tiene columnas:
   - `id` (BIGINT)
   - `user_id` (UUID)
   - `product_id` (INTEGER)
   - `created_at` (TIMESTAMP)

## Paso 6: Prueba en tu App

1. Ve a tu app (http://localhost:5173)
2. Haz login
3. Abre la consola (F12)
4. Deberías ver logs como: **✅ Favoritos del usuario cargados: 0**
5. Agrega un producto a favoritos
6. Revisa la tabla `Favorites` en Supabase
7. Deberías ver un nuevo registro

---

## 🆘 Si te Sale Error al Ejecutar el SQL

### Error: "syntax error at or near CREATE"
**Solución**: Asegúrate de haber copiado TODO el código sin espacios extra

### Error: "relation already exists"
**Solución**: La tabla ya existe, eso es bueno. Solo verifica las políticas:
1. Ve a **Authentication → Policies**
2. Haz click en la tabla **"Favorites"**
3. Deberías ver 4 políticas

### Error: "permission denied for schema public"
**Solución**: Ve a **Project Settings → Database**
- Verifica que tienes rol "authenticated" con permisos

---

## ✅ Checklist Final

- [ ] La tabla `Favorites` está creada
- [ ] La tabla tiene las columnas: id, user_id, product_id, created_at
- [ ] RLS está habilitado (ALTER TABLE ... ENABLE ROW LEVEL SECURITY)
- [ ] Las 4 políticas están creadas
- [ ] Puedes verlas en **Authentication → Policies**

Una vez completado, vuelve a tu app y prueba!
